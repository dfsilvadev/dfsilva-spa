import type { ReactNode } from "react";

export type TooltipColor = "black" | "white";

export type TooltipDependencies = {
  children: ReactNode;
  content: string;
  color?: TooltipColor;
};
