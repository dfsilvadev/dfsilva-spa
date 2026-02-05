import { type ForwardRefRenderFunction, forwardRef } from "react";
import type {
  HeadingColor,
  HeadingDependencies,
  HeadingSize,
  HeadingWeight,
} from "./types";
import "./styles.scss";

const DEFAULTS = {
  textColor: "default" as HeadingColor,
  size: "small" as HeadingSize,
  weight: "semibold" as HeadingWeight,
};

function buildHeadingClassName(props: {
  textColor?: HeadingColor;
  size?: HeadingSize;
  weight?: HeadingWeight;
}): string {
  const {
    textColor = DEFAULTS.textColor,
    size = DEFAULTS.size,
    weight = DEFAULTS.weight,
  } = props;

  return [
    "heading",
    `heading--color-${textColor}`,
    `heading--size-${size}`,
    `heading--weight-${weight}`,
  ].join(" ");
}

const Heading: ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingDependencies
> = (
  {
    as: Component = "h1",
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
    buildHeadingClassName({ textColor, size, weight }),
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

const HeadingWithRef = forwardRef(Heading);
export { HeadingWithRef as Heading };
export default HeadingWithRef;
