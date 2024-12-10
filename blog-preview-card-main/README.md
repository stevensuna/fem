
# Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

## Table of contents

- Overview
  - The challenge
  - Screenshot
  - Links
- My process
  - Built with
  - [What I learned](#what-i-learned)
  - Continued development

## Overview

### The challenge

Users should be able to:
- See hover and focus states for all interactive elements on the page
- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![Blog Preview Card](./preview.jpg)

### Links

- [Solution URL](https://github.com/stevensuna/fem/tree/main/blog-preview-card-main)
- [Live Site URL](https://stevensuna.github.io/fem/blog-preview-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- CSS Variable Fonts
- BEM methodology

### What I learned

### 1. Design Token Implementation
```css
:root {
  /* Systematic approach to storing design decisions */
  --color-yellow: hsl(47, 88%, 63%);
  --font-size-base: 1rem;
  --spacing-md: 1.5rem;
  --card-width-mobile: 20.4375rem;
}
```

### 2. Mobile-First Approach
```css
/* Base mobile styles */
.card {
  width: var(--card-width-mobile);
  padding: var(--spacing-md);
}

/* Desktop overrides */
@media (min-width: 48rem) {
  .card {
    width: var(--card-width-desktop);
  }
}
```

### Key Learnings
- Structured design tokens for maintainable CSS
- Mobile-first responsive design principles
- CSS custom properties for flexible theming
- Progressive enhancement workflow
- Systematic spacing and typography scales

### Continued Development
- Explore more complex design token systems
- Implement responsive images
- Enhance component reusability
- Improve accessibility patterns