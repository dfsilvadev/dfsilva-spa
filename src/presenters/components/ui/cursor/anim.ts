import gsap from "gsap";
import type { RefObject } from "react";

export type CursorAnimationContext = gsap.Context & {
  onEnter: () => void;
  onLeave: () => void;
};

export const cursorMouseAnimation = (
  polygonCursorRef: RefObject<HTMLDivElement | null>
): CursorAnimationContext => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power1.easeInOut",
          duration: 0.4,
        },
      })
      .to(polygonCursorRef.current, {
        scale: 2,
        borderColor: "#3772FF",
      });
    self.add("onEnter", () => {
      tl.play();
    });

    self.add("onLeave", () => {
      tl.reverse();
    });
  }) as CursorAnimationContext;
};

export const viewAllCursorAnimation = (
  viewAllCursorRef: RefObject<HTMLDivElement | null>,
  polygonCursorRef: RefObject<HTMLDivElement | null>,
  cursorRef: RefObject<HTMLDivElement | null>
): CursorAnimationContext => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power1.easeInOut",
          duration: 0.15,
        },
      })
      .to(cursorRef.current, {
        mixBlendMode: "normal",
      })
      .to(viewAllCursorRef.current, {
        scale: 1,
        opacity: 1,
        display: "flex",
      })
      .to(polygonCursorRef.current, {
        scale: 0,
        opacity: 0,
        display: "none",
      });
    self.add("onEnter", () => {
      tl.play();
    });

    self.add("onLeave", () => {
      tl.reverse();
    });
  }) as CursorAnimationContext;
};

export const onMouseMove = (
  evt: globalThis.MouseEvent,
  cursorRef: RefObject<HTMLDivElement | null>
) => {
  const { clientX, clientY } = evt;
  gsap.to(cursorRef.current, {
    x: clientX,
    y: clientY,
  });
};
