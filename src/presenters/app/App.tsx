import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

import { LoadingScreen } from "@/presenters/components/ui";
import { ScrollProvider, useScroll } from "@/presenters/contexts/ScrollContext";
import { Routes } from "@/presenters/routes/routes";

const scrollEasing = (t: number) => 1 - Math.pow(1 - t, 5);

const LOADING_TOTAL_MS = 4500; // 2500ms barra + 2000ms após 100%

function AppContent() {
  const { registerScrollTo } = useScroll();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;

    let lenis: Lenis | null = null;
    let tickerCb: ((time: number) => void) | null = null;
    let unregister: (() => void) | undefined;

    if (!isTouchDevice) {
      lenis = new Lenis({
        duration: 2,
        easing: scrollEasing,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      unregister = registerScrollTo((target) => {
        const instance = lenisRef.current;
        if (!instance) return;
        const resolved =
          typeof target === "string" &&
          (target === "/" || target === "#" || target === "top")
            ? 0
            : target;
        instance.scrollTo(resolved, {
          duration: 2.2,
          easing: scrollEasing,
          offset: 0,
        });
      });

      lenis.on("scroll", ScrollTrigger.update);

      tickerCb = (time: number) => {
        if (lenis) {
          lenis.raf(time * 1000);
        }
      };
      gsap.ticker.add(tickerCb);

      ScrollTrigger.normalizeScroll(true);
    }

    return () => {
      unregister?.();
      lenisRef.current = null;
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
      }
      if (tickerCb) {
        gsap.ticker.remove(tickerCb);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [registerScrollTo]);

  return <Routes />;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_TOTAL_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollProvider>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <AppContent />
      </motion.div>
    </ScrollProvider>
  );
}

export default App;
