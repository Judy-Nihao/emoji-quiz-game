import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { DialogueBox, DialogueText } from "./DialogueBox";
import { PokemonFrame } from "./PokemonFrame";
import { SoundToggle } from "./SoundToggle";
import { playConfirmSound } from "../utils/soundEffects";

interface GameOverProps {
  correct: number;
  wrong: number;
  total: number;
  onRestart: () => void;
  topicName?: string;
  topicEmoji?: string;
}

export const GameOver = ({
  correct,
  wrong,
  total,
  onRestart,
  topicName,
  topicEmoji,
}: GameOverProps) => {
  const { t } = useTranslation();
  const percentage = Math.round((correct / total) * 100);
  const isPerfect = correct === total;
  const isGood = percentage >= 70;

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    playConfirmSound();
    setTimeout(() => {
      onRestart();
    }, 100);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-[#B4BFBE] h-app overflow-auto gbc-scanlines">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-quiz-card"
      >
        {/* Results window */}
        <div className="gbc-panel-outer-thick">
          <div className="gbc-window">
            {/* Header */}
            <div className="gbc-header p-3 mb-1 relative flex items-center justify-center">
              <h1 className="text-center text-base md:text-xl leading-loose">
                {isPerfect
                  ? t("game_over.title_perfect")
                  : isGood
                    ? t("game_over.title_great")
                    : t("game_over.title_complete")}
              </h1>

              {/* Sound toggle */}
              <div className="absolute right-3">
                <SoundToggle />
              </div>
            </div>

            {/* Content */}
            <div className="gbc-content">
              {/* Trophy - centered */}
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-6xl md:text-7xl"
                >
                  {isPerfect ? "🏆" : isGood ? "⭐" : "🎮"}
                </motion.div>
              </div>

              {/* Topic info - title style without button appearance */}
              {topicName && topicEmoji && (
                <div className="mb-4 flex items-center justify-center gap-2">
                  <p className="text-3xl relative bottom-1">{topicEmoji}</p>
                  <p className="text-sm text-black text-nowrap whitespace-nowrap">
                    {topicName.toUpperCase()}
                  </p>
                </div>
              )}

              {/* Message - Pokémon dialogue style with decorative frame */}
              <div className="mb-4">
                <PokemonFrame>
                  <DialogueText center>
                    {isPerfect
                      ? t("game_over.message_perfect")
                      : isGood
                        ? t("game_over.message_great")
                        : t("game_over.message_complete")}
                  </DialogueText>
                </PokemonFrame>
              </div>

              {/* Score display - GBC stats style */}
              <div className="gbc-inner-subtle px-5 py-3   mb-4">
                <div className="text-center mb-3">
                  <p className="text-2xs leading-4 text-gray-400 text-nowrap whitespace-pre">
                    {t("game_over.final_score")}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-black">
                  <div className="flex justify-between items-center h-6">
                    <span>{t("scoreboard.ok")}</span>
                    <div className="bg-green-500 text-white w-16 h-6 border-2 border-black flex items-center justify-center">
                      {correct}
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center h-6 9">
                    <span>{t("scoreboard.ng")}</span>
                    <div className="bg-red-500 text-white w-16 h-6 border-2 border-black flex items-center justify-center">
                      {wrong}
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center h-6 9">
                    <span>{t("game_over.rate")}</span>
                    <div className="bg-black text-white w-16 h-6 border-2 border-black flex items-center justify-center">
                      {percentage}%
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className={`text-[30px] leading-9 ${
                        i < Math.round(percentage / 20)
                          ? "opacity-100"
                          : "opacity-20"
                      }`}
                    >
                      ★
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Retry button */}
              <Button
                onClick={handleRestart}
                className="w-full py-6 md:py-8 text-xs md:text-sm gbc-button bg-black text-white leading-loose"
              >
                {t("common.play_again")}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
