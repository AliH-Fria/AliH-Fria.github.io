document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Scroll to top button
    document.querySelector('.scroll-top-button a').addEventListener('click', function (e) {
      e.preventDefault();
      document.body.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  