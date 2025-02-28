/**
 * Article Preview Component - Share Functionality
 * Handles the share button toggle and share popup display with accessibility
 * and mobile responsiveness in mind.
 */
'use strict';

(() => {
  /**
   * Constants for media query breakpoints
   * @type {Object}
   */
  const BREAKPOINTS = {
    TABLET: 768 // matches with the SCSS breakpoint
  };

  /**
   * State object to track component status
   * @type {Object}
   */
  const state = {
    isShareActive: false,
    isMobileView: window.innerWidth < BREAKPOINTS.TABLET,
    focusableElements: [] // Will store focusable elements in the popup
  };

  /**
   * DOM Elements - cached for performance
   */
  const elements = {
    shareButton: document.querySelector('.share-button'),
    sharePopup: document.querySelector('.share-popup'),
    cardFooter: document.querySelector('.card__footer'),
    socialLinks: [] // Will be populated in init
  };

  /**
   * Set up focus trapping within the share popup for keyboard users
   * @returns {void}
   */
  function setupFocusTrap() {
    // Find all focusable elements in the share popup
    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    state.focusableElements = Array.from(elements.sharePopup.querySelectorAll(focusableSelectors));
    
    // Add the share button as the first and last element in the focus trap
    state.focusableElements.unshift(elements.shareButton);
    state.focusableElements.push(elements.shareButton);
    
    // Store social links for easier access
    elements.socialLinks = Array.from(elements.sharePopup.querySelectorAll('.share-popup__link'));
  }

  /**
   * Updates UI based on current state
   * @returns {void}
   */
  function updateUI() {
    // Update accessibility attributes
    elements.shareButton.setAttribute('aria-expanded', state.isShareActive);
    elements.sharePopup.setAttribute('aria-hidden', !state.isShareActive);
    
    // Update visual state
    elements.shareButton.classList.toggle('active', state.isShareActive);
    elements.sharePopup.classList.toggle('active', state.isShareActive);

    // Add mobile-specific class only in mobile view
    if (state.isMobileView) {
      elements.cardFooter.classList.toggle('share-active', state.isShareActive);
    } else {
      elements.cardFooter.classList.remove('share-active');
    }
    
    // Set focus to first social link when opening
    if (state.isShareActive && elements.socialLinks.length > 0) {
      // Use a small timeout to ensure DOM is updated before focusing
      setTimeout(() => {
        elements.socialLinks[0].focus();
      }, 10);
    }
  }

  /**
   * Toggle share popup visibility
   * @param {Event} event - Click event object
   * @returns {void}
   */
  function toggleShare(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Toggle share state
    state.isShareActive = !state.isShareActive;
    
    // Update UI to reflect state change
    updateUI();
  }

  /**
   * Close popup when clicking outside of the share button or popup
   * @param {Event} event - Click event object
   * @returns {void}
   */
  function handleClickOutside(event) {
    const isClickInside = elements.shareButton.contains(event.target) || 
                          elements.sharePopup.contains(event.target);
    
    if (!isClickInside && state.isShareActive) {
      // Reset state
      state.isShareActive = false;
      
      // Update UI
      updateUI();
      
      // Return focus to share button
      elements.shareButton.focus();
    }
  }

  /**
   * Handle keyboard interaction for accessibility
   * @param {KeyboardEvent} event - Keyboard event object
   * @returns {void}
   */
  function handleKeyDown(event) {
    // Only handle keyboard events when share is active
    if (state.isShareActive) {
      switch (event.key) {
        case 'Escape':
          // Close on escape key
          state.isShareActive = false;
          updateUI();
          elements.shareButton.focus();
          break;
          
        case 'Tab':
          // Handle focus trap for Tab key
          if (state.focusableElements.length > 1) {
            const firstElement = state.focusableElements[0];
            const lastElement = state.focusableElements[state.focusableElements.length - 1];
            
            if (event.shiftKey && document.activeElement === firstElement) {
              // If shift+tab on first element, go to last element
              event.preventDefault();
              lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              // If tab on last element, go to first element
              event.preventDefault();
              firstElement.focus();
            }
          }
          break;
      }
    }
  }

  /**
   * Handle viewport resize events
   * @returns {void}
   */
  function handleResize() {
    const wasMobileView = state.isMobileView;
    state.isMobileView = window.innerWidth < BREAKPOINTS.TABLET;
    
    // If view type changed (mobile to desktop or vice versa), update UI
    if (wasMobileView !== state.isMobileView && state.isShareActive) {
      updateUI();
    }
  }

  /**
   * Initialize the component
   * @returns {void}
   */
  function init() {
    // Check if required elements exist before attaching listeners
    if (!elements.shareButton || !elements.sharePopup) {
      console.error('Required DOM elements not found');
      return;
    }
    
    // Set up focus trap
    setupFocusTrap();
    
    // Attach event listeners
    elements.shareButton.addEventListener('click', toggleShare);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    // Add debounced resize listener
    let resizeTimeout;
    window.addEventListener('resize', () => {
      // Clear the timeout if already set
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      // Set a new timeout to debounce the resize event
      resizeTimeout = setTimeout(handleResize, 150);
    });
    
    // Set initial state for screen readers
    elements.sharePopup.setAttribute('aria-hidden', 'true');
    elements.shareButton.setAttribute('aria-expanded', 'false');
    
    // Add prefers-reduced-motion check
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--transition-default', '0s');
    }
  }

  // Run initialization when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();