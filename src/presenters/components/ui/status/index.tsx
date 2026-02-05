import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import "./styles.scss";

export default function Status() {
  const bubblePulseRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = bubblePulseRef.current;
    if (!el) return;

    const tween = gsap.from(el, {
      scale: 0,
      ease: "power1.easeOut",
      duration: 0.8,
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="status" role="img" aria-label="Status disponível">
      <div className="status__bubble" />
      <div className="status__bubble-pulse" ref={bubblePulseRef} aria-hidden />
    </div>
  );
}
