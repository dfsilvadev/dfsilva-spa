import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import type { TooltipColor, TooltipDependencies } from "./types";

import "./styles.scss";

const DEFAULT_COLOR: TooltipColor = "black";

export default function Tooltip({
  children,
  content,
  color = DEFAULT_COLOR,
}: TooltipDependencies) {
  const contentClassName = [
    "tooltip__content",
    `tooltip__content--${color}`,
  ].join(" ");

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className={contentClassName} sideOffset={5}>
            {content}
            <TooltipPrimitive.Arrow />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
