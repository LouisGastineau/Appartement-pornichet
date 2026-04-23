// Dark mode toggle functionality
(function() {
  // Check for saved dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  // Apply dark mode on page load if saved
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  
  // Create and add toggle button when DOM is ready
  function addDarkModeToggle() {
    // Create button element
    const toggleButton = document.createElement('button');
    toggleButton.className = 'dark-mode-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.innerHTML = isDarkMode ? '<i class="fas fa-sun" aria-hidden="true"></i>' : '<i class="fas fa-moon" aria-hidden="true"></i>';
    toggleButton.id = 'darkModeToggle';
    
    // Add directly to body (not in navbar)
    document.body.appendChild(toggleButton);
    
    // Add click event listener
    toggleButton.addEventListener('click', function() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      const isNowDark = body.classList.contains('dark-mode');
      
      // Save preference
      localStorage.setItem('darkMode', isNowDark);
      
      // Update button icon
      this.innerHTML = isNowDark ? '<i class="fas fa-sun" aria-hidden="true"></i>' : '<i class="fas fa-moon" aria-hidden="true"></i>';
    });
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addDarkModeToggle);
  } else {
    addDarkModeToggle();
  }
})();
