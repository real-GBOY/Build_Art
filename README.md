# Build Art

**Build Art** is a full-service interior design and fit-out company that provides end-to-end solutions — from concept development and design, through 3D visualization, to execution, project management, and final delivery.

This repository contains the marketing website for Build Art, built to generate qualified leads and convert visitors into design and execution contracts.

## Vision

To become the first choice for individuals and businesses seeking exceptional design solutions and professional execution that combine aesthetics, functionality, and quality.

## Mission

Transforming ideas and spaces into inspiring experiences through thoughtful design, precise execution, and outstanding client service at every stage of the project.

## Core Services

- Interior Design
- Space Planning
- 3D Visualization & Rendering
- Fit-Out & Turnkey Solutions
- Residential Projects
- Commercial Projects
- Project Management
- Furniture & Material Selection
- Bank Installment Solutions

## Target Audience

**Primary audience:** new homeowners, newly engaged and married couples, villa owners, real estate investors, clinic owners, office owners, and retail store / café owners.

| Segment | Profile |
|---------|---------|
| Age range | 25–50 years old |
| Income level | Upper-middle to high-income individuals |

### Customer Pain Points

- Difficulty visualizing the final outcome before execution
- Concerns about execution quality
- Managing multiple contractors and suppliers
- Lack of budget transparency
- Project delays
- Difficulty paying the full project cost upfront

## Unique Selling Proposition

- End-to-end design and execution under one roof
- Realistic 3D visualizations before execution
- Complete project management from concept to completion
- High-quality craftsmanship and attention to detail
- Commitment to timelines and execution plans
- Flexible bank installment solutions
- Customized design solutions tailored to different needs and budgets

## Brand Identity

### Personality

Professional · Sophisticated · Trustworthy · Modern · Detail-Oriented · Practical

### Values

Quality · Transparency · Commitment · Creativity · Client Satisfaction

### Tone of Voice

Professional yet approachable · Confident without being overly promotional · Elegant and refined · Clear and direct · Solution-driven and results-oriented

## Main Business Goal

Generate qualified leads and convert them into design and execution contracts by building trust, showcasing project quality, and making the decision-making process easier through flexible bank installment solutions.

---

## Website Overview

A responsive single-page marketing site implemented in React and TypeScript. The UI layout is based on the [Interior Design Website UI Template (Community)](https://www.figma.com/design/xDaKvYOYYOUFfM1hgbcYeG/Interior-Design-Website-UI-Template--Community-) Figma file, adapted for the Build Art brand.

### Features

- Responsive layout (mobile through desktop)
- Fixed navigation with mobile menu
- Hero with animated stats and layered imagery
- Services, process, and testimonials sections
- Testimonial carousel with card-by-card sliding
- Newsletter CTA bridging into the footer
- Footer with links, contact info, and social icons

### Page Sections

| Section | Component | Purpose |
|---------|-----------|---------|
| Navigation | `Navbar` | Logo, links, Sign Up CTA |
| Hero | `Hero` | Brand intro, CTA, key stats |
| Services | `Services` | Core service highlights |
| Dream | `DreamSection` | Design expertise showcase |
| Steps | `StepsSection` | Project process overview |
| Testimonials | `TestimonialsSection` | Client trust & social proof |
| Newsletter | `NewsletterSection` | Lead capture (`#contact`) |
| Footer | `Footer` | Links, contact, support (`#support`) |

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server and build tooling
- **Tailwind CSS** — styling and design tokens
- **Framer Motion** — animations
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
│   ├── assets/           # Logo, icons, component images
│   ├── components/       # Page sections
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

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

Developed By **JINX**

## License

Private project. All rights reserved © Build Art.

---


