# DialogueBox Component Guide

The `DialogueBox` component is a Pokémon Gen 1-style dialogue box that perfectly replicates the classic 8-bit Game Boy aesthetic.

## Features

✅ Authentic Pokémon dialogue box styling
✅ Double black border (3px outer + 2px inner)
✅ White background with pixel-perfect rendering
✅ Optional blinking arrow indicator (▶)
✅ Support for multi-line text with `\n`
✅ Centered or left-aligned text options

## Import

```tsx
import { DialogueBox, DialogueText } from "./DialogueBox";
```

## Basic Usage

### Simple Dialogue Box

```tsx
<DialogueBox>
  <DialogueText>
    Hello there!
    Welcome to the
    world of EMOJI!
  </DialogueText>
</DialogueBox>
```

### With Arrow Indicator

```tsx
<DialogueBox showArrow={true}>
  <DialogueText>
    Press A to continue...
  </DialogueText>
</DialogueBox>
```

### Centered Text

```tsx
<DialogueBox>
  <DialogueText center>
    {"You're a true\nPokémon Master!"}
  </DialogueText>
</DialogueBox>
```

### With Click Handler

```tsx
<DialogueBox onClick={handleContinue}>
  <DialogueText>
    Tap to continue
  </DialogueText>
</DialogueBox>
```

## Props

### DialogueBox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Content to display (typically `DialogueText`) |
| `showArrow` | `boolean` | `false` | Shows blinking arrow indicator in bottom-right |
| `className` | `string` | `""` | Additional CSS classes |
| `onClick` | `() => void` | `undefined` | Click handler (makes box interactive) |

### DialogueText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Text content to display |
| `center` | `boolean` | `false` | Centers the text |

## Text Formatting

### Multi-line Text

Use `\n` for line breaks:

```tsx
<DialogueText>
  {"Line one\nLine two\nLine three"}
</DialogueText>
```

### Pokémon-Style Messaging

Keep text authentic to Pokémon Gen 1:

```tsx
// ✅ Good - Pokémon style
"A wild EMOJI appeared!"
"It's not very\neffective..."
"A critical hit!"
"You're a Pokémon\nMaster!"

// ❌ Avoid - Too modern
"Great job!"
"Incorrect answer"
"Try again later"
```

## Styling

The component uses the following CSS classes:

- `.gbc-dialogue-box` - Main container
- `.dialogue-text` - Text styling

These are defined in `/styles/globals.css` and follow strict GBC pixel art principles.

## Animation

The arrow indicator automatically animates when `showArrow={true}`:

```tsx
// Blinking animation
animate={{ opacity: [1, 0.3, 1] }}
transition={{ duration: 0.8, repeat: Infinity }}
```

## Examples from the App

### Start Screen

```tsx
<DialogueBox showArrow={true}>
  <DialogueText>
    {"Hello there!\nWelcome to the\nworld of EMOJI!\n\nYour quest:\n▸ 10 questions\n▸ 10 sec each\n▸ Catch 'em all!"}
  </DialogueText>
</DialogueBox>
```

### Topic Selection

```tsx
<DialogueBox showArrow={false}>
  <DialogueText center>
    {"Choose your\npath, Trainer!"}
  </DialogueText>
</DialogueBox>
```

### Success Screen

```tsx
<DialogueBox showArrow={false}>
  <DialogueText center>
    {"A critical\nhit!"}
  </DialogueText>
</DialogueBox>
```

### Error Screen

```tsx
<DialogueBox showArrow={false}>
  <DialogueText center>
    {"It's not very\neffective..."}
  </DialogueText>
</DialogueBox>
```

### Game Over Screen

```tsx
<DialogueBox showArrow={true}>
  <DialogueText center>
    {"You're a true\nPokémon Master!"}
  </DialogueText>
</DialogueBox>
```

## Design Details

### Border Structure

The dialogue box uses a double-border technique:

1. **Outer border:** 3px solid black
2. **Inner border:** 2px solid black (via `::before` pseudo-element)
3. **Inset shadow:** Creates depth effect

This matches the exact styling from Pokémon Red/Blue/Yellow.

### Pixel Perfect Rendering

All borders and text use:
```css
image-rendering: pixelated;
image-rendering: -moz-crisp-edges;
image-rendering: crisp-edges;
```

### Typography

- Font: Press Start 2P
- Size: 0.75rem (mobile), 0.875rem (desktop)
- Line height: 1.8
- Letter spacing: 0.5px

## Best Practices

1. **Keep text concise** - Pokémon dialogues are short and punchy
2. **Use newlines** - Break text into readable chunks (max 3-4 words per line)
3. **UPPERCASE for emphasis** - Match the Pokémon style
4. **Show arrow for interactive boxes** - Indicates user can continue
5. **Center important messages** - Victory, defeat, instructions
6. **Left-align for dialogue** - Conversations, descriptions

## Accessibility

When using `onClick`:
- Component automatically adds `role="button"`
- Sets `tabIndex={0}` for keyboard navigation
- Consider adding keyboard event handlers for Enter/Space keys

## Performance

The component is lightweight:
- No heavy dependencies beyond Motion
- Minimal re-renders
- CSS-based animations (GPU accelerated)
- No images (pure CSS rendering)

## Browser Support

Works on all modern browsers that support:
- CSS Grid/Flexbox
- CSS Custom Properties
- `image-rendering: pixelated`
- Google Fonts (Press Start 2P)

## Related Components

- `StartScreen` - Uses DialogueBox for intro text
- `TopicSelection` - Uses DialogueBox for instructions
- `SuccessScreen` - Uses DialogueBox for victory message
- `ErrorScreen` - Uses DialogueBox for defeat message
- `GameOver` - Uses DialogueBox for final message

## Customization

While the component is designed to match Pokémon Gen 1, you can customize:

```tsx
// Custom styling
<DialogueBox className="my-custom-class">
  <DialogueText>Custom styled text</DialogueText>
</DialogueBox>
```

However, it's recommended to stick to the default styling to maintain the authentic retro aesthetic.
