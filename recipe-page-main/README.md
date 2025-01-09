# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm).

## Overview

A responsive recipe page that displays cooking instructions, ingredients, and nutritional information. The layout adapts seamlessly across mobile (375px), tablet (768px), and desktop (1440px) viewports.

### Screenshot

![Desktop View](./screenshots/desktop.png)
![Mobile View](./screenshots/mobile.png)

### Links

- Live Site URL: [Recipe Page](your-live-site-url.com)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM naming convention

## Key Features

- Responsive design across all device sizes
- Custom bullet points and numbered lists
- Responsive table layout
- Custom web fonts
- Semantic HTML structure
- Accessibility considerations

## What I Learned

- Implementing CSS custom properties for consistent styling
- Creating responsive layouts using flexbox
- Using BEM methodology for maintainable CSS
- Building accessible data tables
- Managing typography across different viewport sizes

### CSS Custom Properties

```css
:root {
  /* Color variables */
  --color-rose-800: #7A284E;
  --color-stone-900: #312E2C;
  /* Spacing system */
  --spacing-100: 8px;
  --spacing-1600: 128px;
}
```

### Semantic HTML

```html
<article class="recipe__card">
  <section class="recipe__intro">
    <h1>Simple Omelette Recipe</h1>
  </section>
</article>
```

## Continued Development

- Enhance accessibility features
- Add print stylesheet
- Implement dark mode
- Add recipe rating system

## Author

- Frontend Mentor - [@stevensuna](https://www.frontendmentor.io/profile/stevensuna)