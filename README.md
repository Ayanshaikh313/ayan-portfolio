# Jack — 3D Creator Portfolio

A dark-theme 3D creator portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedText.tsx   # Scroll-driven character reveal
│   ├── Buttons.tsx        # ContactButton + LiveProjectButton
│   ├── FadeIn.tsx         # Reusable fade-in animation wrapper
│   └── Magnet.tsx         # Mouse-following magnetic effect
├── sections/
│   ├── HeroSection.tsx    # Full-viewport hero with portrait
│   ├── MarqueeSection.tsx # Scroll-parallax image marquee
│   ├── AboutSection.tsx   # About with animated text
│   ├── ServicesSection.tsx# Services list with stagger
│   └── ProjectsSection.tsx# Sticky stacking project cards
├── App.tsx
├── main.tsx
└── index.css
```

## ✏️ Customization Guide

### Change Your Name
In `src/sections/HeroSection.tsx`, find:
```tsx
Hi, i&apos;m jack
```
Replace `jack` with your name.

### Edit Nav Links
In `HeroSection.tsx`:
```tsx
{['About', 'Price', 'Projects', 'Contact'].map(...)}
```

### Edit About Text
In `src/sections/AboutSection.tsx`, find the `AnimatedText` component and update the `text` prop.

### Edit Services
In `src/sections/ServicesSection.tsx`, update the `services` array.

### Edit Projects
In `src/sections/ProjectsSection.tsx`, update the `projects` array with your own:
- `num` — card number (01, 02, 03…)
- `name` — project name
- `category` — Client / Personal / etc.
- `col1a`, `col1b` — left column images (top and bottom)
- `col2` — right column tall image

### Replace Portrait
In `HeroSection.tsx`, replace the `src` on the `<img>` tag with your own image URL or local path.

### Change Colors / Gradient Button
Edit `src/components/Buttons.tsx` for button styles.
Edit `src/index.css` for the `.hero-heading` gradient.

## 🛠 Tech Stack
- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (utility styles)
- **Framer Motion** (animations)
- **Kanit** (Google Font)
