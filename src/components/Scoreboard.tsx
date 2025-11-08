import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface ScoreboardProps {
  correct: number;
  wrong: number;
  current: number;
  total: number;
}

export const Scoreboard = ({ correct, wrong, current, total }: ScoreboardProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-1 w-full">
      {/* Correct count - GBC stats style */}
      <motion.div
        whileHover={{ y: -2 }}
        className="gbc-panel-outer-thin flex-1"
      >
        <div className="gbc-stat-box px-2 py-1">
          <div className="text-sm mb-0.5">
            ✓
          </div>
          <div className="text-[8px] mb-0.5 leading-none text-[#8B9594]">
            {t('scoreboard.ok')}
          </div>
          <div className="text-sm text-black">
            {correct}
          </div>
        </div>
      </motion.div>
      
      {/* Wrong count */}
      <motion.div
        whileHover={{ y: -2 }}
        className="gbc-panel-outer-thin flex-1"
      >
        <div className="gbc-stat-box px-2 py-1">
          <div className="text-sm mb-0.5">
            ✗
          </div>
          <div className="text-[8px] mb-0.5 leading-none text-[#8B9594]">
            {t('scoreboard.ng')}
          </div>
          <div className="text-sm text-black">
            {wrong}
          </div>
        </div>
      </motion.div>
      
      {/* Question progress */}
      <motion.div
        whileHover={{ y: -2 }}
        className="gbc-panel-outer-thin flex-1"
      >
        <div className="gbc-stat-box px-2 py-1">
          <div className="text-sm mb-0.5">
            #
          </div>
          <div className="text-[8px] mb-0.5 leading-none text-[#8B9594]">
            {t('scoreboard.no')}
          </div>
          <div className="text-sm text-black">
            {current}/{total}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
