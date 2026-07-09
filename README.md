# Carter & Knight

This repository hosts two versions of the site side by side:

| Version | Description | Live URL |
|---|---|---|
| `v1/` | Original Knight & Carter residential sales website (legacy, preserved as-is) | https://adam-scholey.github.io/carter-knight/v1/ |
| `v2/` | Carter & Knight letting agency rebuild (see `tasks/plan.md` for scope) | https://adam-scholey.github.io/carter-knight/v2/ |

## Structure

```
carter-knight/
├── v1/          # legacy Knight & Carter sales site
├── v2/          # new Carter & Knight letting agency site
├── tasks/       # planning docs (plan.md, todo.md)
└── .github/     # GitHub Pages deploy workflow
```

## Deployment

Hosted on GitHub Pages via `.github/workflows/pages.yml`. Any push to `main` redeploys the whole repository, so both `/v1` and `/v2` are served as sub-paths automatically.

See `v1/README.md` for the legacy site's documentation and `tasks/plan.md` / `tasks/todo.md` for the v2 rebuild plan.
