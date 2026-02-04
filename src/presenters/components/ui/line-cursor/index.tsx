import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  createLineElements,
  getViewportCenter,
  initializePositions,
  onPointerMove,
  startLineCursorTicker,
  type Point,
} from "./anim";
import "./styles.scss";

export default function LineCursor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pointer = useRef<Point>({ x: 0, y: 0 });
  const positions = useRef<Point[]>([]);
  const linesRef = useRef<SVGLineElement[]>([]);

  useGSAP(() => {
    const root = svgRef.current;
    if (!root) return;

    const center = getViewportCenter();
    pointer.current = { ...center };

    initializePositions(positions.current, center.x, center.y);

    const lines = createLineElements(root);
    linesRef.current = lines;

    const handleMouseMove = (e: MouseEvent) => onPointerMove(e, pointer);
    window.addEventListener("mousemove", handleMouseMove);

    const removeTick = startLineCursorTicker(pointer, positions, linesRef);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeTick();
      linesRef.current.forEach((line) => line.remove());
      linesRef.current = [];
    };
  });

  return <svg ref={svgRef} className="line-cursor" aria-hidden />;
}
