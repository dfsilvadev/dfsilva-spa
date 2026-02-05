import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { SplitBoxDependencies } from "./types";
import { handleOnHoverSplitBox } from "./anim";
import "./styles.scss";

const DEFAULTS = {
  borderColor: "none" as const,
  alignY: "center" as const,
};

function buildSplitBoxClassName(props: {
  borderColor?: SplitBoxDependencies["borderColor"];
  alignY?: SplitBoxDependencies["alignY"];
}): string {
  const { borderColor = DEFAULTS.borderColor, alignY = DEFAULTS.alignY } =
    props;
  const classes = [
    "split-box__content",
    `split-box__content--border-${borderColor}`,
    alignY === "flex-end" ? "split-box__content--align-end" : "",
  ].filter(Boolean);
  return classes.join(" ");
}

export default function SplitBox({
  firstSplit,
  lastSplit,
  icon,
  borderColor = DEFAULTS.borderColor,
  alignY = DEFAULTS.alignY,
  className,
  ...rest
}: SplitBoxDependencies) {
  const splitElementRef = useRef<HTMLDivElement>(null);
  const gridBoxRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<ReturnType<typeof handleOnHoverSplitBox> | null>(null);

  useGSAP(() => {
    ctx.current = handleOnHoverSplitBox(gridBoxRef, splitElementRef);
    return () => {
      ctx.current?.revert();
    };
  });

  const contentClassName = [
    buildSplitBoxClassName({ borderColor, alignY }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={gridBoxRef}
      className={contentClassName}
      onMouseEnter={() => ctx.current?.onEnter()}
      onMouseLeave={() => ctx.current?.onLeave()}
      {...rest}
    >
      <div className="split-box__splitter">
        <div className="split-box__overflow" ref={splitElementRef}>
          <span className="split-box__item">{firstSplit}</span>
          <span className="split-box__item">{lastSplit}</span>
        </div>
        {icon != null && <div className="split-box__icon-wrap">{icon}</div>}
      </div>
    </div>
  );
}
