import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import Flex from "../flex";

import { handleOnTextReveal } from "./anim";

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
  const ctx = useRef<ReturnType<typeof handleOnTextReveal> | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const container = triggerRef.current;
      const letters = container
        ? Array.from(
            container.querySelectorAll<HTMLElement>(
              "[data-animation='trigger']"
            )
          )
        : [];
      if (container && letters.length > 0) {
        ctx.current = handleOnTextReveal(container, letters);
      }
    }, 1);

    return () => {
      clearTimeout(timer);
      ctx.current?.revert();
    };
  }, []);

  return (
    <Flex
      ref={triggerRef}
      align="center"
      className={className}
      style={style}
      data-trigger="reveal"
    >
      {children}
    </Flex>
  );
}
