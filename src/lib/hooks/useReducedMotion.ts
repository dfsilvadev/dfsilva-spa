import { useSyncExternalStore } from "react";

function getServerSnapshot() {
  return false;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getClientSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Returns true when the user prefers reduced motion (system/OS setting).
 * Use to disable or simplify animations for accessibility.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
