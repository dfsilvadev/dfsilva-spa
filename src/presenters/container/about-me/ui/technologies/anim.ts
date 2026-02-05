import type { MouseEvent, RefObject } from "react";
import gsap from "gsap";

const THEME = {
  mainPrimary: "#3772ff",
  borderLight: "#f2f2f3",
  gray200: "#c7cfd9",
};

export type TechnologyCardContext = gsap.Context & {
  onEnter: (evt: MouseEvent<HTMLElement>) => void;
  onLeave: () => void;
};

export const handleOnHoverCard = (
  gridBoxRef: RefObject<HTMLDivElement | null>
): TechnologyCardContext => {
  return gsap.context((self) => {
    self.add("onEnter", (evt: MouseEvent<HTMLElement>) => {
      if (!gridBoxRef.current) return;

      const cards = Array.from(gridBoxRef.current.children) as HTMLElement[];
      const targetCard = evt.currentTarget as HTMLElement;
      const targetData = targetCard.getAttribute("data-technology");

      gsap.to(targetCard, {
        borderColor: THEME.mainPrimary,
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
      });

      gsap.to(targetCard.querySelector("svg"), {
        color: THEME.mainPrimary,
        duration: 0.3,
      });

      cards.forEach((card) => {
        if (
          card !== targetCard &&
          card.getAttribute("data-technology") !== targetData
        ) {
          gsap.to(card, { opacity: 0.35, duration: 0.3 });
        }
      });
    });

    self.add("onLeave", () => {
      if (!gridBoxRef.current) return;
      const cards = Array.from(gridBoxRef.current.children) as HTMLElement[];

      gsap.to(cards, {
        borderColor: THEME.borderLight,
        color: THEME.gray200,
        opacity: 1,
        duration: 0.3,
      });

      cards.forEach((card) => {
        gsap.to(card.querySelector("svg"), {
          color: THEME.gray200,
          duration: 0.3,
        });
      });
    });
  }) as TechnologyCardContext;
};
