import type {
  AnchorHTMLAttributes,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

export type TextColor = "white" | "default" | "gray";
export type TextSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type TextWeight = "regular" | "medium" | "semibold";

type TextElementProps =
  | HTMLAttributes<HTMLParagraphElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | HTMLAttributes<HTMLDivElement>
  | HTMLAttributes<HTMLSpanElement>
  | HTMLAttributes<HTMLElement>;

export type TextDependencies = {
  as?: ElementType;
  children: ReactNode;
  textColor?: TextColor;
  size?: TextSize;
  weight?: TextWeight;
} & TextElementProps;
