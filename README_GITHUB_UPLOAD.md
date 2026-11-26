# Wortreise / Spektrum Lab - GitHub migration package

This folder has been extracted from your provided **Wortreise_Source(1).zip**, with no rebuild of the application. It contains the existing static JavaScript, HTML, CSS, vocabulary data, assets and two Supabase migrations. The existing app is deployed at https://wortreise-toufik-a1.dear-goby-7706.chatgpt.site.

**This is a CODE-ONLY export, not a fully working public deployment.** The published textbook's audio recordings (130 MP3s), scanned book pages (246 JPGs), and official printed tests (12 PDFs and 12 JPGs) are intentionally excluded because the destination repo is PUBLIC and publishing them may require the rights-holder's permission. OCR/transcript files reader-pages.js and reader-lessons.js were replaced with clearly marked empty placeholders. The included app code is otherwise preserved from your ZIP. No fonts are included.

As a result, the original official test PDFs will not open from this package, and old, hidden book/audio sections will have no media. **The original live chatgpt.site deployment is unchanged.** The original uploaded ZIP remains the authoritative complete backup.

## Upload to your GitHub repository

Target: https://github.com/Toufikes/wortreise

### Windows (automated after installing Git for Windows)

1. Extract the complete ZIP file to a directory on your computer.
2. Install Git for Windows if necessary (https://git-scm.com/downloads/win).
3. Double-click `PUSH_TO_GITHUB_WINDOWS.bat` in the extracted folder, and complete the GitHub sign-in if prompted.
4. Open the repository URL and check the uploaded files.

Alternatively, clone the repository and copy the `dist`, `supabase`, and `.openai` folders into it, then run `git add .`, `git commit -m "Import Wortreise exported frontend"`, `git push origin main`.

### Important

- This repository is public: **do not commit the omitted publisher's audio, scans, PDFs or commercial font unless you have rights to distribute them**.
- Do not apply the two SQL migrations on a database that already has these structures; they document the existing database and may fail if reapplied.
- No deployment is configured here. GitHub uploading does **not** update the current ChatGPT-hosted URL.
- The JS is an export of the static site; it is not an npm/Vite/React project and requires no build process. For local preview, serve the `dist/` directory with a local static HTTP server such as `python -m http.server 8000 -d dist`.
