# Wortreise — Worti scripted conversations V3

Worti appears below the 12 chapter cards, while **المفردات والمعنى**
and **اختبار الفصل** remain unchanged within each chapter.

## Source and content
95 topic-based scenes mapped to the original `Spektrum Deutsch A1+` course
overview (printed pages 4–7). There are 4 progressive prompts per scene
for a total of 380 authored prompts. Scripted prompts and examples are
new practice material — not copied from the book's protected dialogues.
Each scene finishes after four turns instead of repeating questions.

## Features
- No AI, no remote inference calls, no Workers AI binding, and no AI quota.
- Coherent sequence of questions within the selected topic.
- Chapter labels derive from topic IDs (fixes "Kapitel undefined").
- German reply suggestions can be shown or hidden globally; preference saved
  in `st.lab.conversationSuggestionsHidden`.
- Learners can select an answer, type, or use browser-based speech recognition.
- German speech synthesis, optional automatic playback and translation.
- Immediate deterministic feedback for known noun capitalization,
  selected A1 present-tense conjugations and constrained Akkusativ/article errors.
- A learner can retry after a verified error or apply the correction to
  advance. Correctly authored options advance directly.
- **Critical limitation:** without an AI model, arbitrary open-ended German
  cannot be fully grammar-checked. Unknown responses are flagged as
  **unverified**, not **incorrect**, while the scene can still progress.
- Text transcripts & conversation stage are stored in the existing progress
  object and can sync through the existing Supabase snapshot when logged in.
  Old AI conversation transcripts are preserved in
  `st.lab.conversationLegacy` on first opening a migrated topic.
  Audio itself is not stored by the app.

## Files
- `dist/conversation-topics.js` — 95 topics, mapped to 12 chapters.
- `dist/conversation-scenes.js` — 380 authored roleplay steps.
- `dist/conversation-checker.js` — explicit, conservative A1 rule checker.
- `dist/conversation.js` — deterministic conversation state machine and UI.
- `dist/conversation.css` — visually consistent responsive chat and corrections.
- `wrangler.jsonc` — static asset deployment without a Worker AI binding.

## Deployment
Cloudflare assets from branch `wortreise-v2`, command:
`npx wrangler deploy`

No AI key, AI API, Worker entrypoint, or inference usage is required.
Verify the live version with:
`/deploy-check.json`, expected release `2026-11-28-scripted-dialogue-v3`.

## QA
Tested using isolated JavaScript checks:
- 95 scenes, all 12 chapters, 380 steps, no duplicate scene questions
- Chapter 8 selection and correct chapter label
- Suggestions visible and toggled hidden
- Wrong conjugation -> immediate correction -> apply corrected response
- Script progresses to final state, never repeats questions
- JavaScript syntax and script loading order

Browser UI, dictation, and deployment still need live device checks.
