import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";

export type ScrollToTarget = string | HTMLElement | number;

export interface ScrollContextValue {
  scrollToSection: (target: ScrollToTarget) => void;
  registerScrollTo: (fn: (target: ScrollToTarget) => void) => () => void;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

function smoothScrollFallback(target: ScrollToTarget) {
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }
  if (typeof target === "string") {
    if (target === "top" || target === "/" || target === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollToRef = useRef<((target: ScrollToTarget) => void) | null>(null);

  const registerScrollTo = useCallback(
    (fn: (target: ScrollToTarget) => void) => {
      scrollToRef.current = fn;
      return () => {
        scrollToRef.current = null;
      };
    },
    []
  );

  const scrollToSection = useCallback((target: ScrollToTarget) => {
    if (scrollToRef.current) {
      scrollToRef.current(target);
    } else {
      smoothScrollFallback(target);
    }
  }, []);

  const value: ScrollContextValue = {
    scrollToSection,
    registerScrollTo,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    return {
      scrollToSection: smoothScrollFallback,
      registerScrollTo: () => () => {},
    };
  }
  return ctx;
}
