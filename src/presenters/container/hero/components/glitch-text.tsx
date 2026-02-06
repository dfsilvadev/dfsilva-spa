import { motion } from "framer-motion";

import type { ReactNode } from "react";

import {
  GLITCH_ANIMATION_CONFIG,
  GLITCH_OPACITY,
  GLITCH_OPACITY_OFF,
  GLITCH_X_LEFT,
  GLITCH_X_RIGHT,
} from "../constants";

type GlitchTextProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Reusable component that applies glitch effect to any text content
 * Uses the same animation configuration as loading-screen
 */
const GlitchText = ({ children, className }: GlitchTextProps) => {
  return (
    <div className={`hero__glitch-wrap ${className || ""}`}>
      <motion.div
        className="hero__glitch-text"
        animate={{ opacity: GLITCH_OPACITY }}
        transition={GLITCH_ANIMATION_CONFIG}
      >
        {children}
      </motion.div>

      <motion.div
        className="hero__glitch-text hero__glitch-text--cyan"
        animate={{
          x: GLITCH_X_LEFT,
          opacity: GLITCH_OPACITY_OFF,
        }}
        transition={GLITCH_ANIMATION_CONFIG}
      >
        {children}
      </motion.div>

      <motion.div
        className="hero__glitch-text hero__glitch-text--red"
        animate={{
          x: GLITCH_X_RIGHT,
          opacity: GLITCH_OPACITY_OFF,
        }}
        transition={GLITCH_ANIMATION_CONFIG}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GlitchText;
