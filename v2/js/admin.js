/* ============================================================
   CARTER & KNIGHT — Admin Panel Logic
   (Client-side only — MVP. See docs for production security notes.)
   ============================================================ */

const ADMIN_SESSION_KEY = 'ck_admin_session';
const ADMIN_SESSION_HOURS = 2;
/* Default password: CarterKnight2026!  (hashed on first run, see getStoredPasswordHash) */
const ADMIN_PASSWORD_HASH_KEY = 'ck_admin_password_hash';

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function getStoredPasswordHash() {
  let hash = localStorage.getItem(ADMIN_PASSWORD_HASH_KEY);
  if (!hash) {
    hash = await hashPassword('CarterKnight2026!');
    localStorage.setItem(ADMIN_PASSWORD_HASH_KEY, hash);
  }
  return hash;
}

async function attemptLogin(password) {
  const enteredHash = await hashPassword(password);
  const storedHash = await getStoredPasswordHash();
  if (enteredHash === storedHash) {
    const session = { loggedInAt: Date.now() };
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
    return true;
  }
  return false;
}

function isSessionValid() {
  try {
    const session = JSON.parse(localStorage.getItem(ADMIN_SESSION_KEY));
    if (!session || !session.loggedInAt) return false;
    const hoursElapsed = (Date.now() - session.loggedInAt) / (1000 * 60 * 60);
    return hoursElapsed < ADMIN_SESSION_HOURS;
  } catch (e) {
    return false;
  }
}

function requireAuth() {
  if (!isSessionValid()) {
    window.location.href = 'login.html';
  }
}

function logout() {
  localStorage.removeItem(ADMIN_SESSION_KEY);
  window.location.href = 'login.html';
}

/* --- CRUD helpers (uses loadProperties/saveProperties from search.js) --- */
function getPropertyById(id) {
  return loadProperties().find(p => p.id === id);
}

function nextPropertyId() {
  const list = loadProperties();
  return list.length ? Math.max(...list.map(p => p.id)) + 1 : 1;
}

function upsertProperty(property) {
  const list = loadProperties();
  const index = list.findIndex(p => p.id === property.id);
  if (index >= 0) {
    list[index] = property;
  } else {
    list.push(property);
  }
  saveProperties(list);
}

function deleteProperty(id) {
  const list = loadProperties().filter(p => p.id !== id);
  saveProperties(list);
}

/* --- Import / Export JSON ---------------------------------- */
function exportPropertiesJson() {
  const data = JSON.stringify(loadProperties(), null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'carter-knight-properties.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importPropertiesJson(file, onDone) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error('Invalid format: expected an array');
      saveProperties(imported);
      onDone(null);
    } catch (err) {
      onDone(err);
    }
  };
  reader.readAsText(file);
}

/* --- Image upload -> base64 --------------------------------- */
function fileToBase64(file, onDone) {
  const reader = new FileReader();
  reader.onload = (e) => onDone(null, e.target.result);
  reader.onerror = (err) => onDone(err);
  reader.readAsDataURL(file);
}

/* --- Analytics summary for dashboard ------------------------ */
function getAnalyticsSummary() {
  const analytics = loadAnalytics();
  return loadProperties().map(p => ({
    id: p.id,
    address: p.address,
    town: p.town,
    views: (analytics[p.id] && analytics[p.id].views) || 0,
    inquiries: (analytics[p.id] && analytics[p.id].inquiries) || 0
  }));
}
