import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DialogueBox, DialogueText } from "./DialogueBox";
import { PokemonFrame } from "./PokemonFrame";
import { playConfirmSound } from "../utils/soundEffects";

interface SuccessScreenProps {
  emoji: string;
  onContinue: () => void;
}

export const SuccessScreen = ({ emoji, onContinue }: SuccessScreenProps) => {
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
      {/* GBC-style success window */}
      <motion.div
        className="max-w-md w-full mx-4 gbc-panel-outer bg-[#4CAF50]"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.4 }}
        style={{ padding: "4px" }}
      >
        <div className="bg-[#D4DEDD] border-[3px] border-black p-1 shadow-[inset_-2px_-2px_0_#306230,inset_2px_2px_0_#FFF]">
          {/* Header */}
          <div className="gbc-header p-3 mb-1">
            <motion.h2
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-center text-sm md:text-lg leading-loose"
            >
              {t("success_screen.title")}
            </motion.h2>
          </div>

          {/* Content */}
          <div className="gbc-content">
            {/* Message box - Pokémon dialogue style with decorative frame */}
            <div className="mb-4">
              <PokemonFrame>
                <DialogueText center>
                  {t("success_screen.message")}
                </DialogueText>
              </PokemonFrame>
            </div>

            {/* Emoji reveal with simple flip */}
            <div className="mb-4 perspective-1000">
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
                  <div className="filter brightness-0 min-h-20">{emoji}</div>
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
                    className="min-h-20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

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
