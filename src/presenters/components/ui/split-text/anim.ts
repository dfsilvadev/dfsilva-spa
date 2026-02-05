import type { RefObject } from "react";
import gsap from "gsap";

export type SplitTextContext = gsap.Context & {
  onEnter: () => void;
  onLeave: () => void;
};

export const handleOnHoverSplitText = (
  splitElementRef: RefObject<HTMLDivElement | null>
): SplitTextContext => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power1.inOut",
          duration: 0.4,
        },
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
  }) as SplitTextContext;
};
