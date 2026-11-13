# Contributing to OTAKU

Thanks for wanting to help! OTAKU is intentionally tiny and dependency-free, so contributing is easy.

## Ground rules

- **Single file.** The whole app is `index.html` (HTML + CSS + vanilla JS). No frameworks, no build step, no npm.
- **Static only.** No backend, no secrets, no tracking. Anything that needs a server is out of scope.
- **Privacy first.** User data stays in `localStorage`. Don't add analytics or external calls beyond public content APIs.

## Setup

```bash
git clone https://github.com/Anmol1377/otaku.git
cd otaku
python3 -m http.server 8080   # then open http://localhost:8080
```

## Making a change

1. Fork the repo and create a branch: `git checkout -b my-feature`.
2. Edit `index.html`. Keep the code style of the surrounding code (compact, vanilla).
3. Test in the browser (Anime **and** Gaming modes, dark **and** light, mobile viewport).
4. Commit and open a Pull Request describing **what** and **why**.

## Good first issues

- Add new anime/gaming communities to the `ANIME` / `GAMING` source lists.
- Add a new accent theme.
- A dedicated **Video** tab.
- Keyboard navigation for the feed.
- Better error/empty states.

## Reporting bugs

Open an issue with steps to reproduce, your browser/OS, and a screenshot if visual.
