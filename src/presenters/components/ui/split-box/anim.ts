import type { RefObject } from "react";
import gsap from "gsap";

// Cores alinhadas ao tema (_variables.scss) para uso em JS
const THEME = {
  mainPrimary: "#3772ff",
  white: "#fff",
};

export type SplitBoxContext = gsap.Context & {
  onEnter: () => void;
  onLeave: () => void;
};

export const handleOnHoverSplitBox = (
  gridBoxRef: RefObject<HTMLDivElement | null>,
  splitElementRef: RefObject<HTMLDivElement | null>
): SplitBoxContext => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power1.inOut",
          duration: 0.4,
        },
      })
      .to(gridBoxRef.current, {
        background: THEME.mainPrimary,
        color: THEME.white,
      })
      .to(
        splitElementRef.current?.children ?? [],
        {
          yPercent: -100,
          stagger: -0.05,
        },
        0
      );

    self.add("onEnter", () => {
      tl.play();
    });

    self.add("onLeave", () => {
      tl.reverse();
    });
  }) as SplitBoxContext;
};
