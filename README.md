# Constructivist Portfolio

A modern, open-source portfolio website designed for engineering, computer science, and master's-degree profiles.

The project combines a **Constructivist visual language** with a modern React/TypeScript frontend stack. It is designed to be adapted into a personal portfolio for showcasing education, experience, projects, skills, achievements, and professional information.

**Live Demo:** [Portfolio](https://portfolio-theta-drab-93.vercel.app/)

**Repository:** [AmbitiousFlowDev/Portfolio](https://github.com/AmbitiousFlowDev/Portfolio)

**Design:** [Constructivist Portfolio Design on Figma](https://www.figma.com/design/5CJqvJf27dBsEHKynD6zxl/Constructivist-Portfolio-Design)

## Features

* 🎨 Constructivist-inspired portfolio design
* ⚛️ React 19
* 🟦 TypeScript
* ⚡ Vite 7
* 🎨 Tailwind CSS 4
* 🧩 Radix UI components
* 🎯 Material UI icons and components
* ✨ Motion-based animations
* 📊 Recharts for data visualization
* 🧭 React Router
* 📱 Responsive interface
* 🌓 Theme support through `next-themes`
* 🔍 Component-oriented architecture
* 🚀 Vercel deployment configuration
* 🛡️ Automated npm dependency auditing
* 💡 Lighthouse performance checks
* 📦 Bundle-size monitoring

## Tech Stack

| Technology      | Purpose                                    |
| --------------- | ------------------------------------------ |
| React           | UI and component architecture              |
| TypeScript      | Type-safe application development          |
| Vite            | Development server and production bundling |
| Tailwind CSS    | Utility-first styling                      |
| Radix UI        | Accessible UI primitives                   |
| Material UI     | UI components and icons                    |
| Motion          | Animations and transitions                 |
| React Router    | Client-side routing                        |
| Recharts        | Charts and data visualization              |
| React Hook Form | Form handling                              |
| Lucide React    | Iconography                                |
| Vercel          | Deployment                                 |

The dependency configuration and Node.js requirement are defined in `package.json`. The project currently requires **Node.js 20.19.0 or newer**.

## Project Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       ├── bundle-size.yml
│       ├── lighthouse.yml
│       └── npm-audit.yml
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── services/
│   │   └── App.tsx
│   ├── styles/
│   ├── types/
│   └── main.tsx
├── .gitignore
├── bun.lock
├── index.html
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── vite.config.ts
└── README.md
```

### Architecture

The application is organized around a small number of clear concerns:

* `src/main.tsx` — application entry point
* `src/app/App.tsx` — main application composition
* `src/app/components/` — reusable interface components
* `src/app/constants/` — static configuration and portfolio data
* `src/app/services/` — application/service-level logic
* `src/styles/` — styling and design-system-related code
* `src/types/` — shared TypeScript definitions

This structure keeps presentation, application composition, data, services, styling, and types reasonably separated while remaining approachable for a personal portfolio project.

## Getting Started

### Prerequisites

Install:

* [Node.js](https://nodejs.org/) 20.19.0 or newer
* npm

Bun can also be used with the repository's existing lockfile.

### Installation

Clone the repository:

```bash
git clone https://github.com/AmbitiousFlowDev/Portfolio.git
cd Portfolio
```

Install dependencies:

```bash
npm install
```

Or, if using Bun:

```bash
bun install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Or:

```bash
bun run dev
```

Vite will provide a local development URL in the terminal.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Or:

```bash
bun run build
```

The production output is generated in:

```text
dist/
```

### Preview the Production Build

After building:

```bash
npm run preview
```

Or:

```bash
bun run preview
```

## Available Scripts

The current project exposes the following npm scripts:

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Build the production application     |
| `npm run preview` | Preview the production build locally |

## Deployment

The repository includes a `vercel.json` configuration for Vercel.

The production build uses:

```text
Build command: vite build
Output directory: dist
```

The Vercel configuration also rewrites application routes to `index.html`, which allows client-side routing to work correctly when deployed.

### Deploy with Vercel

The simplest deployment method is to import the GitHub repository into Vercel and allow Vercel to use the repository configuration.

Alternatively, deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Customizing the Portfolio

This repository is intended to be customized.

Typical areas to modify include:

### Personal Information

Update the portfolio data and constants under:

```text
src/app/constants/
```

### Components

Modify or add sections under:

```text
src/app/components/
```

### Styling

Global and application styling can be adjusted under:

```text
src/styles/
```

### Application Composition

The main application structure can be changed in:

```text
src/app/App.tsx
```

## Design

The original visual concept is based on the **Constructivist Portfolio Design** created in Figma.

The design source is available here:

https://www.figma.com/design/5CJqvJf27dBsEHKynD6zxl/Constructivist-Portfolio-Design

If you redistribute or modify visual assets originating from the Figma design, verify their individual ownership and licensing terms before doing so.

## Code Quality

The repository includes GitHub Actions workflows for:

* bundle-size monitoring
* Lighthouse checks
* npm security auditing

These workflows help identify regressions in performance, bundle size, and dependency security as the project evolves.

## Contributing

Contributions are welcome.

Before opening a pull request:

1. Create a feature branch.
2. Make your changes.
3. Run the production build.
4. Test the application locally.
5. Check that existing functionality has not regressed.
6. Open a pull request describing the change.

For significant design or architectural changes, opening an issue first is recommended.

## License

This project is released under the **GNU General Public License v3.0 (GPL-3.0)**.

See [`LICENSE.md`](./LICENSE.md) for the complete license text.

### Third-Party Software and Assets

This license applies to the original work contained in this repository to the extent that the repository author has the rights to license that work under GPL-3.0.

Third-party libraries, dependencies, fonts, icons, images, design resources, and other externally sourced materials may be subject to their own licenses and terms. Nothing in this repository's GPL notice should be interpreted as relicensing those materials.

Before redistributing a modified or deployed version of this project, review the licenses of its dependencies and any third-party assets you include.

## Acknowledgements

* React
* TypeScript
* Vite
* Tailwind CSS
* Radix UI
* Material UI
* Motion
* Recharts
* Vercel
* Figma

## Author

**AmbitiousFlowDev**

GitHub: https://github.com/AmbitiousFlowDev

## Disclaimer

This project is provided as open-source software. You are responsible for verifying that your use, modification, deployment, redistribution, content, images, fonts, and other assets comply with their applicable licenses and laws.

---

If you find the project useful, consider giving the repository a ⭐ on GitHub.
