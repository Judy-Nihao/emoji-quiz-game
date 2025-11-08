import { ReactNode } from "react";

interface PokemonFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Pokémon Battle Menu Style Decorative Frame
 * Features inward-curving corners like a picture frame 
 * and diamond-shaped ornamental spheres in each corner
 * with a distinct retro 8-bit pixel art aesthetic
 */
export const PokemonFrame = ({ children, className = "" }: PokemonFrameProps) => {
  return (
    <div className={`pokemon-menu-frame ${className}`}>
      {/* Top left diamond orb */}
      <div className="corner-diamond corner-diamond-tl" aria-hidden="true" />
      
      {/* Top right diamond orb */}
      <div className="corner-diamond corner-diamond-tr" aria-hidden="true" />
      
      {/* Bottom left diamond orb */}
      <div className="corner-diamond corner-diamond-bl" aria-hidden="true" />
      
      {/* Bottom right diamond orb */}
      <div className="corner-diamond corner-diamond-br" aria-hidden="true" />
      
      {/* Content */}
      {children}
    </div>
  );
};
