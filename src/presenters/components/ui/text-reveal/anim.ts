import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const handleOnTextReveal = (
  triggerElement: HTMLElement,
  letters: HTMLElement[]
) => {
  return gsap.context((self) => {
    gsap.set(letters, {
      backgroundPositionX: "100%",
    });

    const lines: HTMLElement[][] = [];
    let currentLineTop: number | null = null;
    let currentLine: HTMLElement[] = [];
    const THRESHOLD = 4;

    letters.forEach((letter) => {
      const { top } = letter.getBoundingClientRect();

      if (currentLineTop === null) {
        currentLineTop = top;
        currentLine.push(letter);
        return;
      }

      if (Math.abs(top - currentLineTop) <= THRESHOLD) {
        currentLine.push(letter);
      } else {
        lines.push(currentLine);
        currentLine = [letter];
        currentLineTop = top;
      }
    });

    if (currentLine.length) {
      lines.push(currentLine);
    }

    const tl = gsap.timeline({
      defaults: {
        ease: "expo.out",
        duration: 0.9,
      },
    });

    lines.forEach((lineLetters) => {
      tl.to(lineLetters, {
        backgroundPositionX: "0%",
        stagger: 0.045,
      });
    });

    const st = ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 85%",
      end: "bottom 15%",
      scrub: 0.8,
      animation: tl,
    });

    self.add("revert", () => {
      tl.kill();
      st.kill();
    });
  });
};
