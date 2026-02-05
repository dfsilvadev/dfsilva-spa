import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { SplitTextDependencies } from "./types";
import { handleOnHoverSplitText } from "./anim";
import "./styles.scss";

export default function SplitText({
  firstSplit,
  lastSplit,
  className,
  ...rest
}: SplitTextDependencies) {
  const splitElementRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<ReturnType<typeof handleOnHoverSplitText> | null>(null);

  useGSAP(() => {
    ctx.current = handleOnHoverSplitText(splitElementRef);
    return () => {
      ctx.current?.revert();
    };
  });

  const splitterClassName = ["split-text__splitter", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={splitterClassName}>
      <div
        ref={splitElementRef}
        className="split-text__overflow"
        onMouseEnter={() => ctx.current?.onEnter()}
        onMouseLeave={() => ctx.current?.onLeave()}
        {...rest}
      >
        <span className="split-text__item">{firstSplit}</span>
        <span className="split-text__item">{lastSplit}</span>
      </div>
    </div>
  );
}
