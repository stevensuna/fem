# Frontend Mentor - Article Preview Component Solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Key Features](#key-features)
  - [What I Learned](#what-i-learned)
  - [Useful Resources](#useful-resources)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout across different device screen sizes
- See social media share links on clicking the share icon
- Navigate the component using keyboard
- Experience smooth transitions with animation support
- Access all functionality regardless of input method

### Links

- [Solution URL](https://github.com/stevensuna/fem/tree/main/article-preview-component)
- [Live Site URL](https://stevensuna.github.io/fem/article-preview-component/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties and BEM methodology
- Vanilla JavaScript with ES6+ features
- Mobile-first responsive design
- Focus on accessibility
- Progressive enhancement

### Key Features

- **Responsive Design**: Adapts seamlessly between mobile and desktop views
- **Keyboard Accessibility**: Full keyboard navigation support with focus trapping
- **Screen Reader Support**: ARIA attributes for enhanced accessibility
- **Smart Animations**: Respects user's motion preferences
- **Click Outside**: Closes share popup when clicking outside
- **Performance Optimized**: Debounced resize handling

### What I Learned

The project provided great insights into creating accessible interactive components. Here are some key implementations:

Managing component state:

```js
const state = {
  isShareActive: false,
  isMobileView: window.innerWidth < BREAKPOINTS.TABLET,
  focusableElements: [],
};
```

Implementing focus trapping for keyboard users:

```js
function setupFocusTrap() {
  const focusableSelectors =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  state.focusableElements = Array.from(
    elements.sharePopup.querySelectorAll(focusableSelectors)
  );
}
```

Respecting user preferences:

```js
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.setProperty("--transition-default", "0s");
}
```

### Useful Resources

- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/) - Essential guide for implementing accessible components
- [CSS-Tricks Guide to Focus Traps](https://css-tricks.com/a-guide-to-focus-trapping/) - Helped with keyboard navigation implementation
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive reference for JavaScript features
