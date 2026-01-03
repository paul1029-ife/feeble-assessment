# Coup - iMessage Automation Landing Page

A modern, animated landing page for Coup, an iMessage automation tool for teams and AI workflows. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Overview

This project is a single-page landing page featuring a hero section with animated decorative elements, a responsive navigation bar, and smooth CSS animations. The page showcases Coup's value proposition for iMessage automation.

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **ESLint** - Code linting

## 📁 Project Structure

```
freebie-assessment/
├── public/                 # Static assets
│   ├── fonts/             # General Sans font family
│   └── *.svg             # SVG icons and illustrations
├── src/
│   ├── components/          # React components
│   │   ├── DecorationGroup.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NavBar.tsx
│   │   └── icons/
│   │       └── ArrowDown.tsx
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and animations
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🏗️ Implementation Details

### Application Entry Point (`main.tsx`)

The application is bootstrapped using React 18's `createRoot` API with `StrictMode` enabled for development checks:

```typescript
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Main App Component (`App.tsx`)

The `App` component serves as the container for the entire landing page. Key features:

- **Background**: Uses a hero SVG image as a full-screen background with cover sizing
- **Background Glow**: A white circular gradient positioned at the top-left for visual depth
- **Layered Decorations**: Multiple decorative groups positioned absolutely:
  - Top birds with enter animation
  - Flying message bubbles (left and right)
  - Ghost birds with merge animation
  - Bottom clouds with upward animation
  - Bottom message bubbles with delayed animation
- **Scroll Indicator**: Fixed bottom indicator with "Scroll to learn more" text and arrow icon

#### Decoration Configuration

The component defines several decoration arrays:

- **TOP_BIRDS**: Two birds positioned at the top (desktop only)
- **GHOST_BIRDS**: Two birds with ghost merge animation effect
- **CLOUDS**: Three cloud SVGs with varying opacity and positioning
- **MESSAGES**: Four message bubble SVGs positioned at the bottom

### Navigation Bar (`NavBar.tsx`)

A responsive navigation component with the following features:

- **Desktop View**:
  - Logo on the left
  - Navigation links in the center (How it Works, Pricing, Use Case, FAQ)
  - "Contact Sales" button on the right with hover animation
- **Mobile View**:
  - Hamburger menu toggle
  - Slide-down menu with navigation links and CTA button
- **Interactive Elements**:
  - Hover effects on navigation links (color change)
  - Animated "Contact Sales" button with sliding white background on hover
  - Mobile menu state management using React `useState`

### Hero Section (`HeroSection.tsx`)

The main content area featuring:

- **Badge**: White pill-shaped badge with hamburger icon and "#1 iMessage Automation Tool" text
- **Headline**: Large, responsive heading with blue accent color for "iMessage"
- **Description**: Value proposition text explaining Coup's functionality
- **CTAs**: Two action buttons:
  - Primary: "Get Started" button with blue background
  - Secondary: "Download the Mac app" button with Apple logo and border

The component uses responsive classes to adapt layout and typography for mobile and desktop.

### Decoration Group Component (`DecorationGroup.tsx`)

A reusable component for rendering groups of decorative elements with animations:

#### `DecorationGroup`

- Renders multiple decorative images (birds, clouds, messages)
- Supports custom animation classes
- Configurable delay for staggered animations
- Absolute positioning with custom class names per item

#### `GhostDecorationGroup`

- Special variant for ghost effect animations
- Renders two overlapping images:
  - Visible image (static)
  - Ghost image with fade-out animation
- Creates a "merge" visual effect

### Arrow Down Icon (`ArrowDown.tsx`)

A custom SVG component for the scroll indicator, featuring:

- Downward arrow design
- Dark stroke color (#1D2026)
- 32x32 viewBox

### Type Definitions (`types/index.ts`)

TypeScript interfaces for type safety:

- **`DecorationItem`**: Defines structure for individual decoration items

  - `className`: Tailwind classes for positioning
  - `src?`: Optional image source
  - `alt?`: Optional alt text

- **`DecorationGroupProps`**: Props for DecorationGroup component
  - `items`: Array of decoration items
  - `defaultSrc?`: Fallback image source
  - `defaultAlt?`: Fallback alt text
  - `animationClass?`: CSS animation class
  - `delay?`: Animation delay in milliseconds

## 🎨 Styling & Animations

### Custom Font

The project uses **General Sans** font family with multiple weights (200-700) and italic variants. Font files are loaded from the `public/fonts/general-sans/` directory.

### CSS Animations (`index.css`)

The project includes several custom keyframe animations:

1. **`birdEnter`** (800ms)

   - Birds slide up from below with fade-in
   - Used for top bird decorations

2. **`flyRight`** (5s, 2.5s delay)

   - Message bubbles fly from left to right across the screen
   - Applied to left-side flying messages

3. **`flyLeft`** (5s, 2.5s delay)

   - Message bubbles fly from right to left (horizontally flipped)
   - Applied to right-side flying messages

4. **`ghostMerge`** (800ms)

   - Creates a ghost trail effect
   - Fades in and out while moving up
   - Used for ghost bird decorations

5. **`bottomGroupUp`** (1.2s)
   - Bottom decorations slide up with fade-in
   - Used for clouds and message bubbles at the bottom

All animations use a custom cubic-bezier easing function: `cubic-bezier(0.73, 0, 0.8, 0.83)` for smooth, natural motion.

### Color Palette

- Primary Blue: `#007AFF`
- Text Dark: `#1D2026`
- Text Gray: `#8C97A8`
- Border Gray: `#6C788F`
- Background: White with gradient glow

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd freebie-assessment
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build

Create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: Default styles for small screens
- **Desktop (md:)**: Styles for screens ≥768px

Key responsive features:

- Navigation menu collapses to hamburger on mobile
- Typography scales (text-3xl → text-5xl)
- Decorative elements hidden on mobile (`hidden md:block`)
- Button layouts switch from column to row
- Spacing adjustments (gap-8 → gap-12)

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Smooth CSS animations
- ✅ TypeScript for type safety
- ✅ Modern React 19 with hooks
- ✅ Tailwind CSS for styling
- ✅ Custom font integration
- ✅ Accessible SVG icons
- ✅ Optimized build with Vite

## 📝 Notes

- The page uses absolute positioning extensively for decorative elements
- All animations are CSS-based for performance
- SVG assets are optimized and stored in the `public/` directory
- The project uses Tailwind CSS v4 with the Vite plugin
- React StrictMode is enabled for development warnings

## 🔧 Configuration Files

- **`vite.config.ts`**: Configures Vite with React and Tailwind plugins
- **`tsconfig.json`**: Base TypeScript configuration
- **`tsconfig.app.json`**: Application-specific TypeScript settings
- **`tsconfig.node.json`**: Node.js-specific TypeScript settings
- **`eslint.config.js`**: ESLint configuration with React rules
