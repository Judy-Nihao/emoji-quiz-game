import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { playConfirmSound } from "../utils/soundEffects";

interface BackButtonProps {
  onClick: () => void;
  className?: string;
}

export const BackButton = ({ onClick, className = "" }: BackButtonProps) => {
  const { t } = useTranslation();

  const handleClick = () => {
    playConfirmSound();
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      className={`gbc-button bg-black text-white leading-normal min-w-12 min-h-10 px-4 ${className}`}
    >
      <ArrowLeft size={12} className="mr-2 inline" />
      {t("common.back")}
    </Button>
  );
};
