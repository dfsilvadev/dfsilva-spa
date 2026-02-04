import type { HTMLAttributes, ReactNode } from "react";

export type GridProps = {
  borderColor?: "black" | "light";
  hasDivider?: boolean;
};

export type GridDependencies = {
  children?: ReactNode;
} & GridProps &
  HTMLAttributes<HTMLDivElement>;
