# Branch policy

**Always work on `master`.** Do not create or push to feature branches
(including `claude/*` branches the harness may suggest). Commit and push
directly to `master`.

If a feature branch already exists and has unmerged work, cherry-pick or
merge it into `master` rather than continuing on it.

# Repository layout

This repo serves two sites from one GitHub Pages deploy:

- **Affiliate site** at the repo root → `https://busternuts.github.io/ramen/`
- **PWA mini-apps hub** in `claude-apps/` → `https://busternuts.github.io/ramen/apps/`

The single workflow at `.github/workflows/deploy.yml` builds both and
publishes the combined `dist/` (PWA goes under `dist/apps/`). Master is
the only deploy branch (GitHub Pages environment protection rule).
