import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SplitTextElementProps =
  | HTMLAttributes<HTMLDivElement>
  | HTMLAttributes<HTMLSpanElement>;

export type SplitTextDependencies = {
  as?: ElementType;
  firstSplit: ReactNode;
  lastSplit: ReactNode;
} & SplitTextElementProps;
