# Wortreise — Spektrum Lab

**Migration status: partial.** The original frontend files of the published app are not available through connected sources. **This repository does not yet contain the complete live application's code.**

Live URL: https://wortreise-toufik-a1.dear-goby-7706.chatgpt.site

## Confirmed requirements of the existing app

- Spektrum Deutsch A1+, Kapitel 1–12.
- Each chapter contains only **المفردات والمعنى** and **اختبار الفصل**.
- Four practice modes for the same vocabulary: choose Darija meaning; choose German sentence; arrange words; write from memory.
- No fixed 20-card limit. Last reported: **1,095 cards**, including 88 in Kapitel 8. Book-page completeness has **not** been verified.
- Original `Kleiner Abschlusstest` per chapter (20 points); PDF export of questions and written answers for correction.
- Moroccan Darija is the default interface language, German optional; account and settings remain separate from training.
- Do not reintroduce the old removed sections.

## Verified backend

Supabase project: `wortreise` (`newlviixdgxlkffpsmua`), URL: `https://newlviixdgxlkffpsmua.supabase.co`.

Existing table: `public.wortreise_progress` (`user_id` UUID PK, `progress` JSONB, `revision` bigint; RLS enabled).

`src/lib/database.types.ts` contains **TypeScript definitions generated from the existing Supabase project**; it does **not** include records or credentials.

## Next step to complete migration

Obtain the original editable app source/ZIP from the ChatGPT site editor and commit those files with the full chapter data, visual assets and tests. **Do not reconstruct the 1,095 cards from guesses or substitute newly written phrases for the actual book material.**

This repo is **not connected to deploy** the existing `chatgpt.site` URL. Do not replace the deployed app with this partial repository.

## Security

Use frontend-safe publishable API keys only. Never commit `service_role`, secret keys, database passwords, or real users' progress.
