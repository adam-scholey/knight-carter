/* ============================================================
   KNIGHT & CARTER — Navigation & General UI
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile nav toggle ----------------------------------- */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Active nav link ------------------------------------- */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;
    // Match on filename
    const linkFile = href.split('/').pop().split('?')[0];
    const currentFile = currentPath.split('/').pop() || 'index.html';
    if (
      (linkFile === currentFile) ||
      (currentFile === '' && linkFile === 'index.html') ||
      (currentPath.endsWith('/') && linkFile === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* --- IntersectionObserver for fade-up elements ----------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* --- Contact form: pre-fill property field -------------- */
  const propertyParam = new URLSearchParams(window.location.search).get('property');
  const propertyInput = document.getElementById('propertyInterest');
  if (propertyParam && propertyInput) {
    propertyInput.value = decodeURIComponent(propertyParam);
  }

  /* --- Contact form: submit handler ----------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      btn.textContent = 'Message Sent';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      btn.style.borderColor = '#22c55e';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.cssText = '';
        contactForm.reset();
      }, 4000);
    });
  }

});
