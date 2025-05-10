# 📚 Tech Book Club Landing Page

A minimalist, responsive landing page for a tech book club, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Features

- **Mobile-first design** - Optimized for all screen sizes
- **Zero client-side JavaScript** - Fast loading with Astro's static site generation
- **Design token system** - Consistent colors, typography, spacing, and components
- **Modern UI** - Clean, professional design with attention to typography
- **High performance** - Optimized for core web vitals and SEO
- **Maintainable codebase** - Simple component architecture and styling

## 🛠️ Tech Stack

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety and better development experience

## 📋 Getting Started

1. **Clone this repository**

   ```bash
   git clone https://github.com/yourusername/tech-book-club-landing-page.git
   cd tech-book-club-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 📝 Project Structure

```
/
├── src/
│   ├── assets/         # Images and other static assets
│   ├── components/     # UI and section components
│   │   ├── sections/   # Page section components
│   │   └── ui/         # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages
│   └── styles/         # Global styles
├── public/             # Static assets that bypass processing
└── docs/               # Documentation
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 📜 Documentation

For detailed technical documentation, see the [technical document](./docs/technical-document.md).

For information about the design token system, see the [design system document](./docs/design-system.md).
