import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type HeadingColor = "white" | "default" | "gray";
export type HeadingSize = "small" | "regular" | "large" | "huge";
export type HeadingWeight = "regular" | "medium" | "semibold";

export type HeadingDependencies = {
  as?: ElementType;
  children: ReactNode;
  textColor?: HeadingColor;
  size?: HeadingSize;
  weight?: HeadingWeight;
} & HTMLAttributes<HTMLHeadingElement>;
