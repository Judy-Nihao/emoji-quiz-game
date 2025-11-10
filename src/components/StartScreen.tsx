import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { DialogueBox, DialogueText } from "./DialogueBox";
import { PokemonFrame } from "./PokemonFrame";
import { SoundToggle } from "./SoundToggle";
import { playStartSound } from "../utils/soundEffects";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  const { t } = useTranslation();
  const handleStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    playStartSound();
    setTimeout(() => {
      onStart();
    }, 150);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-[#B4BFBE] h-app overflow-auto gbc-scanlines">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-[500px]"
      >
        {/* Main GBC-style window */}
        <div className="gbc-panel-outer-thick">
          <div className="gbc-window">
            {/* Title bar - GBC style */}
            <div className="gbc-header p-3 mb-1 relative flex items-center justify-center">
              <motion.h1
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-base md:text-2xl leading-loose tracking-[2px]"
              >
                {t("start_screen.title")}
              </motion.h1>

              {/* Sound toggle in top right */}
              <div className="absolute right-3">
                <SoundToggle />
              </div>
            </div>

            {/* Main content area */}
            <div className="gbc-content">
              {/* Mascot - pixelated emoji */}
              <div className="text-center mb-4">
                <div className="text-6xl md:text-7xl min-h-20 animate-float">
                  🤔
                </div>
              </div>

              {/* Game Logo - English title */}
              <div className="mb-6">
                <div className="game-title-container">
                  {/* English title */}
                  <div className="game-title-en-main">
                    {t("start_screen.game_title")}
                  </div>
                </div>
              </div>

              {/* Info box - Pokémon dialogue style with decorative frame */}
              <div className="mb-4">
                <PokemonFrame>
                  <DialogueText>
                    {t("start_screen.welcome_message")}
                  </DialogueText>
                </PokemonFrame>
              </div>

              {/* Start button - GBC menu style */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleStart}
                  className="w-full py-6 md:py-8 text-sm md:text-base relative gbc-button bg-black text-white leading-loose"
                >
                  <motion.span
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
                    </svg>
                    <span>{t("common.start")}</span>
                  </motion.span>
                </Button>
              </motion.div>

              {/* Prompt text - Simple hint */}
              <div className="text-center mt-4">
                <p className="text-[10px] leading-loose opacity-60">
                  {t("common.press_start")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
