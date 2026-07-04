# Knight & Carter — Implementation Plan

## Overview
A modern, elegant static website for Knight & Carter Residential Asset Management.
Hosted on GitHub Pages as a project page: `username.github.io/knight-carter`

## Key Decisions
- **Search**: Two dropdowns (Postcode District + Min Bedrooms) — eliminates input injection risk
- **Images**: Unsplash 4K property images (exterior + interior per listing)
- **Stack**: HTML5 + CSS3 + Vanilla JS — no build tools, instant GitHub Pages deployment
- **Contact**: Placeholder details (pending real info from client)
- **Hosting**: GitHub Pages project page (unlimited, separate from portfolio)

## Design System
- Fonts: Playfair Display (headings) + Inter (body)
- Colors: Navy #0D1B2A | Gold #C5A028 | Cream #F8F5EF | White #FFFFFF
- Images: Unsplash w=2400&q=90 (crisp on 4K displays)

## Phases

### Phase 1: Foundation
- Project structure, .nojekyll, README, git init
- Commit: "chore: initialise project structure"

### Phase 2: Design System + Homepage
- css/styles.css (full design system)
- index.html (hero, search, features, footer)
- js/main.js (navigation, mobile menu)
- Commit: "feat: homepage with search dropdowns"

### Phase 3: Property Listings
- js/search.js (8 mock properties with 4K images)
- pages/properties.html (results grid, bedroom filter)
- Commit: "feat: property results page"

### Phase 4: About + Contact
- pages/about.html
- pages/contact.html (accessible form, prominent contact info)
- Commit: "feat: about and contact pages"

### Phase 5: Polish + Testing
- Cross-page navigation test
- Mobile responsiveness test
- URL param search test
- Commit: "fix: polish and cross-browser fixes"

### Phase 6: Deploy
- gh repo create knight-carter --public
- git push -u origin main
- Enable GitHub Pages
- Commit: "chore: deploy to GitHub Pages"

## File Structure
```
knight-carter/
├── index.html
├── pages/
│   ├── properties.html
│   ├── about.html
│   └── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── search.js
├── .nojekyll
└── README.md
```

## Risks
- Image load speed → Unsplash CDN handles this natively
- Contact info missing → Placeholder used, clearly commented for update
- GitHub Pages subdirectory paths → All paths relative, tested before deploy
