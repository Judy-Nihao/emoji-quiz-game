import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DialogueBox, DialogueText } from "./DialogueBox";
import { PokemonFrame } from "./PokemonFrame";
import { playConfirmSound } from "../utils/soundEffects";

interface ErrorScreenProps {
  emoji: string;
  emojiName: string;
  isTimeout: boolean;
  onContinue: () => void;
}

export const ErrorScreen = ({
  emoji,
  emojiName,
  isTimeout,
  onContinue,
}: ErrorScreenProps) => {
  const { t } = useTranslation();
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEmoji(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation();
    playConfirmSound();
    setTimeout(() => {
      onContinue();
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex items-center justify-center z-50 p-4 cursor-pointer bg-black/70"
      onClick={handleContinue}
    >
      {/* GBC-style error window */}
      <motion.div
        className="w-full mx-4 gbc-panel-outer bg-[#E53935] max-w-quiz-card"
        animate={{ x: [-3, 3, -3, 3, 0] }}
        transition={{ duration: 0.3 }}
        style={{ padding: "4px" }}
      >
        <div className="bg-[#D4DEDD] border-[3px] border-black p-1 shadow-[inset_-2px_-2px_0_#8B0000,inset_2px_2px_0_#FFF]">
          {/* Header */}
          <div className="gbc-header p-3 mb-1">
            <h2 className="text-center text-sm md:text-lg leading-loose">
              {isTimeout
                ? t("error_screen.title_timeout")
                : t("error_screen.title_wrong")}
            </h2>
          </div>

          {/* Content */}
          <div className="gbc-content">
            {/* Message box - Pokémon dialogue style with decorative frame */}
            <PokemonFrame>
              <DialogueText center>
                {isTimeout
                  ? t("error_screen.message_timeout")
                  : t("error_screen.message_wrong")}
              </DialogueText>
            </PokemonFrame>

            {/* Emoji reveal */}
            <div className="perspective-1000">
              <motion.div
                className="relative mx-auto text-6xl md:text-7xl"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: showEmoji ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Front: silhouette */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="filter brightness-0 min-h-24 mt-4">
                    {emoji}
                  </div>
                </motion.div>

                {/* Back: revealed emoji */}
                <motion.div
                  className="flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <motion.div
                    className="min-h-24 mt-4"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    {emoji}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Emoji name label */}
            {showEmoji && (
              <div className="text-center mb-4">
                <p className="text-xs md:text-sm leading-loose">
                  {emojiName.toUpperCase()}
                </p>
              </div>
            )}

            {/* Continue prompt - Pokémon style with pixel border */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative"
            >
              {/* Outer frame - double border like the reference image */}
              <div className="border-[3px] border-black p-0.5">
                <div className="border-2 border-black bg-black p-3">
                  <p className="text-center text-white text-[10px] leading-loose flex items-center justify-center gap-2">
                    <span className="relative bottom-0.5">▶</span>
                    <span>{t("common.continue")}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
