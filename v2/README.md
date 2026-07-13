# Carter & Knight — Professional Letting Services (v2)

Rebuild of the Knight & Carter sales website (see `../v1/`) into a full letting agency site: rental listings, an admin panel for property management, and dedicated tenant/landlord service pages.

**Live site**: https://adam-scholey.github.io/carter-knight/v2/

## Pages

| Page | Description |
|---|---|
| `/index.html` | Homepage — hero search, services, featured rentals |
| `/pages/properties.html` | Rental listings with price/status/type filters |
| `/pages/about.html` | Company story and values |
| `/pages/contact.html` | Contact form (viewing / tenant / landlord enquiries) + tenant FAQ |
| `/pages/landlord-services.html` | Property management overview, landlord enquiry form |
| `/admin/login.html` | Admin sign-in |
| `/admin/dashboard.html` | Property list, status changes, delete, import/export, view/inquiry analytics |
| `/admin/property-edit.html` | Add/edit a property (incl. image upload) |

## Admin Panel

- **Default password**: `CarterKnight2026!` (hashed with SHA-256 in `localStorage` on first load — change it via browser devtools/localStorage if needed, or wire up a real settings page)
- Session lasts 2 hours (`localStorage`, key `ck_admin_session`)
- Property data is stored in `localStorage` (`ck_properties`); edits made in the admin panel persist in the browser but are **not** written back to `js/search.js` on disk — use **Export JSON** in the dashboard to download the current data and manually update `js/search.js` for permanent changes.

> ⚠️ **Security note**: This is a client-side-only MVP admin panel per the transformation plan (`../tasks/plan.md`, Option A). It is **not secure** for production — anyone with browser devtools access can bypass it. See `../tasks/plan.md` Option B for a real backend (Firebase/Supabase) migration path.

## Updating Properties

Default property data lives in `js/search.js` in the `PROPERTIES` array. Each property has:

```js
{
  id: 1,
  address: "4 Woodland Drive",
  town: "Riverside",
  area: "RIVERSIDE",
  pricePcm: 1450,
  deposit: 1673,
  fees: "No admin fees — deposit capped at 5 weeks' rent",
  bedrooms: 4,
  bathrooms: 2,
  sqft: 1850,
  type: "Detached",
  status: "Available",       // 'Available' | 'Let Agreed' | 'Under Offer'
  availableDate: "Available Now",
  featured: true,             // shows on homepage
  description: "...",
  exteriorImage: "url...",
  interiorImage: "url..."
}
```

Admin edits are layered on top via `localStorage` (see `loadProperties()` / `saveProperties()` in `js/search.js`) so the static array above always remains the fallback/reset state.

## Updating Contact Details

Search for `TODO: Update with real contact details` across `index.html` and `pages/*.html`.

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no framework, no build step
- **Google Fonts** — Playfair Display + Inter
- **Unsplash CDN** — property photography placeholders
- **Web Crypto API** — SHA-256 password hashing for the admin MVP login

## Deployment

Hosted on GitHub Pages via `../.github/workflows/pages.yml`, which uploads the whole repo — `/v1` and `/v2` are both served as sub-paths automatically on push to `main`.

See `docs/image-guide.md` for guidance on adding real property photos.
