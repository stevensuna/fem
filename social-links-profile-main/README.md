# Social Links Profile Card

A responsive profile card component with social media links and hover effects.

## Overview

### The Challenge

Users should be able to:
- View the optimal layout for the component on different screen sizes
- See hover states for all interactive elements
- Experience smooth transitions and animations

### Screenshot

![Profile Card Screenshot](./screenshot.jpg)

### Links

- Live Site URL: [Add your live site URL here]
- Solution URL: [Add your solution URL here]

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM naming convention
- CSS transitions and transforms

### What I Learned

1. **Mobile-First Development**
- Started with mobile layout and progressively enhanced for larger screens
- Used CSS custom properties for responsive design
```css
:root {
  --spacing-100: 8px;
  --spacing-300: 24px;
}
```

2. **BEM Methodology**
- Implemented BEM naming convention for better CSS organization
- Created modular and reusable components
```html
<section class="profile-card__info">
  <h1 class="profile-card__name">Jessica Randall</h1>
</section>
```

3. **CSS Transitions & Hover Effects**
- Added smooth transitions for better UX
- Implemented hover states with transforms
```css
.profile-card__link {
  transition: all 0.3s ease;
}

.profile-card__link:hover {
  transform: translateY(-2px);
}
```

4. **Accessibility Improvements**
- Used semantic HTML elements
- Added proper alt text for images
- Ensured proper color contrast

### Continued Development

Areas I want to continue focusing on:
- CSS Grid for more complex layouts
- Advanced animations and transitions
- Cross-browser compatibility
- Accessibility best practices

### Useful Resources

- [BEM Naming Convention](https://getbem.com/) - Helped understand BEM methodology
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Great guide for CSS variables
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Comprehensive flexbox reference