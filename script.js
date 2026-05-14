// =============================================
// PAUSE POD — Scroll-reveal animering
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // Scroll-reveal med IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));

  // Nav: lägg till bakgrund vid scroll
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.background = 'rgba(13, 23, 32, 0.97)';
    } else {
      nav.style.background = 'linear-gradient(to bottom, rgba(13,23,32,0.95) 0%, transparent 100%)';
    }
  });

});
