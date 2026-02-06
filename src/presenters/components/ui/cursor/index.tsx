import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  cursorMouseAnimation,
  onMouseMove,
  viewAllCursorAnimation,
  type CursorAnimationContext,
} from "./anim";
import "./styles.scss";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const polygonCursorRef = useRef<HTMLDivElement>(null);
  const viewAllCursorRef = useRef<HTMLDivElement>(null);
  const cursorCtx = useRef<CursorAnimationContext | null>(null);
  const viewAllCtx = useRef<CursorAnimationContext | null>(null);

  useGSAP(() => {
    cursorCtx.current = cursorMouseAnimation(polygonCursorRef);
    viewAllCtx.current = viewAllCursorAnimation(
      viewAllCursorRef,
      polygonCursorRef,
      cursorRef
    );

    let currentHoveredElement: HTMLElement | null = null;

    const handleMouseMove = (evt: MouseEvent) => {
      onMouseMove(evt, cursorRef);

      const element = document.elementFromPoint(
        evt.clientX,
        evt.clientY
      ) as HTMLElement | null;

      if (!element) {
        if (currentHoveredElement) {
          if (currentHoveredElement.closest("[data-content='view-all']")) {
            viewAllCtx.current?.onLeave();
          } else {
            cursorCtx.current?.onLeave();
          }
          currentHoveredElement = null;
        }
        return;
      }

      const link = element.closest("a");
      const button = element.closest("button");
      const viewAll = element.closest("[data-content='view-all']");

      const targetElement = viewAll || link || button;

      if (targetElement && targetElement !== currentHoveredElement) {
        if (currentHoveredElement) {
          if (currentHoveredElement.closest("[data-content='view-all']")) {
            viewAllCtx.current?.onLeave();
          } else {
            cursorCtx.current?.onLeave();
          }
        }

        if (viewAll) {
          viewAllCtx.current?.onEnter();
        } else if (link || button) {
          cursorCtx.current?.onEnter();
        }

        currentHoveredElement = targetElement as HTMLElement;
      } else if (!targetElement && currentHoveredElement) {
        if (currentHoveredElement.closest("[data-content='view-all']")) {
          viewAllCtx.current?.onLeave();
        } else {
          cursorCtx.current?.onLeave();
        }
        currentHoveredElement = null;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cursorCtx.current?.revert();
      viewAllCtx.current?.revert();
    };
  });

  return (
    <div ref={cursorRef} className="cursor">
      <div ref={viewAllCursorRef} className="cursor-view-all">
        <span>saiba mais</span>
      </div>
      <div ref={polygonCursorRef} className="cursor-polygon" />
    </div>
  );
};

export default Cursor;
