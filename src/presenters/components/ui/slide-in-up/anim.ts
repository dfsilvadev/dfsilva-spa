import gsap from "gsap";

export type SlideInUpContext = gsap.Context & {
  onInit: () => void;
};

export const handleSlideIn = (
  slideInUpContentList: NodeListOf<Element>
): SlideInUpContext => {
  const list = gsap.utils.toArray(slideInUpContentList);

  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: "power1.inOut",
          duration: 0.5,
          delay: 0.1,
          stagger: {
            amount: 0.3,
          },
        },
      })
      .fromTo(
        list,
        {
          yPercent: 170,
          skewY: 2,
          opacity: 0,
        },
        {
          yPercent: 0,
          skewY: 0,
          opacity: 1,
        },
        0.1
      );

    self.add("onInit", () => {
      tl.play();
    });
  }) as SlideInUpContext;
};
