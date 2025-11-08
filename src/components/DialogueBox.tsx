import { motion } from "motion/react";
import { ReactNode } from "react";

interface DialogueBoxProps {
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Pokémon Gen 1 style dialogue box component
 * Replicates the classic 8-bit pixel art dialogue boxes from Game Boy era
 */
export const DialogueBox = ({ 
  children, 
  showArrow = false, 
  className = "",
  onClick 
}: DialogueBoxProps) => {
  return (
    <div 
      className={`gbc-dialogue-box ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Main dialogue content */}
      <div className="relative">
        {children}
        
        {/* Pixel arrow indicator (like Pokémon text advancement) */}
        {showArrow && (
          <motion.div
            className="absolute bottom-2 right-2 text-gbc-black"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              className="pixelated-icon"
            >
              {/* Pixel-perfect downward triangle (Pokémon style) */}
              <rect x="0" y="0" width="2" height="2" fill="currentColor"/>
              <rect x="2" y="2" width="2" height="2" fill="currentColor"/>
              <rect x="4" y="4" width="2" height="2" fill="currentColor"/>
              <rect x="6" y="6" width="2" height="2" fill="currentColor"/>
              <rect x="8" y="4" width="2" height="2" fill="currentColor"/>
              <rect x="10" y="2" width="2" height="2" fill="currentColor"/>
              <rect x="10" y="0" width="2" height="2" fill="currentColor"/>
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
};

interface DialogueTextProps {
  children: ReactNode;
  center?: boolean;
}

/**
 * Text component for dialogue boxes with proper pixel font styling
 */
export const DialogueText = ({ children, center = false }: DialogueTextProps) => {
  // Handle newline characters for proper text display
  const renderText = () => {
    if (typeof children === 'string') {
      return children.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < children.split('\n').length - 1 && <br />}
        </span>
      ));
    }
    return children;
  };

  return (
    <p className={`dialogue-text ${center ? 'text-center' : ''}`}>
      {renderText()}
    </p>
  );
};
