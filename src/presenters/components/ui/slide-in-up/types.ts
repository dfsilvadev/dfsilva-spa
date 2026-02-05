import type { HTMLAttributes, ReactNode } from "react";

export type SlideInUpType = HTMLAttributes<HTMLSpanElement>;

export type SlideInUpDependencies = {
  children: ReactNode;
} & SlideInUpType;
