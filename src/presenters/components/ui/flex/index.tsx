import { type ForwardRefRenderFunction, forwardRef } from "react";
import type { FlexDependencies, FlexType } from "./types";

import "./styles.scss";

const FLEX_DEFAULTS: Required<FlexType> = {
  display: "flex",
  direction: "row",
  align: "flex-start",
  justify: "flex-start",
  content: "stretch",
  wrap: "wrap",
  gap: "0",
};

function buildFlexClassName(props: FlexType): string {
  const {
    display = FLEX_DEFAULTS.display,
    direction = FLEX_DEFAULTS.direction,
    align = FLEX_DEFAULTS.align,
    justify = FLEX_DEFAULTS.justify,
    content = FLEX_DEFAULTS.content,
    wrap = FLEX_DEFAULTS.wrap,
  } = props;

  const classes = [
    "flex",
    `flex--display-${display}`,
    `flex--direction-${direction}`,
    `flex--align-${align}`,
    `flex--justify-${justify}`,
    `flex--content-${content}`,
    `flex--wrap-${wrap}`,
  ];

  return classes.join(" ");
}

const Flex: ForwardRefRenderFunction<HTMLDivElement, FlexDependencies> = (
  {
    children,
    display = FLEX_DEFAULTS.display,
    direction = FLEX_DEFAULTS.direction,
    align = FLEX_DEFAULTS.align,
    justify = FLEX_DEFAULTS.justify,
    content = FLEX_DEFAULTS.content,
    wrap = FLEX_DEFAULTS.wrap,
    gap = FLEX_DEFAULTS.gap,
    className,
    style,
    ...rest
  },
  ref
) => {
  const flexClassName = buildFlexClassName({
    display,
    direction,
    align,
    justify,
    content,
    wrap,
  });
  const finalClassName = [flexClassName, className].filter(Boolean).join(" ");
  const flexStyle =
    gap !== "0"
      ? ({ ...style, "--flex-gap": gap } as React.CSSProperties)
      : style;

  return (
    <div ref={ref} className={finalClassName} style={flexStyle} {...rest}>
      {children}
    </div>
  );
};

const FlexComponent = forwardRef(Flex);
export { FlexComponent };
export default FlexComponent;
