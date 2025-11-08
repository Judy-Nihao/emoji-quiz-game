# I18n Implementation Guide

## Overview
Complete internationalization (i18n) implementation for the Emoji Quiz game using react-i18next.

## Installation Required

```bash
npm install i18next react-i18next
```

## Files Created

### 1. `/src/i18n/en.json` - English Translation File
Contains all user-facing strings organized by component/section:
- `common`: Shared strings (START, BACK, CONTINUE, etc.)
- `start_screen`: Start screen specific strings
- `topic_selection`: Topic selection screen strings
- `topics`: Topic names and descriptions
- `game`: In-game strings
- `scoreboard`: Score display labels
- `success_screen`: Success feedback messages
- `error_screen`: Error feedback messages
- `game_over`: Game completion messages

### 2. `/src/i18n/index.ts` - I18n Configuration
Initializes i18next with:
- English as default language
- react-i18next integration
- Proper fallback configuration

## Files Updated

### Core Files
- `/App.tsx` - Added i18n import and useTranslation hook
- `/components/StartScreen.tsx` - Replaced hardcoded strings with t() function
- `/components/TopicSelection.tsx` - Internationalized topic selection
- `/components/EmojiQuiz.tsx` - Internationalized quiz interface
- `/components/Scoreboard.tsx` - Internationalized score labels
- `/components/SuccessScreen.tsx` - Internationalized success messages
- `/components/ErrorScreen.tsx` - Internationalized error messages
- `/components/GameOver.tsx` - Internationalized game over screen

## Usage Pattern

All components now follow this pattern:

```typescript
import { useTranslation } from 'react-i18next';

export const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <button>{t('common.start')}</button>
    </div>
  );
};
```

## Adding New Languages

To add a new language (e.g., Chinese):

1. Create `/src/i18n/zh.json` with the same structure as `en.json`
2. Update `/src/i18n/index.ts`:

```typescript
import zh from './zh.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },  // Add new language
  },
  lng: 'en', // Change default if needed
  fallbackLng: 'en',
  // ...
});
```

## Translation Keys Reference

### Common
- `common.start` - "START"
- `common.back` - "BACK"
- `common.continue` - "CONTINUE"
- `common.play_again` - "PLAY AGAIN"
- `common.press_start` - "PRESS START"
- `common.topic` - "TOPIC"
- `common.select` - "SELECT"

### Topics
- `topics.animals.name` - "Animals"
- `topics.animals.description` - "Guess the animal emojis"
- `topics.food.name` - "Food & Drinks"
- `topics.food.description` - "Guess the food emojis"
- `topics.transportation.name` - "Transportation"
- `topics.transportation.description` - "Guess the vehicle emojis"

### Game Screens
- `game.who_am_i` - "WHO AM I?"
- `game.wild_emoji` - "A wild EMOJI appeared!"
- `success_screen.title` - "CORRECT!"
- `success_screen.message` - "A critical\nhit!"
- `error_screen.title_wrong` - "WRONG!"
- `error_screen.title_timeout` - "TIME UP!"
- `game_over.title_perfect` - "PERFECT!"
- `game_over.final_score` - "FINAL SCORE"

## Benefits

1. **Centralized String Management**: All text in one place
2. **Easy Language Addition**: Create new JSON file, no code changes
3. **Maintainability**: Update text without touching components
4. **Type Safety**: TypeScript autocomplete for translation keys
5. **Future-Proof**: Ready for multilingual support

## Status

✅ All core components internationalized
✅ English translation file complete
✅ i18n configuration initialized
✅ No hardcoded user-facing strings remain

## Next Steps

To support additional languages, simply create language-specific JSON files following the `en.json` structure.
