# Wortreise — Gesprächsstudio (A1+)

The conversation studio appears **below the 12 chapter cards** on the homepage.
The two existing options within each chapter remain unchanged:
**المفردات والمعنى** and **اختبار الفصل**.

## Learning content

- 12 chapters, 95 selectable conversation scenes.
- Topics derive from the publisher's **Spektrum Deutsch A1+** `Kursübersicht`,
  printed pages 4–7, organized into the original chapters.
- Scene introductions, answer examples, roles, and guided prompts are original
  teaching material, not reproductions of copyrighted book dialogues.
- It covers the subjects listed in the book's course overview. It is not a
  page-by-page audit of every question, dialogue, or exercise in the book.

## UX

- Chapter tabs and search, contextual role-play, German chat.
- Optional Darija translation, short corrective feedback, suggested German reply.
- Browser speech recognition when supported, otherwise typing/keyboard dictation.
- German speech synthesis and an optional auto-play toggle.
- Topic transcripts saved with existing `st.lab.conversations` progress.
  That means signed-in users' text progress can sync via the app's existing
  Supabase progress snapshot. Audio recordings are not saved by this feature.
- A guided, non-AI mode replaces live AI when inference is unavailable.
  Guided mode does **not** claim to provide adaptive grammar correction.

## Cloudflare Worker

The pre-existing `wrangler.jsonc` is updated with:

```json
{
  "main": "./src/conversation-worker.js",
  "ai": { "binding": "AI" },
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS",
    "not_found_handling": "single-page-application",
    "run_worker_first": ["/api/*"]
  }
}
```

Deploy the `wortreise-v2` branch with the existing command `npx wrangler deploy`.
The Worker handles POST `/api/conversation` using Workers AI; static assets use
Cloudflare's static-assets binding. A public GET `/api/conversation/health`
reports if the AI binding exists (not whether inference quota remains).

**Costs:** Cloudflare Workers AI has a free daily allocation but not unlimited
free inference. The UI limits AI calls to 30 responses per local device per UTC
day (a convenience guard, not account-wide abuse prevention). On paid accounts,
monitor Workers AI usage and billing. On quota/errors, guided dialogue remains
usable. No API key is stored in frontend JavaScript.

## Tests

- JS syntax and 95-topic uniqueness / chapter coverage.
- Conversation topic selector and opening-state persistence in an isolated DOM mock.
- Worker AI response parsing, invalid requests, static asset fallback,
  and missing binding, with mocked Worker environments.
- Browser visual/voice and live provider inference require verification
  in the deployed Cloudflare site and on the target iPhone.
