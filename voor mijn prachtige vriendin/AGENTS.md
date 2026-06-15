**AGENTS: Local dev / live-server guidance**

This repository is a small static site located in the `kijk dit` folder. There is no build step or package manager detected; the app is plain HTML/CSS/JS and a service worker.

Files of interest:

- **Index:** [kijk dit/index.html](kijk dit/index.html#L1)
- **App script:** [kijk dit/script.js](kijk dit/script.js#L1)
- **Styles:** [kijk dit/style.css](kijk dit/style.css#L1)
- **Service worker:** [kijk dit/service-worker.js](kijk dit/service-worker.js#L1)
- **Manifest:** [kijk dit/manifest.json](kijk dit/manifest.json#L1)

How to run a local dev server (agents should try these in order):

1. VS Code Live Server extension (recommended for fast iteration)
   - Command: use the editor command "Live Server: Open with Live Server" on [kijk dit/index.html](kijk dit/index.html#L1).

2. Node (no install, using npx)
   - Command (from repo root): `npx http-server "kijk dit" -p 8000`

3. Python (builtin, cross-platform)
   - Python 3: `python -m http.server 8000 --directory "kijk dit"`

4. Simple PowerShell HTTP listener (Windows fallback)
   - Command (PowerShell in repo root): `Start-Process powershell -ArgumentList '-NoProfile','-Command','Set-Location -LiteralPath "kijk dit"; python -m http.server 8000'`

Notes for agents working on this repo:

- There is no package.json or build tooling: avoid adding assumptions about Node builds unless the user requests it.
- The site is static; changes to `script.js`, `style.css`, or `index.html` are sufficient for most edits.
- Service worker may cache assets; when testing changes, reload the page with the service worker disabled or update the service worker file to avoid stale caches.
- If adding automated tasks (lint, test, build), include install and run instructions in this file.

If you want, I can also add a `.github/copilot-instructions.md` variant that surfaces quick edit guidelines and review expectations.
