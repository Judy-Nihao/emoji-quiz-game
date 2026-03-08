# Emoji Quiz Game

> An emoji silhouette guessing game with retro 8-bit pixel art aesthetics and Web Audio API sound effects, originally prototyped with Figma Make then refined locally.

🌐 **Live Demo**: https://emoji-quiz-game.vercel.app/

Original Figma Make file: https://www.figma.com/design/1eolDWWLrTLHg5Epv98J3D/Emoji-Quiz-Game-Interface

  <img width="537" height="733" alt="截圖 2026-03-09 凌晨12 09 19" src="https://github.com/user-attachments/assets/265d4023-e766-45da-ae36-2b24af952a10" />

https://github.com/user-attachments/assets/4cf25f1c-9833-4d11-a9ab-18bd896264af

https://github.com/user-attachments/assets/ccb6bc3a-1939-4096-aabe-67e66a465892

---

## 🎯 Core Features

- 🎮 **Three Quiz Categories** — Animals, Vehicles, Food
- 🕵️ **Silhouette Guessing** — Identify the emoji from its shadow
- ⏱️ **10-Second Countdown** — Per question timer
- 🔊 **Retro 8-bit Sound Effects** — Generated via Web Audio API (no audio files needed)
- 📊 **Score Tracking** — Correct/wrong tally with end-game summary
- 📱 **Responsive Layout** — Mobile and desktop friendly

---

## 🏗️ Development Journey

This project started as a **Figma Make vibe coding prototype** — I used natural language prompts to generate the initial game UI, then pulled the code locally for fine-tuning in VS Code.

**Workflow:**

```
Figma Make (prototype) → Download source → VS Code refinement → GitHub → Vercel
```

**Key decisions:**

1. Prototyping: Figma Make for rapid UI generation with retro pixel art style
2. Local dev: React + TypeScript + Vite
3. Styling: Downgraded from Tailwind v4 → v3 + PostCSS for stability
4. Deployment: Vercel via GitHub integration

---

## ⚠️ Development Challenges

### 1. Tailwind CSS — v4 Incompatibility

Figma Make outputs **pre-compiled static CSS**, not a live Tailwind JIT environment. Adding new utility classes locally had no effect because there was no active compilation pipeline.

Tailwind v4 also caused ESM/CJS conflicts with Vite:

```
Error [ERR_REQUIRE_ESM]: require() of ES Module @tailwindcss/vite not supported
```

**Solution: Downgraded to Tailwind v3 + PostCSS**

```bash
npm uninstall tailwindcss @tailwindcss/vite
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

v3 + PostCSS is stable, JIT works correctly, and custom `theme.extend` applies as expected.

---

### 2. Web Audio API — iOS Sound Playback

Sound effects work on desktop browsers (Chrome, Safari), but are completely silent on both iPhone and iPad.

**Root cause:** iOS WebKit automatically suspends `AudioContext` on page load. It must be resumed synchronously inside a user interaction event. Any delay from `async/await` or `setTimeout` causes iOS to block playback silently, with no error thrown.

**Fixes applied:**

- Singleton `AudioContext` — one shared instance across all sound functions
- Call `ctx.resume()` when `ctx.state === "suspended"`

```typescript
const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
};
```

**Current status:** ⚠️ Unresolved — iOS sound playback remains non-functional. Web Audio API on iOS is highly restrictive and sensitive to interaction timing. A potential next step would be replacing Web Audio API with pre-recorded audio files played via `HTMLAudioElement`, which follows the same playback model as `<audio>` tags and is significantly more compatible across iOS devices.

---

### 3. Figma Make Code Quality

Figma Make prioritizes **pixel-perfect visual output** over clean code structure. Common issues encountered:

- Mixed Tailwind utilities and inline styles
- No component extraction (everything in `App.tsx`)
- Unused files left in project (`global.css`, stale config files)
- Import statements with version numbers (invalid in JS/TS):

```tsx
// ❌ Figma Make output
import { Slot } from "@radix-ui/react-slot@1.1.2";

// ✅ Correct
import { Slot } from "@radix-ui/react-slot";
```

Post-download cleanup included: extracting emoji data to `constants/`, removing dead files, and unifying styles under Tailwind + custom CSS classes.

---

## 📂 Project Structure

```
emoji-quiz-game/
├── src/
│   ├── components/          # [Frontend] React UI components
│   ├── constants/           # Emoji quiz data (extracted from App.tsx)
│   ├── utils/
│   │   └── soundEffects.ts  # Web Audio API sound generator
│   └── App.tsx              # Main application
├── public/
├── tailwind.config.js       # Tailwind v3 config
├── postcss.config.js
└── vite.config.ts
```

## 🚀 Deployment

Deployed via Vercel. Every push to `main` triggers an automatic redeploy — no manual steps required.
