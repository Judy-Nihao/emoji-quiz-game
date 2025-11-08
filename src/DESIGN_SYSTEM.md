# Game Boy Color / Pokémon Gen 1 Design System

This document describes the pixel art design system used in this emoji quiz game, inspired by classic Game Boy Color and Pokémon Generation 1 aesthetics.

## Color Palette

The game uses a **strict 8-color palette** to maintain authentic GBC aesthetics:

```css
--gbc-black: #000000     /* Pure black for borders and text */
--gbc-white: #FFFFFF     /* Pure white for backgrounds */
--gbc-bg: #B4BFBE        /* Iconic GBC greenish-gray background */
--gbc-dark: #8B9594      /* Dark gray-green for shadows */
--gbc-light: #D4DEDD     /* Light gray-green for highlights */
--gbc-green: #4CAF50     /* Success states */
--gbc-red: #E53935       /* Error states */
--gbc-yellow: #FFC107    /* Warning states */
```

## Typography

- **Font:** Press Start 2P (Google Fonts)
- **Rendering:** Pixelated, crisp edges
- All text uses monospaced pixel font for authenticity
- Letter spacing and line height optimized for readability

## Components

### DialogueBox Component

The `DialogueBox` component replicates the classic Pokémon Gen 1 dialogue box:

**Features:**
- White background with thick black border (3px)
- Double border effect using `::before` pseudo-element
- Optional blinking arrow indicator (▶) for text advancement
- Proper padding and spacing for retro feel

**Usage:**
```tsx
<DialogueBox showArrow={true}>
  <DialogueText center>
    Hello there!
    Welcome to the
    world of EMOJI!
  </DialogueText>
</DialogueBox>
```

### Custom CSS Classes

#### Panel & Window Styles
- `.gbc-panel` - Basic panel with inset shadow
- `.gbc-panel-outer` - Panel with outer shadow
- `.gbc-window` - Window container with GBC styling
- `.gbc-content` - Content area with proper borders

#### Interactive Elements
- `.gbc-button` - Pixel-perfect button with 3D effect
- `.gbc-button:active` - Pressed state with inset shadow

#### Display Elements
- `.gbc-header` - Black header bars
- `.gbc-stat-box` - Stats display boxes
- `.gbc-topic-display` - Topic badge display
- `.gbc-score-value` - Score number display

#### Special Effects
- `.gbc-scanlines` - Subtle CRT scanline effect
- `.pixelated-icon` - Ensures pixel-perfect icon rendering
- `.menu-cursor` - Classic Pokémon-style menu arrow

## Design Principles

### 1. Pixel Perfect
- All borders are 2px or 3px thick
- No anti-aliasing on borders and icons
- `image-rendering: pixelated` applied globally

### 2. Limited Palette
- Strictly use the 8-color GBC palette
- No gradients or smooth color transitions
- High contrast for readability

### 3. Authentic Interactions
- Button press states with inset shadows
- Hover states show selection arrow (▶)
- Blinking/pulsing animations for prompts

### 4. Retro Typography
- All uppercase for emphasis
- Monospaced pixel font throughout
- Limited font sizes (10px, 12px, 14px, etc.)

### 5. Game Boy Aesthetic
- Main background: #B4BFBE (iconic GBC green-gray)
- Subtle scanline effect for CRT feel
- Double borders on dialogue boxes
- Inset/outset shadows for depth

## Tailwind Configuration

Custom Tailwind configuration extends the theme with:
- GBC color palette
- Pixel-based spacing units
- Custom box shadows for GBC effects
- Pixel-perfect transition durations

## Animation Guidelines

- Use Motion (Framer Motion) for smooth animations
- Keep animations simple and pixel-friendly
- Common animations:
  - Opacity fade (0.2s duration)
  - Scale pulse (1 → 1.05 → 1)
  - Position float (y: [0, -4, 0])
  - Blinking (opacity: [1, 0.3, 1])

## Pokémon-Inspired Messaging

The game uses Pokémon-style dialogue throughout:
- "A wild emoji appeared!"
- "It's not very effective..."
- "A critical hit!"
- "You're a true Pokémon Master!"

## File Structure

```
/components/
  DialogueBox.tsx       - Pokémon-style dialogue component
  StartScreen.tsx       - Game intro
  TopicSelection.tsx    - Category selection
  EmojiQuiz.tsx        - Quiz gameplay
  SuccessScreen.tsx    - Correct answer feedback
  ErrorScreen.tsx      - Wrong answer feedback
  GameOver.tsx         - Final results

/styles/
  globals.css          - GBC design system CSS

tailwind.config.js     - Tailwind GBC extensions
```

## Best Practices

1. **Always use GBC classes** instead of inline styles
2. **Maintain pixel grid alignment** (2px, 4px, 6px, 8px)
3. **Use DialogueBox for text blocks** instead of custom boxes
4. **Test on multiple screen sizes** (responsive pixel art)
5. **Keep animations subtle** to maintain retro feel
6. **Use uppercase text** for authenticity
7. **Limit color usage** to the 8-color palette

## References

- Pokémon Red/Blue/Yellow (Game Boy, 1996-1998)
- Pokémon Gold/Silver/Crystal (Game Boy Color, 1999-2001)
- Classic Game Boy Color UI patterns
- 8-bit pixel art principles
