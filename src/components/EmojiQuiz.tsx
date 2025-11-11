import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { playCursorSound, playConfirmSound } from "../utils/soundEffects";

interface EmojiQuizProps {
  emoji: string;
  options: string[];
  onAnswer: (answer: string) => void;
  disabled: boolean;
}

export const EmojiQuiz = ({
  emoji,
  options,
  onAnswer,
  disabled,
}: EmojiQuizProps) => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Reset hovered and active index when emoji (new question) changes
  useEffect(() => {
    setHoveredIndex(null);
    setActiveIndex(null);
  }, [emoji]);

  const handleMouseEnter = (index: number) => {
    if (hoveredIndex !== index && !disabled) {
      playCursorSound();
      setHoveredIndex(index);
    }
  };

  const handleAnswer = (e: React.MouseEvent, option: string, index: number) => {
    if (!disabled) {
      e.stopPropagation();
      setActiveIndex(index); // remember user's clicked option
      playConfirmSound();
      setTimeout(() => {
        onAnswer(option);
      }, 100);
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Question display - GBC battle screen style */}
        <div className="gbc-panel-outer-thick mb-3">
          <div className="gbc-window">
            {/* Header */}
            <div className="gbc-header py-2 px-1.5 mb-1">
              <h2 className="text-center text-xs md:text-sm leading-snug">
                {t("game.who_am_i")}
              </h2>
            </div>

            {/* Silhouette display */}
            <div className="gbc-content p-2">
              <div className="relative flex items-center justify-around">
                {/* Question marks - pixel style */}
                <div className="text-2xl md:text-3xl text-black">?</div>
                {/* Silhouette */}
                <div
                  key={emoji}
                  className="text-6xl md:text-8xl min-h-20 md:min-h-28 filter brightness-0 animate-pulseScale"
                >
                  {emoji}
                </div>

                {/* Question marks - pixel style */}

                <div className="text-2xl md:text-3xl text-black">?</div>
              </div>
            </div>

            {/* Prompt - Pokémon battle style */}
            <div className="bg-black text-white p-2 mt-1 border-2 border-black">
              <p className="text-center text-[10px] md:text-xs leading-snug">
                {t("game.wild_emoji")}
              </p>
            </div>
          </div>
        </div>

        {/* Answer menu - GBC battle menu style */}
        <div className="gbc-panel-outer-thick">
          <div className="gbc-content p-1.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
              {options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Button
                    onClick={(e) => handleAnswer(e, option, index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    disabled={disabled}
                    className="text-left py-5 group relative gbc-button text-xs bg-white text-black hover:bg-gbc-light transition-colors flex items-center justify-start w-full"
                  >
                    {/* Arrow indicator - Pokémon menu style */}
                    <motion.span
                      className={`text-xs mb-1.5 ${
                        hoveredIndex === index || activeIndex === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      ▶
                    </motion.span>

                    <div className="break-all leading-5">
                      {option.toUpperCase()}
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
