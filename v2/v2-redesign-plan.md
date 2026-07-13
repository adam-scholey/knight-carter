# Carter & Knight v2 — IA Simplification & Redesign Plan

**For:** AI coding agent (Claude Code) working directly in the repo
**Scope:** `Knight & Carter/v2/` only. Do not touch `v1/`.
**Do not** rewrite `tasks/plan.md` or `hosting.md` — this document supersedes them for this piece of work.

---

## Why these changes

- This is a **letting agency site, not a portal**. Landlords are the supply side (they choose who manages their property) and need a persuasive services/fees page — this is a lead-gen page, keep it prominent.
- Tenants mainly need to browse and enquire, which `properties.html` and `contact.html` already cover. A full standalone Tenant Services page adds nav clutter without adding conversion value, since there's no tenant login/portal in this MVP.
- Decision: **remove `tenant-services.html` from primary navigation**, fold its essential content (applying to rent, deposit protection, repairs contact) into a short FAQ block on `contact.html`, then archive the old page.
- Visual design is dated relative to 2026 letting-agency competitors — refresh tokens, typography scale, and component styling without changing the underlying architecture (still static HTML/CSS/JS, no framework, no build step).

---

## Phase 0 — Audit & Backup

1. Copy the current `v2/` folder to `v2-legacy-backup/` (untracked or in a `_archive/` folder) before making changes, so nothing is lost.
2. Grep all `v2/*.html` and `v2/pages/*.html` for:
   - Every link to `tenant-services.html`
   - Every nav `<li>` block (likely repeated per page — note all locations)
   - Every `TODO:` placeholder (see Section 12 of context.md) — leave these as-is, do not invent real contact details.
3. Confirm `js/tenant-landlord.js` handles both the landlord form *and* any tenant form logic — separate these if intertwined, since only the landlord form survives on its own page.

**Output of this phase:** a short list of every file that references tenant nav/content, so nothing gets missed in Phase 1.

---

## Phase 1 — Information Architecture Update

1. **Navigation** (update in every page's header + `main.js` active-link logic):
   - Old: `Home / Rentals / Tenants / Landlords / About / Contact`
   - New: `Home / Rentals / Landlords / About / Contact`
2. **Retire `pages/tenant-services.html`** from navigation. Move it to `pages/_archive/tenant-services.html` (or delete outright if the client confirms no future portal is planned — recommend archiving, not deleting, in case content is reused for FAQ).
3. **Add an FAQ section to `pages/contact.html`** containing only the essentials a prospective tenant needs before enquiring:
   - How to apply to rent
   - Deposit protection statement (legal requirement — keep this, don't drop it)
   - How to report a repair (once already a tenant)
   - Keep this to 3–4 short Q&A pairs, not the full old page.
4. **Elevate the Landlord page**: rename nav label from "Landlords" to "For Landlords" (clearer intent, matches lead-gen framing), and ensure it's reachable from the homepage hero/CTA as well as nav (it already has a homepage CTA per context.md — confirm it's still there after redesign).
5. Update any internal links (e.g. footer, sitemap-style link lists) that pointed to the old tenant page.
6. Update `README.md` in `v2/` to reflect the new page inventory.

**Acceptance check:** no working link in the site points to a 404'd or removed tenant page; nav is consistent across all 9 remaining pages.

---

## Phase 2 — Design System Refresh

Redesign tokens in `css/styles.css`. Keep the existing hue direction (deep green/navy + cream — it's distinctive and on-brand for a premium letting agency) but modernise contrast, spacing, and type scale rather than reverting to generic templated defaults (avoid: cream-bg + terracotta-accent look, avoid: default SaaS blue).

1. **Type scale:** define an explicit modular scale (e.g. 1.25 ratio) from `--text-xs` to `--text-5xl` rather than ad hoc heading sizes. Keep `Fraunces` for headings, `Manrope` for body — these already pair well; just tighten the hierarchy.
2. **Color:** keep `--navy`, `--gold` (green), `--cream` family, but audit contrast ratios (WCAG AA minimum) — some of the muted text tokens (`--text-muted: #8C9188`) are likely borderline on `--cream` backgrounds; verify and adjust.
3. **Spacing:** introduce a consistent spacing scale (4/8/12/16/24/32/48/64/96px) and replace ad hoc margins/paddings across `styles.css`.
4. **Components to visually refresh:**
   - Hero (homepage): keep full-bleed image + search, but modernise the search widget into a single elevated card (currently likely a flat bar per legacy pattern).
   - Property cards: sharper hierarchy — price and status badge should be the first thing the eye hits, not buried under image.
   - Nav: sticky on scroll, subtle shadow on scroll-past-hero, active-state underline using `--gold`.
   - Forms (contact/landlord): floating or top-aligned labels, clearer required-field marking, better error/success states.
5. **Motion:** one deliberate moment (e.g. fade-up on scroll — already exists per `main.js`) rather than adding scattered new animations. Respect `prefers-reduced-motion`.
6. **Signature element:** pick one memorable visual device for the whole redesign (e.g. a distinctive way status badges or price tags are rendered) rather than distributing effort evenly everywhere.

**Do not** introduce a CSS framework or build step — this stays hand-written vanilla CSS per the existing architecture.

---

## Phase 3 — Page-by-Page Rebuild

Work in this order (highest-traffic/highest-value pages first):

1. `index.html` — hero, stats bar, services grid, featured rentals, landlord CTA
2. `pages/properties.html` — listings + filters
3. `pages/landlord-services.html` — now the primary lead-gen page, give it extra polish
4. `pages/contact.html` — enquiry form + new FAQ block from Phase 1
5. `pages/about.html`
6. `admin/*` — lower priority visually (internal tool), but keep consistent with new tokens for maintainability

For each page: rebuild against the new tokens, verify all JS hooks (`search.js`, `main.js`, `admin.js`, `tenant-landlord.js`) still target the correct class/ID names — **do not rename classes/IDs that JS depends on without updating the JS in the same commit.**

---

## Phase 4 — QA Pass

1. Responsive check at 375px / 768px / 1024px / 1440px.
2. Keyboard navigation + visible focus states on all interactive elements (nav, filters, form fields, buttons).
3. Re-test the full form flows: hero search → properties filter → property card → contact form pre-fill → submit state.
4. Re-test admin flows (login → dashboard → add/edit property → export JSON) to confirm nothing in the redesign broke `admin.js` selectors.
5. Confirm `localStorage`-based property overrides still render correctly with new card styling.

---

## Phase 5 — Content Cleanup

1. Do **not** invent real client details. Leave all `TODO:` placeholders exactly as flagged in context.md Section 12 (phone, email, office, town names) for the client to supply.
2. Update `docs/image-guide.md` if new image aspect ratios/sizes are introduced by the redesign.

---

## Phase 6 — Deploy

1. Commit changes scoped to `v2/` only.
2. Push to `main` — GitHub Pages workflow (`.github/workflows/pages.yml`) redeploys automatically.
3. Verify live at `https://adam-scholey.github.io/carter-knight/v2/` — check homepage, properties, landlord page, contact/FAQ, about, and admin login.
4. Confirm `v1/` is untouched and still live at its own path.

---

## Out of scope for this pass

(Leave for the existing `tasks/plan.md` / `hosting.md` roadmap — don't build these now)

- Backend/database migration
- Real email sending on forms
- Tenant portal / landlord portal with login
- Online rent payments
- Any change to the client-side-only admin auth model
