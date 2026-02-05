import type { ReactNode } from "react";

export type SectionHeadingContentProps = {
  hasBorder?: boolean;
};

export type SectionHeadingDependencies = {
  children: ReactNode;
} & SectionHeadingContentProps;
