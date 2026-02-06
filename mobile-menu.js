// Mobile menu toggle functionality
// Handles the hamburger menu for responsive navigation
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      document.querySelector('.nav-left').classList.toggle('active');
      document.querySelector('.nav-right').classList.toggle('active');
    });
  }
});
