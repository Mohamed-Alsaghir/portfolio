

// === Hamburger toggle ===
const hamburger = document.getElementById('menu-toggle');
const navMenu = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// === Close mobile menu when a nav link is clicked ===
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// === Smooth scroll fix so header doesn't cover content ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = document.querySelector('.mobile-header').offsetHeight;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
