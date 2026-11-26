# Source import progress (26 November 2026)

The user provided the original exported `Wortreise_Source(1).zip` containing 459 files (200 MB uncompressed). Its static site code, vocabulary datasets and Supabase SQL migrations have been inspected.

**Confirmed:** the production `chapterCards(ch)` logic resolves to **1,095 unique cards** across 12 chapters. Counts are in `CARDS_VERIFIED.json`, including Kapitel 8 = 88.

**Already committed through the GitHub connector:** both original SQL migration files, `dist/settings.js` and `.openai/hosting.json`. The previously committed README, database types and migration notes also remain.

**Not yet committed:** most of the frontend JavaScript/CSS/HTML. The provided ZIP was inspected inside the working environment, but the GitHub connector cannot accept local ZIP files directly. A code-only archive and Windows upload script were prepared separately for a Git clone/push.

**Public repository caution:** the original ZIP also contains 130 textbook MP3 recordings, 246 scanned textbook page JPGs and 12 original test PDFs (with preview JPGs). These must **not** be published to this public repository without appropriate distribution rights. The code-only transfer package omits this publisher media, two long textbook transcriptions, and fonts. It is not a byte-for-byte clone of the working deployment; `Kleiner Abschlusstest` PDF links will be missing in that public package.

The original site at https://wortreise-toufik-a1.dear-goby-7706.chatgpt.site is **unchanged**.
