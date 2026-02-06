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
        delay: 4.5,
        defaults: {
          ease: "power3.out",
          duration: 1.1,
          stagger: {
            amount: 0.5,
          },
        },
      })
      .fromTo(
        list,
        {
          yPercent: 120,
          skewY: 1,
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
