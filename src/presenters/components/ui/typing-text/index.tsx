import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { handleTypingTextOnScroll } from "./anim";

import "./styles.scss";

export type TypingTextDependencies = {
  children: React.ReactNode;
};

export default function TypingText({ children }: TypingTextDependencies) {
  const ctx = useRef<ReturnType<typeof handleTypingTextOnScroll> | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline.current = gsap.timeline();
    ctx.current = handleTypingTextOnScroll(typingRef.current, timeline.current);

    return () => {
      ctx.current?.revert();
    };
  }, []);

  return (
    <div ref={typingRef} className="typing-text">
      <div>{children}</div>
    </div>
  );
}
