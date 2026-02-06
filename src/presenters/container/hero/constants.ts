import { NextIcon, NodeIcon, ReactIcon } from "../../assets/images/svg/icons";

/**
 * Glitch animation constants
 * Shared with loading-screen component
 */
export const GLITCH_TIMES = [0, 0.1, 0.12, 0.3, 0.32, 0.5, 0.52, 0.7, 0.85, 1];
export const GLITCH_OPACITY = [1, 0.8, 1, 0.9, 1, 0.7, 1, 1, 0.85, 1];
export const GLITCH_OPACITY_OFF = [0, 0.8, 0, 0.6, 0, 0.7, 0, 0, 0.5, 0];
export const GLITCH_X_LEFT = [0, -3, 0, 2, 0, -2, 0, 0, 1, 0];
export const GLITCH_X_RIGHT = [0, 3, 0, -2, 0, 2, 0, 0, -1, 0];

export const GLITCH_ANIMATION_CONFIG = {
  duration: 3,
  repeat: Infinity,
  times: GLITCH_TIMES,
} as const;

export const HERO_TITLES = {
  senior: "Sênior",
  frontend: "Frontend",
  developer: "Developer",
} as const;

export type TechItem = {
  name: string;
  Icon: typeof ReactIcon;
};

export const TECH_STACK: TechItem[] = [
  { name: "React", Icon: ReactIcon },
  { name: "Next", Icon: NextIcon },
  { name: "Node", Icon: NodeIcon },
];

export const ICON_COLOR = "#fff";
