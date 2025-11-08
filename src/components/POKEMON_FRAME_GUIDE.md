# Pokémon Frame Component Guide

## Overview
The `PokemonFrame` component replicates the classic Pokémon battle menu border design from Generation 1 games, featuring a double-border frame with decorative corner orbs.

## Features
- **Double Border**: Outer black border with inner white border
- **Corner Orbs**: Four circular decorations at each corner with pixel-perfect styling
- **Authentic Design**: Based on the iconic Pokémon battle menu from Game Boy Color era
- **Flexible**: Can wrap any content while maintaining the decorative frame

## Usage

```tsx
import { PokemonFrame } from "./components/PokemonFrame";

<PokemonFrame>
  <DialogueText>
    {"Hello there!\nWelcome to the\nworld of EMOJI!"}
  </DialogueText>
</PokemonFrame>
```

## Styling Details

### CSS Classes
- `.pokemon-menu-frame`: Main container with double border effect
- `.corner-orb-bl`: Bottom-left corner orb
- `.corner-orb-br`: Bottom-right corner orb
- `::before` and `::after` pseudo-elements for top corners

### Visual Structure
```
    ●――――――――――――――●
    ┃              ┃
    ┃   Content    ┃
    ┃              ┃
    ●――――――――――――――●
```

## Design Inspiration
Inspired by the battle menu UI from Pokémon Red/Blue/Yellow (Generation 1) featuring:
- Thick black outer border (4px)
- White inner border (3px spacing)
- Corner orbs with black fill and white ring
- Box-shadow for depth effect

## Components Using PokemonFrame
- `StartScreen.tsx` - Welcome message
- `TopicSelection.tsx` - Topic selection instructions
- `GameOver.tsx` - Final score message
- `SuccessScreen.tsx` - Correct answer feedback
- `ErrorScreen.tsx` - Wrong answer feedback

## Technical Notes
- The orbs are positioned absolutely with `z-index: 10` to overlay the border
- Top corners use pseudo-elements (::before, ::after)
- Bottom corners use actual child div elements
- All corner orbs are non-interactive (`pointer-events: none`)
