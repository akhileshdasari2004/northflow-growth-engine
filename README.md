# NorthFlow HVAC Growth Engine

A high-converting landing page for NorthFlow HVAC Growth Agency — helping HVAC contractors recover missed calls, build Google reviews, and grow recurring maintenance revenue.

## Features

- **Hero Section** - Animated gradient orbs with parallax scrolling, stats cards, and floating mini cards
- **Features Section** - Three powerful systems: Missed Call Recovery, Review Growth Engine, and Membership Programs
- **Dashboard Section** - Real-time metrics visualization with interactive charts
- **How It Works** - 4-step process with animated grid layout
- **Testimonials** - Customer success stories carousel
- **FAQ Section** - Accordion-style frequently asked questions
- **CTA Section** - Animated spotlight background with Calendly integration
- **Footer** - Full footer with animated reveal, social links, and navigation

## Tech Stack

- **Framework**: React with TanStack Start
- **Styling**: Tailwind CSS with custom oklch theme
- **Animations**: Framer Motion + custom scroll animations
- **Charts**: Recharts
- **Icons**: Lucide React
- **Particles**: tsParticles (SparklesCore)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/akhileshdasari2004/northflow-growth-engine.git
cd northflow-growth-engine

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   └── ui/                 # Reusable UI components
│       ├── hero.tsx        # Hero section
│       ├── features-section.tsx
│       ├── dashboard-section.tsx
│       ├── testimonials-section.tsx
│       ├── faq-section.tsx
│       ├── process-section.tsx
│       ├── footer-section.tsx
│       ├── floating-header.tsx
│       ├── scroll-animations.tsx
│       ├── sparkles.tsx
│       ├── spotlight-background.tsx
│       └── ...
├── routes/
│   └── index.tsx           # Main landing page
├── styles.css              # Global styles & theme
└── lib/
    └── utils.ts            # Utility functions
```

## Design System

### Color Palette

- **Primary Orange**: `oklch(0.65 0.18 50)`
- **Dark Orange**: `oklch(0.55 0.22 45)`
- **Background**: `oklch(0.99 0.005 90)`
- **Text**: `oklch(0.25 0.02 45)`

### Typography

- **Headings**: DM Serif Display
- **Body**: DM Sans

## License

MIT License - NorthFlow HVAC Growth Agency