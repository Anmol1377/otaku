<div align="center">

# 🌸 OTAKU

**Endless anime & gaming wallpapers, art and memes — in one swipeable PWA.**

No account. No tracking. No server. Just open and scroll.

[**▶ Live demo**](https://anmol1377.github.io/otaku/) · [Report a bug](https://github.com/Anmol1377/otaku/issues) · [Request a feature](https://github.com/Anmol1377/otaku/issues)

</div>

---

## ✨ Features

- **Two universes** — switch between **Anime** 🌸 and **Gaming** 🎮 with one tap; the whole UI re-themes (accent, logo, sources, trending).
- **Infinite feed** — auto-loading, de-duplicated, never repeats within a session (rotates sources **and** sort orders).
- **Explore** — search any anime/game/character/meme, with trending chips (Valorant, Jujutsu Kaisen, CS2, One Piece…).
- **Save in HD** — download any wallpaper as a full-resolution **JPEG**, straight to your device.
- **Send** — share to WhatsApp / anywhere via the native share sheet.
- **Saved** — bookmark posts; stored **only on your device** (localStorage) — fully private.
- **Dark / Light** theme, **installable PWA** (works offline for seen content).

## 🧠 How it works

OTAKU is a **single static HTML file** — no backend, no build step, no database. All logic runs in your browser:

- Content is aggregated live from the open [**Lemmy**](https://join-lemmy.org/) network (anime & gaming communities) via its public JSON API.
- Images download as HD JPEG using an in-browser `<canvas>`.
- Your saves & preferences live in `localStorage` — nothing leaves your device.

That means it can be hosted anywhere static — including **GitHub Pages**, for free.

## 🚀 Run locally

```bash
git clone https://github.com/Anmol1377/otaku.git
cd otaku
python3 -m http.server 8080
# open http://localhost:8080
```

> A PWA needs to be *served* (not opened as a `file://`). The one-liner above is enough.

## 📦 Deploy

Already Pages-ready. Push to `main`, then enable **Settings → Pages → Deploy from branch → main / root**.
Live at `https://<user>.github.io/otaku/`.

## 🛠 Tech

Vanilla JS · HTML · CSS · Service Worker · Web App Manifest · Lemmy public API. **Zero dependencies.**

## 🤝 Contributing

PRs welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). Good first issues: add content sources, new themes, a video tab, or keyboard shortcuts.

## 📄 License

[MIT](LICENSE) © Anmol
