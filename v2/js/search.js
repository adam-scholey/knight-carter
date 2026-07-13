/* ============================================================
   CARTER & KNIGHT — Rental Property Data & Search Logic
   ============================================================ */

const PROPERTIES = [
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
    status: "Available",
    availableDate: "Available Now",
    featured: true,
    description: "A beautifully presented four-bedroom detached family home in the sought-after Riverside area. Generous south-facing rear garden, double garage, and unfurnished throughout — ready for you to make it home.",
    exteriorImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 2,
    address: "12 Victoria Road",
    town: "Town Centre",
    area: "TOWN_CENTRE",
    pricePcm: 975,
    deposit: 1125,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1340,
    type: "Semi-Detached",
    status: "Available",
    availableDate: "Available Now",
    featured: true,
    description: "A charming three-bedroom semi-detached period home just moments from the town centre. Immaculate throughout with a modern kitchen extension and landscaped garden — offered part-furnished.",
    exteriorImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 3,
    address: "8 Moor Lane",
    town: "Hillside",
    area: "HILLSIDE",
    pricePcm: 825,
    deposit: 952,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1180,
    type: "Terraced",
    status: "Let Agreed",
    availableDate: "Let Agreed",
    featured: true,
    description: "A beautifully renovated stone-built terraced property in sought-after Hillside. Original period features throughout with sympathetic modern upgrades, moments from local shops and transport links.",
    exteriorImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 4,
    address: "24 Park View",
    town: "Meadowbank",
    area: "MEADOWBANK",
    pricePcm: 650,
    deposit: 750,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 890,
    type: "Terraced",
    status: "Available",
    availableDate: "Available from 1st of next month",
    featured: false,
    description: "A well-appointed two-bedroom terraced home in the popular Meadowbank area. Ideal for professionals or small families, with a south-facing garden and easy access to local amenities.",
    exteriorImage: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 5,
    address: "6 Church Street",
    town: "Riverside",
    area: "RIVERSIDE",
    pricePcm: 1195,
    deposit: 1379,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1690,
    type: "Detached",
    status: "Under Offer",
    availableDate: "Under Offer",
    featured: false,
    description: "An impressive four-bedroom detached home in the heart of Riverside. Exceptional presentation throughout, with a large enclosed garden and driveway. Walking distance to schools and amenities.",
    exteriorImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 6,
    address: "15 The Crescent",
    town: "Hillside",
    area: "HILLSIDE",
    pricePcm: 895,
    deposit: 1033,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1240,
    type: "Semi-Detached",
    status: "Available",
    availableDate: "Available Now",
    featured: false,
    description: "A superb three-bedroom semi-detached property on The Crescent. Beautifully presented with modern bathrooms, open-plan kitchen-diner and an enclosed rear garden — unfurnished.",
    exteriorImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 7,
    address: "3 Mill Road",
    town: "Town Centre",
    area: "TOWN_CENTRE",
    pricePcm: 925,
    deposit: 1067,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1360,
    type: "Semi-Detached",
    status: "Available",
    availableDate: "Available Now",
    featured: false,
    description: "A stunning three-bedroom semi-detached home in Town Centre, finished to an exceptional standard. Bespoke kitchen, bi-fold doors to garden and master bedroom with en-suite.",
    exteriorImage: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2400&q=90&auto=format&fit=crop"
  },
  {
    id: 8,
    address: "18 Beech Avenue",
    town: "Meadowbank",
    area: "MEADOWBANK",
    pricePcm: 1350,
    deposit: 1558,
    fees: "No admin fees — deposit capped at 5 weeks' rent",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1940,
    type: "Detached",
    status: "Available",
    availableDate: "Available from 1st of next month",
    featured: false,
    description: "A magnificent four-bedroom detached home in the village of Meadowbank. Generous accommodation across three floors, wrap-around garden and double garage. Excellent local schools nearby.",
    exteriorImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400&q=90&auto=format&fit=crop",
    interiorImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=90&auto=format&fit=crop"
  }
];

/* --- Persistence: admin edits override the defaults above --- */
function loadProperties() {
  try {
    const stored = localStorage.getItem('ck_properties');
    if (stored) return JSON.parse(stored);
  } catch (e) { /* ignore malformed storage */ }
  return PROPERTIES;
}

function saveProperties(list) {
  localStorage.setItem('ck_properties', JSON.stringify(list));
}

/* --- Simple analytics: views & inquiries -------------------- */
function loadAnalytics() {
  try {
    return JSON.parse(localStorage.getItem('ck_analytics')) || {};
  } catch (e) {
    return {};
  }
}

function saveAnalytics(data) {
  localStorage.setItem('ck_analytics', JSON.stringify(data));
}

function recordView(id) {
  const data = loadAnalytics();
  if (!data[id]) data[id] = { views: 0, inquiries: 0 };
  data[id].views += 1;
  saveAnalytics(data);
}

function recordInquiry(propertyLabel) {
  if (!propertyLabel) return;
  const property = loadProperties().find(p => `${p.address}, ${p.town}` === propertyLabel);
  if (!property) return;
  const data = loadAnalytics();
  if (!data[property.id]) data[property.id] = { views: 0, inquiries: 0 };
  data[property.id].inquiries += 1;
  saveAnalytics(data);
}

/* --- Formatting Helpers ------------------------------------ */
function formatPricePcm(price) {
  return '£' + price.toLocaleString('en-GB') + ' pcm';
}

function statusBadgeClass(status) {
  if (status === 'Let Agreed') return 'status-let-agreed';
  if (status === 'Under Offer') return 'status-under-offer';
  return 'status-available';
}

function buildCard(property, fromPagesDir) {
  recordView(property.id);
  const base = fromPagesDir ? '../' : '';
  const contactHref = base + 'pages/contact.html';
  const featuredBadge = property.featured ? `<span class="card-badge featured">Featured</span>` : '';

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
        ${featuredBadge}
        <span class="card-badge status-badge ${statusBadgeClass(property.status)}">${property.status}</span>
      </div>
      <div class="card-body">
        <p class="card-price">${formatPricePcm(property.pricePcm)}</p>
        <div class="card-address">
          <strong>${property.address}</strong>
          ${property.town}
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
          <span class="card-type">${property.type} &middot; ${property.availableDate}</span>
          <a href="${contactHref}?property=${encodeURIComponent(property.address + ', ' + property.town)}" class="btn-view">
            Arrange Viewing
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

  const featured = loadProperties().filter(p => p.featured);
  grid.innerHTML = featured.map(p => buildCard(p, false)).join('');
  triggerFadeUp();
}

/* --- Results page: search and filter ----------------------- */
function priceInRange(price, range) {
  switch (range) {
    case '0-750': return price <= 750;
    case '750-1000': return price > 750 && price <= 1000;
    case '1000-1500': return price > 1000 && price <= 1500;
    case '1500+': return price > 1500;
    default: return true;
  }
}

function loadResults() {
  const grid = document.getElementById('resultsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const priceRange = params.get('price') || 'ALL';
  const status = params.get('status') || 'ALL';
  const type = params.get('type') || 'ALL';

  const priceFilter = document.getElementById('priceFilter');
  const statusFilter = document.getElementById('statusFilter');
  const typeFilter = document.getElementById('typeFilter');
  if (priceFilter) priceFilter.value = priceRange;
  if (statusFilter) statusFilter.value = status;
  if (typeFilter) typeFilter.value = type;

  filterAndRender(priceRange, status, type, grid, countEl);

  if (priceFilter) priceFilter.addEventListener('change', refilter);
  if (statusFilter) statusFilter.addEventListener('change', refilter);
  if (typeFilter) typeFilter.addEventListener('change', refilter);
}

function refilter() {
  const grid = document.getElementById('resultsGrid');
  const countEl = document.getElementById('resultsCount');
  const priceRange = document.getElementById('priceFilter').value;
  const status = document.getElementById('statusFilter').value;
  const type = document.getElementById('typeFilter').value;

  const url = new URL(window.location);
  url.searchParams.set('price', priceRange);
  url.searchParams.set('status', status);
  url.searchParams.set('type', type);
  window.history.replaceState({}, '', url);

  filterAndRender(priceRange, status, type, grid, countEl);
}

function filterAndRender(priceRange, status, type, grid, countEl) {
  const results = loadProperties().filter(p => {
    const priceMatch = priceInRange(p.pricePcm, priceRange);
    const statusMatch = status === 'ALL' || p.status === status;
    const typeMatch = type === 'ALL' || p.type === type;
    return priceMatch && statusMatch && typeMatch;
  });

  if (countEl) {
    countEl.innerHTML = `<strong>${results.length}</strong> propert${results.length === 1 ? 'y' : 'ies'} found`;
  }

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No properties found</h3>
        <p>Try broadening your search by selecting a different price range, status or property type.</p>
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
