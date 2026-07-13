# Image Optimization Guide

Guidance for adding client-provided photos (e.g. iPhone photos) to the Carter & Knight site.

## Recommended Tools

- **[Squoosh](https://squoosh.app/)** — free, browser-based image compressor (WebP/AVIF/JPEG)
- **[TinyPNG](https://tinypng.com/)** — quick drag-and-drop compression
- **ImageOptim** (Mac) — batch optimization, strips metadata

## Size Recommendations

| Use Case | Recommended Size | Format |
|---|---|---|
| Hero background | 1920×1080 (landscape) | WebP, quality 80% |
| Property exterior/interior | 1200×800 | WebP or JPEG, quality 80% |
| Team/about photos | 1200×1200 max | WebP or JPEG, quality 80% |

## Taking Photos on iPhone

- Shoot in **landscape orientation** for hero and property exteriors
- Use **good, even lighting** — golden hour (early morning / late afternoon) works well outdoors
- Keep the **frame free of clutter** — tidy rooms, clear driveways
- Avoid extreme HDR — it can look unnatural once compressed for web

## Adding Images to the Site

1. Compress the photo using one of the tools above (target under 300KB per image where possible).
2. Save it into `v2/img/` (hero images) or `v2/img/properties/` (property photos).
3. Reference it with a relative path, e.g. `img/properties/4-woodland-drive-exterior.webp`.
4. Property images can also be added directly through the **Admin Panel** (`admin/property-edit.html`), which converts an uploaded file to a base64 data URL automatically — convenient for MVP use, but for a production site prefer hosting optimized files in `img/properties/` and pasting the path/URL instead, to keep the property data file lightweight.

## Fallbacks

Every image tag in the site includes `loading="lazy"`. If a client photo fails to load, the surrounding section still uses the navy/gold/cream colour palette as a background, so the layout does not break.
