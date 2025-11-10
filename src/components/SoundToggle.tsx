import { useState } from "react";
import {
  toggleSound,
  isSoundEnabled,
  playCursorSound,
} from "../utils/soundEffects";

export const SoundToggle = () => {
  const [enabled, setEnabled] = useState(isSoundEnabled());

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    const newState = toggleSound();
    setEnabled(newState);
    // Only play sound if turning ON
    if (newState) {
      playCursorSound();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="gbc-button bg-white text-black p-2 min-w-12 min-h-10 hover:bg-gbc-light active:shadow-[inset_2px_2px_0_#8B9594] transition-all flex items-center justify-center"
      aria-label={enabled ? "Mute sound" : "Unmute sound"}
    >
      {enabled ? (
        // Speaker ON - pixel art style
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Speaker body */}
          <rect x="2" y="7" width="4" height="6" fill="currentColor" />
          {/* Speaker cone */}
          <path d="M6 7L6 13L11 16L11 4L6 7Z" fill="currentColor" />
          {/* Sound waves */}
          <rect x="13" y="6" width="2" height="2" fill="currentColor" />
          <rect x="13" y="12" width="2" height="2" fill="currentColor" />
          <rect x="15" y="4" width="2" height="2" fill="currentColor" />
          <rect x="15" y="14" width="2" height="2" fill="currentColor" />
          <rect x="17" y="8" width="2" height="4" fill="currentColor" />
        </svg>
      ) : (
        // Speaker OFF - pixel art style with X on the right
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Speaker body */}
          <rect x="2" y="7" width="4" height="6" fill="currentColor" />
          {/* Speaker cone */}
          <path d="M6 7L6 13L11 16L11 4L6 7Z" fill="currentColor" />
          {/* X mark on the right - pixel perfect */}
          {/* Top-left to bottom-right diagonal */}
          <rect x="14" y="6" width="2" height="2" fill="currentColor" />
          <rect x="16" y="8" width="2" height="2" fill="currentColor" />
          <rect x="18" y="10" width="2" height="2" fill="currentColor" />
          <rect x="20" y="12" width="2" height="2" fill="currentColor" />
          {/* Top-right to bottom-left diagonal */}
          <rect x="20" y="6" width="2" height="2" fill="currentColor" />
          <rect x="18" y="8" width="2" height="2" fill="currentColor" />
          <rect x="16" y="10" width="2" height="2" fill="currentColor" />
          <rect x="14" y="12" width="2" height="2" fill="currentColor" />
        </svg>
      )}
    </button>
  );
};
