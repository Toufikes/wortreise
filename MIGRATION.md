# Original-source migration checklist

- [x] Confirm GitHub access to `Toufikes/wortreise` and successful write permissions.
- [x] Locate active `wortreise` Supabase project.
- [x] Store generated Supabase database types.
- [ ] Obtain original frontend source files, not just a rendered web page.
- [ ] Obtain all 1,095 current vocabulary cards and keep them assigned to the original chapters.
- [ ] Obtain each chapter's original `Kleiner Abschlusstest` and its PDF-export behavior.
- [ ] Keep existing training modes, Darija default and German optional language.
- [ ] Test login, user progress persistence, RLS and chapter test PDF export.
- [ ] Build and test locally, verify visual/function parity with live application.
- [ ] Establish a deployment workflow **only when explicitly requested**; current `chatgpt.site` deployment must remain unchanged.

Existing Supabase `wortreise_progress` stores user progress, **not necessarily the chapter card data or original frontend source**.
