# Website Design Specification

A comprehensive guide to the visual and functional design principles for the ScrapNet demo frontend.

---

## 1. Introduction & Vision

ScrapNet is an open-source web platform showcasing community-made AI gadgets, firmware, and prompt packs. This design document lays out the core visual and interaction principles to ensure the demo site:

* Conveys an "e-ink" retro-tech aesthetic.
* Supports seamless dark/light modes.
* Emphasizes accessibility and GDPR-compliant privacy.
* Remains clean, performant, and easy to maintain.

---

## 2. Visual Style & Theming

### Monochrome Base + Accent

* Core palette: white (#FFFFFF), black (#000000), and 2–3 shades of gray.
* Single accent color for interactive elements (e.g., bold red or deep slate).

### E-Ink Texture

* Apply a subtle SVG or CSS noise overlay (\~2–3% opacity).
* Evoke paper grain without hindering readability.

### Typography

* **Headings:** VT323 or IBM Plex Mono for a retro monospace feel.
* **Body Text:** Inter or Roboto to ensure neutrality and legibility.
* Font sizes on a consistent scale (e.g., 1rem, 1.25rem, 1.5rem).

### Dark/Light Mode

```css
:root {
  /* Light theme variables */
}
@media (prefers-color-scheme: dark) {
  /* Dark theme variables */
}
```

* Both modes must meet WCAG contrast standards (≥4.5:1).

---

## 3. Layout & Responsiveness

### Mobile-First Grid

* Base layout: single-column stack on small screens.
* Breakpoints: ≥640px for two columns, ≥1024px for three columns.

### Whitespace & Rhythm

* Use a 4px-based spacing system (4, 8, 16, 24, 32px).
* Maintain consistent margins and padding for visual harmony.

### Sticky Elements

* A persistent “Project in Preview” banner pinned at the top.
* Responsive navbar that transitions to a hamburger menu on mobile.

---

## 4. Micro-Interactions & Animation

### Purposeful Animations

* Integrate tiny Lottie JSON snippets (≤20 KB) or SVG `<animate>` effects.
* Examples: blinking text cursor, loading dots, icon pulses.

### Hover & Focus States

* Subtle elevation or underline on hover.
* Clear, custom focus rings (2px solid accent) for keyboard navigation.

---

## 5. Accessibility Guidelines (WCAG 2.1 AA)

1. **Semantic HTML:** use proper tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
2. **Color Contrast:** ensure text-to-background ratios ≥4.5:1 in both themes.
3. **Keyboard Navigation:** all interactive elements must be reachable and operable via keyboard.
4. **ARIA & Labels:** apply `aria-label` or `aria-labelledby` where needed.
5. **Alt Text:** every image and icon needs descriptive `alt` text or role attributes.

---

## 6. GDPR & Privacy Compliance

1. **Consent-First Analytics:** no cookies or tracking scripts loaded until the user explicitly opts in.
2. **Minimal Consent Banner:** present a simple choice—“Accept” or “Decline”—without dark patterns.
3. **Privacy Policy:** provide both a human-readable page and a machine-readable JSON-LD snippet in `<head>`.

---
