import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Topic } from "../constants";
import { DialogueText } from "./DialogueBox";
import { PokemonFrame } from "./PokemonFrame";
import { SoundToggle } from "./SoundToggle";
import { playCursorSound, playConfirmSound } from "../utils/soundEffects";
import { BackButton } from "./BackButton";

interface TopicSelectionProps {
  topics: Topic[];
  onSelectTopic: (topicId: string) => void;
  onBack: () => void;
}

export const TopicSelection = ({
  topics,
  onSelectTopic,
  onBack,
}: TopicSelectionProps) => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (hoveredIndex !== index) {
      playCursorSound();
      setHoveredIndex(index);
    }
  };

  const handleSelect = (
    e: React.MouseEvent,
    topicId: string,
    index: number
  ) => {
    e.stopPropagation();
    setActiveIndex(index); // remember user's clicked option
    playConfirmSound();

    // Small delay to let sound play
    setTimeout(() => {
      onSelectTopic(topicId);
    }, 100);
  };

  const handleBackTo = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    playConfirmSound();
    setTimeout(() => onBack(), 100);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-[#B4BFBE] h-app overflow-auto gbc-scanlines">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-[500px]"
      >
        {/* Main window */}
        <div className="gbc-panel-outer-thick">
          <div className="gbc-window">
            {/* Header bar */}
            <div className="gbc-header px-3 py-8 mb-1 relative flex items-center justify-between">
              <h1 className="absolute left-0 right-0 text-center text-xs md:text-lg leading-loose pointer-events-none">
                {t("common.select")}
              </h1>
            </div>

            {/* Content */}
            <div className="gbc-content">
              {/* Instruction - Pokémon dialogue style with decorative frame */}
              <div className="mb-4">
                <PokemonFrame>
                  <DialogueText center>
                    {t("topic_selection.instruction")}
                  </DialogueText>
                </PokemonFrame>
              </div>

              {/* Topic menu - GBC style list */}
              <div className="space-y-3">
                {topics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={(e) => handleSelect(e, topic.id, index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      className="w-full text-left group gbc-button bg-white p-3 relative hover:bg-gbc-light transition-colors flex items-center justify-between"
                    >
                      {/* Selection arrow - Pokémon menu style */}
                      <motion.span
                        className={`absolute left-3 text-lg transition-opacity duration-200 ${
                          hoveredIndex === index || activeIndex === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      >
                        ▶
                      </motion.span>

                      <div className="flex items-center gap-3 ml-8 flex-1">
                        <div className="text-3xl md:text-4xl mb-2.5">
                          {topic.emoji}
                        </div>

                        <div className="flex-1">
                          <div className="bg-black text-white px-2 py-1 mb-1">
                            <h3 className="text-xs md:text-sm leading-normal">
                              {t(`topics.${topic.id}.name`).toUpperCase()}
                            </h3>
                          </div>

                          <p className="text-[10px] leading-normal text-[#8B9594]">
                            {t(`topics.${topic.id}.description`).toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Bottom buttons - BACK and Sound toggle */}
          <div className="mt-2 flex items-center justify-between">
            <BackButton onClick={onBack} />
            {/* Sound toggle */}
            <div className="">
              <SoundToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
