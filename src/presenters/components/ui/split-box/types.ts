import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type SplitBoxBorderColor = "black" | "light" | "none";

type SplitBoxElementProps =
  | HTMLAttributes<HTMLDivElement>
  | HTMLAttributes<HTMLSpanElement>;

export type SplitBoxContentStylesProps = {
  borderColor: SplitBoxBorderColor;
  alignY: "center" | "flex-end";
};

export type SplitBoxDependencies = {
  as?: ElementType;
  firstSplit: ReactNode;
  lastSplit: ReactNode;
  icon?: ReactNode;
  borderColor?: SplitBoxBorderColor;
  alignY?: "center" | "flex-end";
} & SplitBoxElementProps;
