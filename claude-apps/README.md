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

Lives at **`https://busternuts.github.io/ramen/apps/`**, deployed by the
workflow at `<repo-root>/.github/workflows/deploy.yml`. That same workflow
also builds the affiliate site at the repo root and publishes it to
`https://busternuts.github.io/ramen/`. Both share one GitHub Pages deploy.

Because the PWA is served under `/ramen/apps/`, `vite.config.js` sets
`base: '/ramen/apps/'`, the React Router `BrowserRouter` uses
`basename={import.meta.env.BASE_URL}`, and the workflow copies the built
`index.html` to `404.html` so deep-link refreshes hit the SPA shell.

## TODO

- Real app icons (currently using placeholders).
- Automated lint rule enforcing no-cross-app-imports (currently a documented convention).
- More mini-apps.
