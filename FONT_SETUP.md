# Wortreise typography — font licensing and integration

The design uses these **requested** families:

- **URW Geometric Arabic** for Moroccan Darija / Arabic interface: Regular 400, Medium 500, Bold 700, Black 900.
- **Canaro** for German/English/Latin interface: Light 300, Book 400, Bold 700, ExtraBold 800/900.

Current implementation: `dist/typography.css` selects these fonts **if installed locally**. On other devices, free fallback fonts Tajawal (Arabic) and Manrope (Latin) load over Google Fonts, so the site remains readable.

## To make the exact requested fonts appear on Netlify/iPhone

These commercial fonts need **valid website/webfont embedding licenses for the Netlify domain**, plus the appropriate vendor-supplied webfont assets and license terms. The original user-uploaded TTF/OTF files have **not** been copied into this public GitHub repository or embedded in the site. Do not upload or convert them into webfont formats merely to bypass license conditions.

Once licensed webfont assets are available, place them in a domain-authorized hosting location and replace `src:local(...)` in the font faces with the licensed hosted URLs according to each foundry's terms.

The Wortreise V2 source branch is `wortreise-v2`. The previous `design/portfolio-v2-lime` branch remains temporarily for the existing Netlify connection. The `main` branch and original chatgpt.site deployment are untouched. Cloudflare must be configured separately to deploy `wortreise-v2`; creating this branch does not deploy it.
