import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type PropsWithChildren, useRef } from "react";

const STRENGTH = 0.65;
const ELASTIC = "elastic.out(1, 0.3)";
const DURATION = 1;

export default function Magnetic({ children }: PropsWithChildren) {
  const magneticRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = magneticRef.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", {
      duration: DURATION,
      ease: ELASTIC,
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: DURATION,
      ease: ELASTIC,
    });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * STRENGTH);
      yTo(y * STRENGTH);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  });

  return (
    <div ref={magneticRef} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}
