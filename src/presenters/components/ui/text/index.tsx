import { type ForwardRefRenderFunction, forwardRef } from "react";

import type {
  TextColor,
  TextDependencies,
  TextSize,
  TextWeight,
} from "./types";

import "./styles.scss";

const DEFAULTS = {
  textColor: "default" as TextColor,
  size: "medium" as TextSize,
  weight: "regular" as TextWeight,
};

function buildTextClassName(props: {
  textColor?: TextColor;
  size?: TextSize;
  weight?: TextWeight;
}): string {
  const {
    textColor = DEFAULTS.textColor,
    size = DEFAULTS.size,
    weight = DEFAULTS.weight,
  } = props;
  return [
    "text",
    `text--color-${textColor}`,
    `text--size-${size}`,
    `text--weight-${weight}`,
  ].join(" ");
}

const Text: ForwardRefRenderFunction<HTMLParagraphElement, TextDependencies> = (
  {
    as: Component = "p",
    children,
    textColor = DEFAULTS.textColor,
    size = DEFAULTS.size,
    weight = DEFAULTS.weight,
    className,
    ...rest
  },
  ref
) => {
  const finalClassName = [
    buildTextClassName({ textColor, size, weight }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component ref={ref} className={finalClassName} {...rest}>
      {children}
    </Component>
  );
};

export default forwardRef(Text);
