# Build Art

A modern interior design marketing website built with React, TypeScript, and Tailwind CSS. The UI is based on the [Interior Design Website UI Template (Community)](https://www.figma.com/design/xDaKvYOYYOUFfM1hgbcYeG/Interior-Design-Website-UI-Template--Community-) Figma file.

## Features

- Responsive single-page layout (mobile through desktop)
- Fixed navigation with mobile menu
- Hero section with stats and layered imagery
- Services, dream/accordion, steps, and testimonials sections
- Testimonial carousel with card-by-card sliding
- Newsletter CTA that bridges into the footer
- Dark footer with links, contact info, and social icons

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server and build tooling
- **Tailwind CSS** — styling and design tokens
- **Framer Motion** — animations (navbar, testimonials)
- **Lucide React** — icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Other scripts

```bash
npm run typecheck   # TypeScript check
npm run lint        # ESLint
```

## Project Structure

```
Build_Art/
├── assets/imgs/          # Shared images
├── src/
│   ├── assets/           # Component-level assets (logo, icons, images)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── DreamSection.tsx
│   │   ├── StepsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── NewsletterSection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

## Page Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Navigation | `Navbar` | Logo, links, Sign Up CTA, mobile menu |
| Hero | `Hero` | Headline, CTA, stats, image collage |
| Services | `Services` | Three service cards with icons |
| Dream | `DreamSection` | Image + accordion content |
| Steps | `StepsSection` | Three-step process with image |
| Testimonials | `TestimonialsSection` | Overlapping cards carousel |
| Newsletter | `NewsletterSection` | Email signup (`#contact`) |
| Footer | `Footer` | Links, contact, social (`#support`) |

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `nav-dark` | `#1f1f1f` | Buttons, footer, dark UI |
| `nav-muted` | `#545454` | Secondary text |
| `cream` | `#faf8f5` | Newsletter background |
| `charcoal` | `#2c2c2c` | Body text |
| `gold` | `#c9a962` | Accent |

Fonts: **Inter** (body), **Playfair Display** (display).

## Credits

- UI design reference: [Figma Community Template](https://www.figma.com/design/xDaKvYOYYOUFfM1hgbcYeG/Interior-Design-Website-UI-Template--Community-)
- Developed by **JINX**

## License

Private project. All rights reserved © Build Art.
