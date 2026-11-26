# Spektrum Lab — Portfolio V2-inspired theme

This branch is a **visual-only preview**, using the look of Toufik's Portfolio V2: charcoal background (#090c12), high-contrast off-white text (#f6f6f3), and lime accents (#daff65).

## Changes
- `dist/portfolio-theme.css` is added and loaded **after** the existing CSS; no lesson or vocabulary data is changed.
- `dist/index.html` links the new stylesheet and changes the mobile browser's theme color.
- Chapter cards, hero, buttons, practice choices, feedback, progress indicators and settings are restyled.
- Accessible keyboard focus and reduced-motion handling are included.
- The old standalone review link and old 60-day memory link are hidden, in line with the simplified learning menu.

## Preserved
- 12 chapters and 1,095 vocabulary cards; no card content changes.
- Four vocabulary practice modes and each chapter's `Kleiner Abschlusstest` entry.
- Default Darija and optional German interface.
- Account and settings separate from training.
- Current Supabase integration, authentication and progress.

## Testing and publishing
Layout checked at 1280px and 390px viewports. Chapter 3 opened successfully and the four practice choices were present. These are **local UI checks**; production auth/DB sync, PDF exports and the publisher's media were not retested.

The original live `chatgpt.site` URL **does not auto-deploy from GitHub**. Do not replace the live site from this branch without testing the missing book assets/PDFs separately. This is a design branch, not the published site.
