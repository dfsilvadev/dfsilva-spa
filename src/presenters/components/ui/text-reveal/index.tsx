import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useRef } from "react";

import Flex from "../flex";

import "./styles.scss";

export type TextRevealDependencies = {
  children: React.ReactNode;
};

export default function TextReveal({
  children,
  className,
  style,
}: TextRevealDependencies &
  Pick<React.HTMLAttributes<HTMLDivElement>, "className" | "style">) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const container = triggerRef.current;
    if (!container) return;

    const split = new SplitText(
      container.querySelectorAll(":is(h1, h2, h3, h4, h5, h6, p)"),
      {
        type: "lines",
      }
    );

    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        // Easing e tempo mais suaves para um movimento mais natural
        ease: "power2.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: target,
          // scrub ligeiramente desacoplado para suavizar o movimento
          scrub: 0.7,
          // janela maior para a animação acontecer de forma mais gradual
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    });
  }, []);

  const mergedClassName = ["text-reveal__trigger", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Flex
      ref={triggerRef}
      align="center"
      className={mergedClassName}
      style={style}
    >
      {children}
    </Flex>
  );
}
