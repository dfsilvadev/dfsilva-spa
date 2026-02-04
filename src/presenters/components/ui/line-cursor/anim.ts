import gsap from "gsap";
import type { RefObject } from "react";

// Constantes da trilha
export const TOTAL = 100;
export const EASE = 0.75;
export const OPACITY_POWER = 0.6;

const SVG_NS = "http://www.w3.org/2000/svg";

export type Point = { x: number; y: number };

/** Retorna o centro da viewport (usado como posição inicial do pointer e dos segmentos). */
export function getViewportCenter(): Point {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
}

/** Preenche o array de posições com o mesmo ponto (ex.: centro da tela). */
export function initializePositions(
  positions: Point[],
  x: number,
  y: number
): void {
  for (let i = 0; i < TOTAL; i++) {
    positions[i] = { x, y };
  }
}

/**
 * Cria os elementos SVG <line>, aplica degradê de opacidade (100% na ponta → 0% no final)
 * e anexa ao root. Retorna o array de linhas.
 */
export function createLineElements(root: SVGSVGElement): SVGLineElement[] {
  const lines: SVGLineElement[] = [];
  for (let i = 0; i < TOTAL; i++) {
    const line = document.createElementNS(SVG_NS, "line");
    const t = i / TOTAL;
    const opacity = Math.pow(1 - t, OPACITY_POWER);
    line.setAttribute("stroke-opacity", String(opacity));
    root.appendChild(line);
    lines.push(line);
  }
  return lines;
}

/** Atualiza a posição do pointer com as coordenadas do evento. */
export function onPointerMove(
  evt: MouseEvent,
  pointer: RefObject<Point>
): void {
  if (!pointer.current) return;
  pointer.current.x = evt.clientX;
  pointer.current.y = evt.clientY;
}

/**
 * Um frame da trilha: suaviza as posições em relação ao "líder" anterior
 * e atualiza os atributos (x1, y1, x2, y2) de cada linha.
 */
export function updateLineTrail(
  pointer: Point,
  positions: Point[],
  lines: SVGLineElement[]
): void {
  let prevX = pointer.x;
  let prevY = pointer.y;

  for (let i = 0; i < TOTAL; i++) {
    const pt = positions[i];
    pt.x += (prevX - pt.x) * EASE;
    pt.y += (prevY - pt.y) * EASE;

    const line = lines[i];
    if (line) {
      line.setAttribute("x1", String(pt.x));
      line.setAttribute("y1", String(pt.y));
      line.setAttribute("x2", String(prevX));
      line.setAttribute("y2", String(prevY));
    }

    prevX = pt.x;
    prevY = pt.y;
  }
}

/**
 * Registra o tick no gsap.ticker para atualizar a trilha a cada frame.
 * Retorna função de cleanup (remove o tick).
 */
export function startLineCursorTicker(
  pointerRef: RefObject<Point>,
  positionsRef: RefObject<Point[]>,
  linesRef: RefObject<SVGLineElement[]>
): () => void {
  const tick = () => {
    const pointer = pointerRef.current;
    const positions = positionsRef.current;
    const lines = linesRef.current;
    if (!pointer || !positions || !lines.length) return;
    updateLineTrail(pointer, positions, lines);
  };

  gsap.ticker.add(tick);
  return () => gsap.ticker.remove(tick);
}
