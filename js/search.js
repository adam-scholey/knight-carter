/* ============================================================
   KNIGHT & CARTER — Property Data & Search Logic
   ============================================================ */

const PROPERTIES = [
  {
    id: 1,
    address: "4 Woodland Drive",
    town: "Ilkley",
    postcode: "LS29 8AB",
    district: "LS29",
    price: 485000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1850,
    type: "Detached",
    featured: true,
    description: "A beautifully presented four-bedroom detached family home set in the heart of Ilkley. Generous south-facing rear garden, double garage, and stunning views towards Ilkley Moor.",
    exteriorImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 2,
    address: "12 Victoria Road",
    town: "Harrogate",
    postcode: "HG1 5PW",
    district: "HG1",
    price: 350000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1340,
    type: "Semi-Detached",
    featured: true,
    description: "A charming three-bedroom semi-detached Victorian home just moments from Harrogate town centre. Immaculate throughout with a modern kitchen extension and landscaped garden.",
    exteriorImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 3,
    address: "8 Moor Lane",
    town: "Otley",
    postcode: "LS21 1BB",
    district: "LS21",
    price: 289500,
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1180,
    type: "Terraced",
    featured: true,
    description: "A beautifully renovated stone-built terraced property in sought-after Otley. Original period features throughout with sympathetic modern upgrades, moments from the high street.",
    exteriorImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 4,
    address: "24 Park View",
    town: "Skipton",
    postcode: "BD23 1JR",
    district: "BD23",
    price: 225000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 890,
    type: "Terraced",
    featured: false,
    description: "A well-appointed two-bedroom terraced home in Skipton's popular Park View area. Ideal for first-time buyers or investors, with a south-facing garden and easy access to the town centre.",
    exteriorImage: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 5,
    address: "6 Church Street",
    town: "Wetherby",
    postcode: "LS22 6AT",
    district: "LS22",
    price: 375000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1690,
    type: "Detached",
    featured: false,
    description: "An impressive four-bedroom detached home in the heart of Wetherby. Exceptional presentation throughout, with a large enclosed garden and driveway. Walking distance to schools and amenities.",
    exteriorImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 6,
    address: "15 The Crescent",
    town: "Knaresborough",
    postcode: "HG5 0BT",
    district: "HG5",
    price: 295000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1240,
    type: "Semi-Detached",
    featured: false,
    description: "A superb three-bedroom semi-detached property on The Crescent, Knaresborough. Beautifully presented with modern bathrooms, open-plan kitchen-diner and enclosed rear garden.",
    exteriorImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 7,
    address: "3 Mill Road",
    town: "Guiseley",
    postcode: "LS20 8AN",
    district: "LS20",
    price: 315000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1360,
    type: "Semi-Detached",
    featured: false,
    description: "A stunning three-bedroom semi-detached home in Guiseley, finished to an exceptional standard. Bespoke kitchen, bi-fold doors to garden and master bedroom with en-suite.",
    exteriorImage: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 8,
    address: "18 Beech Avenue",
    town: "Boston Spa",
    postcode: "LS23 6AT",
    district: "LS23",
    price: 445000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1940,
    type: "Detached",
    featured: false,
    description: "A magnificent four-bedroom detached home in the village of Boston Spa. Generous accommodation across three floors, wrap-around garden and double garage. Excellent local schools.",
    exteriorImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=90&auto=format&fit=crop"
  }
];

/* --- Formatting Helpers ------------------------------------ */
function formatPrice(price) {
  return '£' + price.toLocaleString('en-GB');
}

function buildCard(property, fromPagesDir) {
  const base = fromPagesDir ? '../' : '';
  const contactHref = base + (fromPagesDir ? 'pages/contact.html' : 'pages/contact.html');
  const badge = property.featured
    ? `<span class="card-badge featured">Featured</span>`
    : `<span class="card-badge">${property.type}</span>`;

  return `
    <article class="property-card fade-up">
      <div class="card-image-wrap">
        <div class="card-images">
          <img
            src="${property.exteriorImage}"
            alt="Exterior of ${property.address}, ${property.town}"
            loading="lazy"
          >
          <img
            src="${property.interiorImage}"
            alt="Interior of ${property.address}, ${property.town}"
            loading="lazy"
          >
        </div>
        ${badge}
        <span class="card-image-hint">Hover for interior</span>
      </div>
      <div class="card-body">
        <p class="card-price">${formatPrice(property.price)}</p>
        <div class="card-address">
          <strong>${property.address}</strong>
          ${property.town}, ${property.postcode}
        </div>
        <div class="card-stats">
          <span class="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 22V8.5a1 1 0 01.4-.8L12 2l8.6 5.7a1 1 0 01.4.8V22M9 22V16h6v6"/>
            </svg>
            ${property.bedrooms} bed
          </span>
          <span class="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12h16M4 12V8a1 1 0 011-1h14a1 1 0 011 1v4M4 12v5a2 2 0 002 2h12a2 2 0 002-2v-5M2 20h20"/>
            </svg>
            ${property.bathrooms} bath
          </span>
          <span class="card-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            ${property.sqft.toLocaleString()} sq ft
          </span>
        </div>
        <div class="card-footer">
          <span class="card-type">${property.type}</span>
          <a href="${contactHref}?property=${encodeURIComponent(property.address + ', ' + property.town)}" class="btn-view">
            Book Viewing
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

/* --- Homepage: featured properties ------------------------- */
function loadFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featured = PROPERTIES.filter(p => p.featured);
  grid.innerHTML = featured.map(p => buildCard(p, false)).join('');
  triggerFadeUp();
}

/* --- Results page: search and filter ----------------------- */
function loadResults() {
  const grid = document.getElementById('resultsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const area = params.get('area') || 'ALL';
  const beds = parseInt(params.get('beds')) || 0;

  // Set toolbar dropdowns to match search
  const areaFilter = document.getElementById('areaFilter');
  const bedsFilter = document.getElementById('bedsFilter');
  if (areaFilter) areaFilter.value = area;
  if (bedsFilter) bedsFilter.value = beds;

  filterAndRender(area, beds, grid, countEl);

  // Wire up filter dropdowns
  if (areaFilter) areaFilter.addEventListener('change', () => refilter());
  if (bedsFilter) bedsFilter.addEventListener('change', () => refilter());
}

function refilter() {
  const grid = document.getElementById('resultsGrid');
  const countEl = document.getElementById('resultsCount');
  const area = document.getElementById('areaFilter').value;
  const beds = parseInt(document.getElementById('bedsFilter').value) || 0;

  // Update URL params without reload
  const url = new URL(window.location);
  url.searchParams.set('area', area);
  url.searchParams.set('beds', beds);
  window.history.replaceState({}, '', url);

  filterAndRender(area, beds, grid, countEl);
}

function filterAndRender(area, beds, grid, countEl) {
  const results = PROPERTIES.filter(p => {
    const areaMatch = area === 'ALL' || p.district === area;
    const bedsMatch = p.bedrooms >= beds;
    return areaMatch && bedsMatch;
  });

  if (countEl) {
    const label = area !== 'ALL' ? ` in <strong>${area}</strong>` : '';
    countEl.innerHTML = `<strong>${results.length}</strong> propert${results.length === 1 ? 'y' : 'ies'} found${label}`;
  }

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No properties found</h3>
        <p>Try broadening your search by selecting a different postcode area or reducing the minimum bedrooms.</p>
        <a href="properties.html" class="btn btn-outline-dark">Clear Filters</a>
      </div>
    `;
  } else {
    grid.innerHTML = results.map(p => buildCard(p, true)).join('');
    triggerFadeUp();
  }
}

/* --- Trigger fade-up observer ------------------------------ */
function triggerFadeUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* --- Init on DOM ready ------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  loadFeatured();
  loadResults();
});
