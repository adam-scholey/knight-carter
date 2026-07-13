/* ============================================================
   CARTER & KNIGHT — Tenant / Landlord Form Handlers
   ============================================================ */

function wireSubmitHandler(formId, successText) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = successText;
    btn.disabled = true;
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.cssText = '';
      form.reset();
    }, 4000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wireSubmitHandler('maintenanceForm', 'Request Submitted');
  wireSubmitHandler('landlordForm', 'Enquiry Sent');
});
