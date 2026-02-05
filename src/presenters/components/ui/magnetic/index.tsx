import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type PropsWithChildren, useRef } from "react";

const STRENGTH = 0.4;
const MAX_OFFSET = 24; // limite para não “grudar” nas bordas
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
      const target = e.currentTarget as HTMLElement;
      const { offsetX, offsetY } = e;
      const { clientWidth, clientHeight } = target;

      // calcula a posição do mouse em relação ao centro do próprio elemento
      const x = offsetX - clientWidth / 2;
      const y = offsetY - clientHeight / 2;

      // aplica força e limita o deslocamento máximo em cada eixo
      const nextX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, x * STRENGTH));
      const nextY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, y * STRENGTH));

      xTo(nextX);
      yTo(nextY);
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
