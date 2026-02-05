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
    const links = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");
    const viewAllContentList = document.querySelectorAll(
      "[data-content='view-all']"
    );

    cursorCtx.current = cursorMouseAnimation(polygonCursorRef);
    viewAllCtx.current = viewAllCursorAnimation(
      viewAllCursorRef,
      polygonCursorRef,
      cursorRef
    );

    const handleMouseMove = (evt: MouseEvent) => onMouseMove(evt, cursorRef);

    document.addEventListener("mousemove", handleMouseMove);

    viewAllContentList.forEach((content) => {
      content.addEventListener("mouseenter", () =>
        viewAllCtx.current?.onEnter()
      );
      content.addEventListener("mouseleave", () =>
        viewAllCtx.current?.onLeave()
      );
    });

    links?.forEach((link) => {
      link.addEventListener("mouseenter", () => cursorCtx.current?.onEnter());
      link.addEventListener("mouseleave", () => cursorCtx.current?.onLeave());
    });

    buttons?.forEach((button) => {
      button.addEventListener("mouseenter", () => cursorCtx.current?.onEnter());
      button.addEventListener("mouseleave", () => cursorCtx.current?.onLeave());
    });

    return () => {
      cursorCtx.current?.revert();
      viewAllCtx.current?.revert();
      document.removeEventListener("mousemove", handleMouseMove);
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
