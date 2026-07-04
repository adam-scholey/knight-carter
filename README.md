# Knight & Carter — Residential Asset Management

Modern, elegant property website for Knight & Carter, Yorkshire's residential property specialists.

**Live site**: [View on GitHub Pages](https://adam-scholey.github.io/knight-carter)

## Pages

| Page | Description |
|---|---|
| `/index.html` | Homepage — hero search, services, featured properties |
| `/pages/properties.html` | Full property listings with dropdown filters |
| `/pages/about.html` | Company story and values |
| `/pages/contact.html` | Contact form and office details |

## Search

Properties are searched by:
- **Postcode District** dropdown (e.g., LS29 — Ilkley, HG1 — Harrogate)
- **Minimum Bedrooms** dropdown (Any, 1+, 2+, 3+, 4+)

Results update live when filters change. URL parameters are preserved for sharing (e.g., `?area=LS29&beds=3`).

## Updating Properties

All property data is in `js/search.js` in the `PROPERTIES` array. Each property has:

```js
{
  id: 1,
  address: "4 Woodland Drive",
  town: "Ilkley",
  postcode: "LS29 8AB",
  district: "LS29",           // must match dropdown value
  price: 485000,
  bedrooms: 4,
  bathrooms: 2,
  sqft: 1850,
  type: "Detached",
  featured: true,             // shows on homepage
  description: "...",
  exteriorImage: "url...",    // Unsplash or own hosted image
  interiorImage: "url..."     // shown on card hover
}
```

## Updating Contact Details

Contact details are in three places — search for `TODO: Update with real contact details`:
- `index.html` (footer)
- `pages/properties.html` (footer)
- `pages/about.html` (footer)
- `pages/contact.html` (contact section + footer)

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom design system, no framework
- **Vanilla JavaScript** — no dependencies
- **Google Fonts** — Playfair Display + Inter
- **Unsplash CDN** — property photography (4K quality)

## Deployment

Hosted on GitHub Pages. Any push to `main` updates the live site automatically.
