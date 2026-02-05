import type { HTMLAttributes, ReactNode } from "react";

export type LogoColor = "primary" | "secondary" | "light" | "dark";
export type LogoSize = "sm" | "md" | "lg";

export type LogoDependencies = {
  children?: ReactNode;
  color?: LogoColor;
  size?: LogoSize;
} & HTMLAttributes<HTMLDivElement>;
