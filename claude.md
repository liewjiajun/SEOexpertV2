# SEOExpert Website

**GitHub Repository:** https://github.com/liewjiajun/SEOexpert

## Project Overview
A modern, multi-page Next.js website for SEOExpert digital marketing agency. The site reflects values of work-life balance, remote-first culture, and digital nomad lifestyle with a vibrant Gen Z aesthetic.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Fonts: Fraunces (headlines), Inter (body)

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `layout/` - Header, Footer, Navigation
  - `ui/` - Button, Card, Input, Badge, Container, FloatingElements, AnimatedSection
  - `sections/` - Page sections (Hero, ServiceCards, CTAFooter, etc.)
  - `forms/` - Form components (ContactForm)
  - `widgets/` - WhatsApp floating widget
- `hooks/` - Custom React hooks (useScrollAnimation)
- `lib/` - Utilities, constants, metadata helpers
- `data/` - Service and blog post data
- `types/` - TypeScript interfaces
- `public/` - Static assets, logos

## Design System (Gen Z Aesthetic)

### Color Palette
- **Primary Gradient**: `from-violet-600 via-fuchsia-500 to-coral`
- **Violet**: #8B5CF6 (primary), #7C3AED (dark), #A78BFA (light)
- **Fuchsia**: #D946EF (primary), #C026D3 (dark), #E879F9 (light)
- **Coral**: #FB7185
- **Ink**: #1E1B4B (deep purple-black for text)
- **Background**: #FAFAFF (slight purple tint)

### Visual Effects
- **Glassmorphism**: `bg-white/60 backdrop-blur-xl` with subtle borders
- **Gradient Text**: `.text-gradient` class for purple-pink-coral gradient text
- **Glow Shadows**: `shadow-glow-sm`, `shadow-glow-md`, `shadow-glow-lg`
- **Gradient Icons**: `.icon-gradient` for gradient background icon containers

### Animation System
- `animate-fade-in-up` - Entrance animation for sections
- `animate-float` - Gentle floating motion
- `animate-blob` - Morphing blob animation
- `animate-bounce-hover` - Bouncy hover effect
- `animation-delay-*` - Staggered animation delays (100-4000ms)

### Spacing & Sizing
- Max content width: 1120px
- Card radius: 18px (`rounded-card`)
- Button radius: fully rounded (`rounded-full`)
- Spacing: 8px system (8/16/24/32/48/64/96)

## Key Patterns

### Utility Functions
- Use `cn()` from `lib/utils.ts` for className merging
- Use `formatDate()` from `lib/utils.ts` for date formatting

### Component Usage
```tsx
// Glass card with hover effect
<Card variant="glass" hover className="h-full">

// Gradient border card
<Card variant="gradient-border">

// Gradient text
<span className="text-gradient">Highlighted text</span>

// Gradient icon container
<div className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center">

// Floating background blobs
<FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" animationDelay="0s" />

// Glow button
<Button href="/contact" size="lg" glow>Book a call</Button>
```

### Page Structure Pattern
```tsx
<section className="section relative overflow-hidden">
  <FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" />
  <FloatingBlob color="fuchsia" size="lg" className="bottom-0 -left-20 opacity-15" />

  <Container className="relative z-10">
    <div className="animate-fade-in-up">
      <p className="eyebrow">Section Label</p>
      <h1 className="mb-6">
        Title with <span className="text-gradient">gradient</span>
      </h1>
    </div>
  </Container>
</section>
```

### Button Variants
- `primary` - Gradient background with shimmer hover (default)
- `secondary` - Glass effect with violet border
- `ghost` - Transparent with violet hover
- `glow` prop - Adds neon glow effect

### Card Variants
- `default` - White with subtle shadow
- `glass` - Glassmorphism with backdrop blur
- `gradient-border` - Gradient border effect

## Text Alignment Patterns

### Grid Item Alignment
When displaying multiple items in a grid where titles/descriptions vary in length:
- Use CSS Grid (`grid-cols-*`) instead of flexbox for row alignment
- Add `md:min-h-[56px]` (or appropriate value) to title elements
- Use `flex items-center justify-center` to vertically center shorter titles
- Only apply min-height on desktop (`md:min-h-[56px]`) to allow natural flow on mobile

### Card Grid Alignment
For card grids with varying content:
- Use `h-full` on cards for equal heights in a row
- Use `flex flex-col` inside cards
- Apply `flex-grow` to description/content area
- Push CTAs to bottom with `mt-auto`

## Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Git Workflow
- Repository: https://github.com/liewjiajun/SEOexpert
- Main branch: `main`
- Push changes: `git push origin main`

## Brand Values (reflect in copy/design)
- Work-life balance over hustle culture
- Remote-first / digital nomad lifestyle
- Results over hours worked
- Genuine partnerships (no fake "family" culture)
- Vibrant, youthful energy (Gen Z appeal)

## Important Files
- `tailwind.config.ts` - Design tokens, colors, animations
- `app/globals.css` - Custom CSS utilities, gradient classes
- `lib/constants.ts` - Site config, navigation, services, CTAs
- `components/ui/FloatingElements.tsx` - Animated background blobs
- `hooks/useScrollAnimation.ts` - Intersection observer for scroll animations

## Pages
- `/` - Home page with hero, services, results, differentiators, founder, CTA
- `/about` - About page with founder story, values, team culture
- `/services` - Services listing with all service cards
- `/services/[slug]` - Individual service detail pages (seo, ppc, social, content, analytics)
- `/blog` - Blog listing with featured post and grid
- `/blog/[slug]` - Individual blog post pages
- `/contact` - Contact form and contact details
