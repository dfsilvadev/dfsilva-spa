import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let sequenceQueue: Promise<void> = Promise.resolve();

export const handleOnTextReveal = (
  triggerElement: HTMLElement,
  letters: HTMLElement[]
) => {
  return gsap.context((self) => {
    const tl = gsap.timeline({ paused: true });
    let isAnimating = false;
    let isCompleted = false;
    let pendingAction: "play" | "reverse" | null = null;

    const enqueuePlay = () => {
      if (isAnimating || isCompleted) {
        pendingAction = null;
        return;
      }
      isAnimating = true;
      pendingAction = "play";
      sequenceQueue = sequenceQueue.then(
        () =>
          new Promise<void>((resolve) => {
            tl.eventCallback("onComplete", () => {
              isAnimating = false;
              isCompleted = true;
              const next = pendingAction;
              pendingAction = null;
              resolve();
              if (next === "reverse") {
                enqueueReverse();
              }
            });
            tl.play(0);
          })
      );
    };

    const enqueueReverse = () => {
      if (isAnimating || !isCompleted) {
        pendingAction = "reverse";
        return;
      }
      isAnimating = true;
      pendingAction = "reverse";
      sequenceQueue = sequenceQueue.then(
        () =>
          new Promise<void>((resolve) => {
            reverseTl.eventCallback("onComplete", () => {
              isAnimating = false;
              isCompleted = false;
              const next = pendingAction;
              pendingAction = null;
              resolve();
              if (next === "play") {
                enqueuePlay();
              }
            });
            reverseTl.play(0);
          })
      );
    };

    letters.forEach((element, index) => {
      tl.to(
        element,
        {
          backgroundPositionX: "0%",
          ease: "power2.inOut",
          duration: 0.6,
        },
        index === 0 ? 0 : "+=0.05"
      );
    });

    const reverseTl = gsap.timeline({ paused: true });
    letters.forEach((element) => {
      reverseTl.to(
        element,
        {
          backgroundPositionX: "100%",
          ease: "power2.inOut",
          duration: 0.3,
        },
        0
      );
    });

    const st = ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 90%",
      end: "bottom 10%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress > 0.1 && !isCompleted) {
          if (!isAnimating) {
            enqueuePlay();
          }
        } else if (progress < 0.1 && isCompleted) {
          if (!isAnimating) {
            enqueueReverse();
          }
        }
      },
    });

    self.add("revert", () => {
      tl.kill();
      reverseTl.kill();
      st.kill();
    });
  });
};
