# Snapps

A PWA hub disguised as an App Store. One install on your phone, multiple mini-apps inside.

## Architecture

- **One PWA, many mini-apps.** The launcher (`src/hub/`) shows a grid of tiles. Each tile opens a mini-app (`src/apps/<name>/`) which is a route inside the same PWA.
- **Lazy loading.** Each mini-app is wrapped in `React.lazy()` and Vite splits it into its own chunk. Code for a mini-app only loads when you tap its tile.
- **Per-app data isolation.** Each mini-app gets its own IndexedDB database. No mini-app reads another's data.
- **Local-first.** No accounts, no servers. Data lives on the device.

## Conventions

- A mini-app must be **fully self-contained** in `src/apps/<name>/`. It must not import from another mini-app's directory. Shared code goes in `src/hub/` or a future `src/shared/`.
- Each mini-app exports a default React component from `<Name>App.jsx` that handles its own internal routing (use nested `<Routes>` under `*`).
- Each mini-app owns its own IndexedDB DB name — don't reuse.

## Adding a new mini-app

1. `mkdir src/apps/<name>` and create `<Name>App.jsx` with a default export.
2. Add an entry to `src/hub/apps.js`:
   ```js
   {
     id: '<name>',
     title: 'Display Name',
     emoji: '🎯',
     component: () => import('../apps/<name>/<Name>App.jsx'),
   }
   ```
3. Push. Reopen the PWA on your phone — new tile appears, no reinstall.

## Dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview  # serves the production build, accessible on LAN
```

## Install on iPhone

1. Open the deployed URL in Safari (not Chrome — iOS only allows PWA install from Safari).
2. Tap **Share** → **Add to Home Screen**.
3. Tap the new icon. Opens fullscreen with no Safari chrome — looks like a native app.

## Hosting

Hosted on **GitHub Pages** at `https://busternuts.github.io/snapps/`. The workflow in
`.github/workflows/deploy.yml` runs on push to `main`, builds with `npm run build`,
and publishes `dist/` via `actions/deploy-pages`.

Because GitHub Pages serves project repos under `/<repo-name>/`, `vite.config.js`
sets `base: '/snapps/'` and the React Router `BrowserRouter` uses
`basename={import.meta.env.BASE_URL}`. The workflow also copies `index.html` to
`404.html` so deep-link refreshes (e.g. `/snapps/apps/mood`) hit the SPA shell
instead of GitHub's 404 page.

### Source layout note

The canonical source lives in `busternuts/ramen` under `claude-apps/` (Claude
develops there). Updates flow to `busternuts/snapps` via:

```bash
# Run from a local clone of busternuts/ramen
git subtree split --prefix=claude-apps -b snapps-export
git push --force https://github.com/busternuts/snapps.git snapps-export:main
```

The push triggers the GitHub Actions workflow, which deploys to Pages.

## TODO

- Real app icons (currently using placeholders).
- Automated lint rule enforcing no-cross-app-imports (currently a documented convention).
- More mini-apps.
