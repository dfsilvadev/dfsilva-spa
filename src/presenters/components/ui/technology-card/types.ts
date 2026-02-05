import type { HTMLAttributes, ReactNode } from "react";

export type TechnologyCardDependencies = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
