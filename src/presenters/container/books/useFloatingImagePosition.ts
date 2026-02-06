import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

import { SPRING_CONFIG } from "./constants";

export function useFloatingImagePosition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastClientRef = useRef<{ x: number; y: number } | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, SPRING_CONFIG);
  const springY = useSpring(mouseY, SPRING_CONFIG);

  const updatePositionFromClient = useCallback(() => {
    const container = containerRef.current;
    const last = lastClientRef.current;
    if (!container || !last) return;

    const rect = container.getBoundingClientRect();
    mouseX.set(last.x - rect.left);
    mouseY.set(last.y - rect.top);
  }, [mouseX, mouseY]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const container = containerRef.current;
      if (!container) return;

      lastClientRef.current = { x: e.clientX, y: e.clientY };
      const rect = container.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("scroll", updatePositionFromClient, true);
    return () =>
      window.removeEventListener("scroll", updatePositionFromClient, true);
  }, [updatePositionFromClient]);

  return { containerRef, springX, springY, handleMouseMove };
}
