# Pradeep Saini — Senior Frontend Developer Portfolio

A modern, high-performance web portfolio built with **Angular 18**, **Tailwind CSS**, and a pristine **Glassmorphic** design system.

This application acts as a comprehensive interactive resume and digital identity. It showcases professional experiences, core technological competencies, curated digital project artifacts, and architectural expertise in building scalable enterprise solutions.

---

## ✨ Key Features

-   **Data-Driven Architecture:** All core text, project details, skills, and experience items are decoupled from the UI and centralized into the `PortfolioDataService`. This makes updating content effortless and preserves a clean component layer.
-   **Dual-Theme Support (Light/Dark Mode):** 
    -   Implements a fully integrated theme toggling state across the entire application using Angular Signals (`ThemeService`). 
    -   Includes a Flash of Unstyled Content (FOUC) prevention script to ensure zero flicker during load.
    -   Exquisitely styled with precise `dark:` and light Tailwind utility variants across every single UI element.
-   **Premium Aesthetics & Glassmorphism:** Features a sleek "floating pill" navigation header with gradient highlights, translucent blurred glass-card UI surfaces, and animated interactions.
-   **Responsive & Polished:** Flawless mobile-first design, ensuring structural integrity across everything from small mobile screens to ultra-wide desktop monitors.
-   **Scroll Animations:** A custom `ScrollAnimateDirective` natively leverages `IntersectionObserver` to weave fluid cascade and fade-in animations as users explore the various sections of the page.

---

## 🛠️ Technology Stack

-   **Framework:** [Angular 18](https://angular.dev/) (Standalone Components, Signals)
-   **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) (Custom UI Configs, `class` dark mode strategy)
-   **Typography & Branding:** Plus Jakarta Sans, Inter, and Google Material Symbols Outlined.
-   **Deployment:** Designed to build to static files for hosting environments like GitHub Pages, Vercel, or Netlify.

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
- Node.js (v18.x or higher is recommended)
- Angular CLI (v18.x)

### Installation
1. Clone the repository to your local system:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the application in a local browser with hot-module replacement active:
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Application Build
To compile and bundle the application into production-ready static assets:
```bash
ng build
```
The optimized build artifacts will be stored in the `dist/portfolio-app/browser` directory.

---

## 📂 Project Structure Overview

```text
src/
├── app/
│   ├── components/       # Reusable UI building blocks (Hero, Contributions, Navigation, Footer)
│   ├── pages/            # Core route definitions (Home, Journey, Projects, Contact)
│   ├── directives/       # Structural functionality (ScrollAnimateDirective)
│   ├── models/           # TypeScript interfaces typing the application
│   └── services/         # State management and data retrieval (ThemeService, PortfolioDataService)
├── assets/               # Static graphic assets and FOUC scripts
├── index.html            # Main entry point holding configurations and CDNs
├── styles.scss           # Global stylesheet encapsulating base rules and animations
└── tailwind.config.js    # Highly-tuned Tailwind mapping file establishing UI themes
```

---

## 📝 Content Management

To update the textual data (Add a new project, modify year span, update a skill), you do not need to hunt through HTML files. Simply open `src/app/services/portfolio-data.service.ts` and modify the structured JSON models.

---

*Curated and developed by Pradeep Saini. All Rights Reserved.*
