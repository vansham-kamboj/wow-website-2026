# WOW Global Design System

This document serves as the single source of truth for the design language of the WOW Global website. When adding new components or making style changes, refer to these guidelines to ensure the whole website perfectly aligns with a single, unified theme.

## 1. Color Palette

The color palette is built around our primary purple, with distinct, legible text colors and subtle glassmorphic backgrounds.

*   **Primary Brand Color**: `#58335e`
    *   Used for: Headings (`h1`, `h2`, `h3`), Icon backgrounds, Hover states for card borders.
*   **Primary Hover**: `#4a2a4f`
    *   Used for: Button hovers, active states.
*   **Text (Main)**: `#333333`
    *   Used for: Primary card text and bold statements.
*   **Text (Muted/Subtle)**: `#555555` or `#5a5a5a`
    *   Used for: Section subheadings, paragraph text, and descriptions.
*   **Text (Light)**: `#666666`
    *   Used for: Extra subtle info.
*   **Background (Cards)**: `rgba(255, 255, 255, 0.05)` or `rgba(255, 255, 255, 0.4)` (with Backdrop Blur)
*   **Borders (Glass)**: `rgba(255, 255, 255, 0.3)`

## 2. Typography

We use **Barlow Condensed** for all headings to give a bold, impactful look, and standard web-safe fonts (`system-ui, Avenir, Helvetica, Arial, sans-serif`) for body text.

*   **Headings (h1 - h6)**:
    *   Font Family: `Barlow Condensed`, sans-serif
    *   Weight: Bold (`700`)
*   **H1 (Hero/Main Titles)**:
    *   Size: `3.2em`
    *   Line Height: `1.1`
    *   Weight: Bold (`700`)
*   **H2 (Section Headings)**:
    *   Size: `2.5rem`
    *   Weight: Bold (`700`)
    *   Color: Primary (`#58335e`)
    *   Margin Bottom: `0.5rem` to `1rem`
*   **H3 (Card Titles)**:
    *   Size: `1.2rem`
    *   Weight: Bold (`700`)
    *   Color: Primary (`#58335e`)
    *   Margin Bottom: `0.75rem`
*   **Body Text (Paragraphs inside cards)**:
    *   Size: `0.95rem`
    *   Line Height: `1.6`
    *   Color: Muted (`#5a5a5a`)
*   **Subheadings (Under Section H2s)**:
    *   Size: `1.1rem`
    *   Color: Light (`#666` or `#555`)
    *   Max-width: `700px` (Center aligned)

## 3. Spacing & Padding

Alignment and whitespace are critical for a premium feel.

*   **Section Padding**: `4rem` (top/bottom) and `2rem` (left/right)
    *   All major sections (`.coaching-section`, `.services-section`, `.features-section`, `.reviews-section`) use this to maintain vertical rhythm.
*   **Card Padding**: `2rem` (Inner spacing for cards)
*   **Grid Gap (Between cards)**: `2rem` (or `1.5rem` for smaller feature grids)
*   **Icon Margin**: `1rem` bottom margin below icons inside cards.

## 4. Components

### A. Cards
All standard cards (Service, Coaching, Review) share these properties to maintain the glassmorphism theme:
*   **Border Radius**: `16px`
*   **Background**: `rgba(255, 255, 255, 0.05)` (Slightly transparent white)
*   **Backdrop Filter**: `blur(8px)` (Glass effect)
*   **Border**: `1px solid transparent` (Idle)
*   **Box Shadow (Idle)**: `0 4px 14px rgba(0, 0, 0, 0.05)` (Subtle depth)
*   **Hover State**:
    *   Border Color: Primary (`#58335e`)
    *   Transform: `translateY(-8px)` (Floating lift effect)
    *   Box Shadow: `0 10px 28px rgba(88, 51, 94, 0.18)` (Deeper, colored shadow)
    *   Transition: `all 0.35s ease`

### B. Icons
Icons inside cards function as focal points:
*   **Size**: Usually set to `2rem` font-size.
*   **Container Width/Height**: `64px` x `64px` (or relative padding `0.75rem`).
*   **Background Color**: Primary (`#58335e`)
*   **Icon Color**: `white`
*   **Border Radius**: `12px`
*   **Box Shadow**: `0 6px 10px rgba(88, 51, 94, 0.25)`

## 5. CSS Variables Reference

If you are styling a new component, DO NOT hardcode colors or sizes. Instead, refer to `src/design-tokens.css` and use standard variables like:
*   `var(--color-primary)`
*   `var(--radius-card)`
*   `var(--section-padding)`
*   `var(--shadow-card-hover)`
*   `var(--font-size-h3)`
