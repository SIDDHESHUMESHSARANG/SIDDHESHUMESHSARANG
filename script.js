  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('#abt, #cont, #git, #proj, #linkedin');

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
  });

  // Close menu when a nav link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
      });
  });