# Carter & Knight v2 — Project Context for Documentation

This document is a compact reference for anyone writing documentation, READMEs, developer guides, or ADRs for the **Carter & Knight v2** letting-agency website. It covers the project's purpose, architecture, design system, data model, page inventory, admin panel, deployment, known limitations, and future roadmap.

---

## 1. Project Identity & Purpose

**Project name:** Carter & Knight  
**Version:** v2 (inside `Knight & Carter/v2/`)
**Tagline:** Professional Letting Services  
**Business focus:** Residential lettings and property management (rebuilt from the legacy `v1/` sales site).

**What it does:**
- Publishes rental property listings with search/filter.
- Provides tenant and landlord service pages.
- Includes a contact/viewing enquiry form.
- Includes a client-side admin panel for adding, editing, deleting, importing/exporting, and changing the status of properties.
- Tracks simple property views and enquiries via analytics stored in the browser.

**Live URL:** `https://adam-scholey.github.io/carter-knight/v2/`

**Legacy site preserved alongside:** `v1/` is the original Knight & Carter residential sales website, unchanged.

---

## 2. Audience & Tone

- **Primary users:** Prospective tenants, landlords, and property investors.
- **Secondary users:** Site admin/owner updating listings.
- **Tone:** Professional, trustworthy, calm, premium-but-approachable. Copy avoids hard sales and emphasises transparency, local expertise, and genuine care.

---

## 3. Tech Stack & Architecture

- **Static site:** HTML5, CSS3, vanilla JavaScript — no framework, no build step.
- **Fonts:** Google Fonts — `Manrope` (body) and `Fraunces` (headings).
- **Images:** Unsplash CDN placeholders; client-provided images via `img/` or base64 upload in admin.
- **Authentication:** Client-side SHA-256 password hashing via Web Crypto API.
- **Persistence:** `localStorage` only for admin session, property overrides, and analytics.
- **Hosting:** GitHub Pages via `.github/workflows/pages.yml`.
- **Deployment model:** Push to `main` redeploys the entire repo; `/v1` and `/v2` are served as sub-paths.

### Architecture Notes
- The `PROPERTIES` array in `js/search.js` is the **source of truth / fallback**.
- Admin edits are **layered on top** in `localStorage` (`ck_properties`).
- To make admin changes permanent, an admin must **Export JSON** from the dashboard and manually update `js/search.js`.
- There is **no backend or database** in this MVP. Contact forms do not send real emails.

---

## 4. Folder & File Structure

```
Knight & Carter/
├── v1/                          # legacy sales site (preserved as-is)
├── v2/                          # new letting agency site
│   ├── index.html               # homepage
│   ├── css/
│   │   └── styles.css           # single stylesheet, design tokens + layout
│   ├── js/
│   │   ├── search.js            # property data, search/filter, cards, analytics
│   │   ├── main.js              # navigation, active links, fade-up, contact form
│   │   ├── admin.js             # auth, CRUD helpers, import/export, base64 upload
│   │   └── tenant-landlord.js   # landlord enquiry form handler
│   ├── pages/
│   │   ├── properties.html      # rental listings + filters
│   │   ├── about.html           # company story and values
│   │   ├── contact.html         # contact/viewing enquiry form + tenant FAQ
│   │   ├── landlord-services.html # landlord services + enquiry form
│   │   └── _archive/            # archived pages (e.g. legacy tenant-services.html)
│   ├── admin/
│   │   ├── login.html           # admin login
│   │   ├── dashboard.html       # property list, status, export/import, analytics
│   │   └── property-edit.html   # add/edit property form
│   ├── docs/
│   │   └── image-guide.md       # image optimisation guidance
│   ├── img/                     # (empty) for client images
│   └── README.md                # v2-specific docs
├── tasks/
│   ├── plan.md                  # full transformation plan (scope, slices, risks)
│   └── todo.md                  # implementation checklist
├── hosting.md                   # proposal for backend/database/hosting
├── README.md                    # repo-level overview
├── .github/workflows/pages.yml  # GitHub Pages deploy
└── .nojekyll
```

---

## 5. Design System

The shipped v2 CSS uses the following design tokens (from `v2/css/styles.css`):

```css
:root {
  --navy:        #1B2420;
  --navy-mid:    #24312B;
  --navy-light:  #303F37;
  --gold:        #2F6F5E;
  --gold-light:  #4F9C82;
  --gold-pale:   #DCEEE6;
  --cream:       #F6F4EF;
  --white:       #FFFFFF;
  --text:        #1C2321;
  --text-mid:    #52584F;
  --text-muted:  #8C9188;
  --border:      #E4E1D8;
  --border-dark: #CFCBBE;
  --shadow-sm:   0 2px 10px rgba(27, 36, 32, 0.06);
  --shadow-md:   0 8px 28px rgba(27, 36, 32, 0.10);
  --shadow-lg:   0 20px 52px rgba(27, 36, 32, 0.16);
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-pill: 999px;
  --transition:  all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --max-width:   1200px;
}
```

- **Headings:** `Fraunces` (serif, weight 500).
- **Body:** `Manrope` (sans-serif, 16px, line-height 1.6).
- **Labels:** uppercase, small, letter-spaced, `var(--gold)`.
- **Hero:** full viewport height, dark overlay on background image, cream/gold text.
- **Cards:** white background, rounded corners, subtle shadow, `loading="lazy"` images.
- **Responsive:** mobile nav toggle, stacked filters, fluid grids.

> Note: the original transformation plan (`tasks/plan.md`) originally specified navy `#0D1B2A` / gold `#C5A028` / cream `#F8F5EF` with `Playfair Display` + `Inter`. The shipped v2 uses the tokens above and `Manrope` + `Fraunces`.

---

## 6. Page Inventory & Features

| File | Purpose | Key Features |
|------|---------|--------------|
| `index.html` | Homepage | Full-screen hero with price/status search, stats bar, services grid, featured rentals, landlord CTA |
| `pages/properties.html` | Rental listings | Price/status/type filters, results count, property cards, lazy images |
| `pages/about.html` | About | Company story, three core values (Transparency, Local Expertise, Genuine Care) |
| `pages/contact.html` | Contact | Enquiry form + tenant FAQ, contact details |
| `pages/landlord-services.html` | Landlords | Services grid, landlord responsibilities, landlord enquiry form |
| `admin/login.html` | Admin login | Password field, client-side auth, redirect to dashboard |
| `admin/dashboard.html` | Admin dashboard | Property table, status dropdown, edit/delete, export/import, analytics (views/inquiries) |
| `admin/property-edit.html` | Add/edit property | Full property form, image upload to base64, validation, save/redirect |

### Navigation
- Home, Rentals, For Landlords, About, Contact.
- Active page highlighted via `main.js`.
- Mobile hamburger menu toggles `nav-links.open`.

### Search & Filters
- Query params: `?price=0-750&status=Available&type=Detached`.
- Price ranges: `0-750`, `750-1000`, `1000-1500`, `1500+`.
- Status: `Available`, `Let Agreed`, `Under Offer`.
- Type: `Detached`, `Semi-Detached`, `Terraced`, `Flat`.

### Contact / Enquiry Forms
- `contactForm` records an inquiry for the selected property if the `recordInquiry` function exists.
- `landlordForm` uses `tenant-landlord.js` for a success-state display.
- All forms are **front-end only**; no real email is sent.

---

## 7. Property Data Model

The canonical property object (from `js/search.js`):

```js
{
  id: 1,
  address: "4 Woodland Drive",
  town: "Riverside",
  area: "RIVERSIDE",            // uppercase, spaces -> underscores
  pricePcm: 1450,               // monthly rent in GBP
  deposit: 1673,                // deposit in GBP
  fees: "No admin fees — deposit capped at 5 weeks' rent",
  bedrooms: 4,
  bathrooms: 2,
  sqft: 1850,
  type: "Detached",             // Detached | Semi-Detached | Terraced | Flat
  status: "Available",          // Available | Let Agreed | Under Offer
  availableDate: "Available Now",
  featured: true,               // shows on homepage
  description: "...",
  exteriorImage: "https://..." | "data:image/..." | "img/properties/...",
  interiorImage: "https://..." | "data:image/..." | "img/properties/..."
}
```

- `area` is auto-generated from `town` in the admin editor: `town.toUpperCase().replace(/\s+/g, '_')`.
- `availableDate` defaults to the selected `status` if left blank.

---

## 8. Admin Panel

### Authentication
- **Default password:** `CarterKnight2026!`
- Stored as SHA-256 hash in `localStorage` (`ck_admin_password_hash`) on first login.
- Session stored in `ck_admin_session` and lasts **2 hours**.
- `requireAuth()` redirects to `login.html` if the session is invalid.

### CRUD
- `loadProperties()` / `saveProperties()` — read/write from `localStorage`.
- `upsertProperty(property)` — add or update by `id`.
- `deleteProperty(id)` — remove by `id`.
- `nextPropertyId()` — max existing `id + 1`.

### Import / Export
- **Export JSON:** downloads `carter-knight-properties.json`.
- **Import JSON:** uploads a JSON array; replaces `ck_properties` in `localStorage`.

### Image Upload
- `fileToBase64(file, callback)` converts an uploaded image to a base64 data URL.
- The admin form accepts either an image URL or a file upload.

### Analytics
- `recordView(id)` increments views when a property card is rendered.
- `recordInquiry(propertyLabel)` increments inquiries when a contact form is submitted with a property selected.
- Dashboard shows `views` and `inquiries` per property.

### Security Caveat
This is an **MVP client-side admin panel**. Anyone with browser devtools access can bypass it. The `tasks/plan.md` Option B describes a future migration to a real backend (Firebase/Supabase) for production.

---

## 9. Forms & User Flows

### Hero Search
1. User selects price range and availability on homepage.
2. Form submits to `pages/properties.html?price=...&status=...`.
3. `search.js` reads query params, sets filter values, and renders matching cards.

### Property Card CTA
- Each card has an **Arrange Viewing** button linking to `contact.html?property=Address, Town`.
- `main.js` pre-fills the `propertyInterest` field from the URL parameter.

### Contact Form
- Fields: first name, last name, email, phone, enquiry type, property of interest, message.
- On submit, the button changes to "Message Sent" and resets after 4 seconds.
- If `recordInquiry` is available, it records the inquiry against the matching property.

### Admin Workflow
1. Go to `admin/login.html`.
2. Enter default password.
3. Dashboard lists properties; change status, edit, delete, export/import.
4. Add/edit uses `admin/property-edit.html`.
5. After editing, changes persist in `localStorage` only; export JSON to update `js/search.js`.

---

## 10. Image Strategy

- **Hero background:** 1920×1080, landscape, WebP/JPEG at quality ~80%.
- **Property photos:** 1200×800, WebP/JPEG.
- **Client upload workflow:** compress first (Squoosh/TinyPNG/ImageOptim), save to `v2/img/` or `v2/img/properties/`, reference with relative path.
- **Admin base64 upload:** convenient for MVP, but embeds image data in `localStorage`; prefer real file paths for production.
- **Fallbacks:** CSS backgrounds use the navy/cream palette so failed images don't break layout.
- See `v2/docs/image-guide.md` for full guidance.

---

## 11. Deployment

- GitHub Pages workflow: `.github/workflows/pages.yml`.
- Triggered on push to `main` or manually via `workflow_dispatch`.
- Uploads the entire repo root, so `v1` and `v2` are both available.
- Paths:
  - v2 homepage: `https://adam-scholey.github.io/carter-knight/v2/`
  - v1 homepage: `https://adam-scholey.github.io/carter-knight/v1/`

---

## 12. Content Placeholders & TODOs

Real client details are placeholders. Search for these across `v2/*.html` and `v2/pages/*.html`:

- `TODO: Update with real contact details from client`
- Placeholder phone: `01943 000 000`
- Placeholder email: `hello@carterandknight.co.uk`
- Placeholder office: `Regional Letting Office`
- Placeholder location: generic towns (`Riverside`, `Town Centre`, `Hillside`, `Meadowbank`)

Updating these is the main remaining content task before go-live.

---

## 13. Known Limitations & Risks

| Limitation | Why | Mitigation |
|------------|-----|------------|
| Admin panel not truly secure | No backend; auth is client-side | Document as MVP; migrate to Option B for production |
| Contact form does not send email | Static site has no server | Add backend (Fly.io/Supabase/Firebase) or form service |
| Property changes only persist in localStorage | Admin writes to browser, not disk | Export JSON and manually update `js/search.js` |
| Placeholder contact details | Client info not yet supplied | Replace TODO placeholders before launch |
| No hero background image support (yet) | `todo.md` item unchecked | `img/hero-bg.jpg` is the intended future path |
| No image gallery for interiors | `todo.md` item unchecked | Only two images per property (exterior + interior) |

---

## 14. Future Roadmap (Post-MVP)

From `tasks/plan.md` and `hosting.md`:

- Backend + database (Fly.io/Supabase/Firebase) for real auth, persistence, and email.
- Admin panel with secure login and real-time property updates.
- Tenant portal with login and favourites.
- Landlord portal with portfolio performance.
- Online rent payments (Stripe).
- Maintenance request tracking.
- Automated email/SMS notifications.
- Property viewing calendar.
- Document management (tenancy agreements, inventories).
- Analytics and reporting dashboard.

---

## 15. How to Write Documentation for This Project

When using `@[/docs]` or writing docs, prioritise:

1. **Audience-first:** separate public-facing copy (tenants, landlords) from internal/admin docs.
2. **MVP vs production:** always flag which features are client-side-only and what the production path is.
3. **Data flow:** explain that `js/search.js` is the fallback, `localStorage` is the runtime layer, and admin exports are the migration path.
4. **Security honesty:** do not claim the admin panel is secure.
5. **Image guidance:** point to `docs/image-guide.md` and mention Unsplash placeholders.
6. **Deployment:** explain GitHub Pages sub-path behaviour and the `main` branch trigger.
7. **Examples:** include real property object examples and sample query URLs.
8. **TODOs:** list the placeholder items that need client input before launch.

---

## 16. Quick Reference

- **Admin URL:** `https://adam-scholey.github.io/carter-knight/v2/admin/login.html`
- **Default admin password:** `CarterKnight2026!`
- **Properties URL:** `https://adam-scholey.github.io/carter-knight/v2/pages/properties.html`
- **Sample filtered URL:** `https://adam-scholey.github.io/carter-knight/v2/pages/properties.html?price=1000-1500&status=Available&type=Detached`
- **Main data file:** `v2/js/search.js`
- **Main stylesheet:** `v2/css/styles.css`
- **Image guide:** `v2/docs/image-guide.md`
- **Transformation plan:** `tasks/plan.md`
- **Hosting proposal:** `hosting.md`
