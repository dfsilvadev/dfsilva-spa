import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export type TypingTextContext = {
  revert: () => void;
};

export const handleTypingTextOnScroll = (
  element: HTMLElement | null,
  globalTimeline: gsap.core.Timeline
): TypingTextContext => {
  if (!element) {
    return { revert: () => {} };
  }

  const split = new SplitType(element, { types: "chars" });

  const tl = gsap
    .timeline({
      defaults: {
        ease: "power1.inOut",
        duration: 0.4,
      },
      scrollTrigger: {
        trigger: element,
        start: "top 75%",
        end: "top 60%",
        scrub: 1.5,
        anticipatePin: 1,
        onEnter: () => globalTimeline.add(tl),
      },
    })
    .fromTo(
      split.chars,
      { opacity: 0, x: "-5px" },
      {
        opacity: 1,
        x: "0px",
        duration: 0.02,
        ease: "power2.out",
        stagger: 0.01,
      }
    );

  return {
    revert: () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      split.revert();
    },
  };
};
