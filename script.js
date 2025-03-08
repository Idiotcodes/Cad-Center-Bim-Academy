// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('#header .navbar ul');

mobileNavToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  mobileNavToggle.classList.toggle('bi-x');
});