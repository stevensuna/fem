'use strict';

(() => {
  // DOM Elements
  const shareButton = document.querySelector('.share-button');
  const sharePopup = document.querySelector('.share-popup');
  
  // Event Handlers
  function toggleShare() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    sharePopup.setAttribute('aria-hidden', isExpanded);
    this.classList.toggle('active');
    sharePopup.classList.toggle('active');
  }

  // Close popup when clicking outside
  function handleClickOutside(event) {
    if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
      shareButton.setAttribute('aria-expanded', 'false');
      sharePopup.setAttribute('aria-hidden', 'true');
      shareButton.classList.remove('active');
      sharePopup.classList.remove('active');
    }
  }
  
  // Initialize
  const init = () => {
    // Initialize component functionality
    shareButton.addEventListener('click', toggleShare);
    document.addEventListener('click', handleClickOutside);
  };

  // Run initialization on DOM content loaded
  document.addEventListener('DOMContentLoaded', init);
})();