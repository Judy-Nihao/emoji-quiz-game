import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

interface ScoreboardProps {
  correct: number;
  wrong: number;
  current: number;
  total: number;
}

export const Scoreboard = ({
  correct,
  wrong,
  current,
  total,
}: ScoreboardProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-1 w-full">
      {/* Correct count - GBC stats style */}
      <motion.div whileHover={{ y: -2 }} className="flex-1 text-center">
        <div className="py-2">
          <div className="text-sm text-black">
            {t("scoreboard.ok")}:
            <span className="text-green-700">{correct}</span>
          </div>
        </div>
      </motion.div>

      {/* Wrong count */}
      <motion.div whileHover={{ y: -2 }} className="flex-1 text-center">
        <div className="py-2">
          <div className="text-sm text-black">
            {t("scoreboard.ng")}:<span className="text-red-700">{wrong}</span>
          </div>
        </div>
      </motion.div>

      {/* Question progress */}
      <motion.div whileHover={{ y: -2 }} className="flex-1 text-center">
        <div className="py-2">
          <div className="text-sm text-black">
            {current}/{total}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
