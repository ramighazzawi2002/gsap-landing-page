# JSM Cocktail Bar — GSAP Landing Page

A fully animated cocktail bar landing page built with React, TypeScript, GSAP, and Tailwind CSS.

## Overview

This project is a single-page marketing website for **JSM Cocktail Bar**, featuring smooth scroll-triggered animations powered by GSAP. It showcases the bar's cocktail menu, brand story, gallery art, and contact/location info.

## Sections

- **Navbar** — Fixed navigation with links to each section
- **Hero** — Full-screen animated intro
- **Cocktails** — Animated showcase of featured cocktails (Classic Mojito, Raspberry Mojito, Violet Breeze, Curacao Mojito)
- **About** — Brand story with feature highlights and team profiles
- **Art** — Visual gallery section
- **Menu** — Drinks menu split into cocktails and mocktails with pricing
- **Contact** — Store address, opening hours, and social links

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | 5.9 |
| GSAP | 3.14 (ScrollTrigger, SplitText) |
| Tailwind CSS | 4 |
| Vite | 7 |

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Cocktails.tsx
│   ├── About.tsx
│   ├── Art.tsx
│   ├── Menu.tsx
│   └── Contact.tsx
├── constants/
│   └── index.ts     # All static data (menu items, store info, socials)
├── App.tsx
└── main.tsx
```
