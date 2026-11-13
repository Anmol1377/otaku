const V = 'otaku-v3';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') { e.respondWith(fetch(req).catch(() => caches.match('./index.html'))); return; }
  if (url.pathname.includes('/api/v3/')) {                         // live content: network-first
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req)));
    return;
  }
  // images, fonts, static: serve cached, refresh in background (offline viewing of seen media)
  e.respondWith(caches.match(req).then(cached => {
    const net = fetch(req).then(r => { if (r && r.status === 200) { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); } return r; }).catch(() => cached);
    return cached || net;
  }));
});
