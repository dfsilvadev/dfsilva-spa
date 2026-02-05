import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

import { LoadingScreen } from "@/presenters/components/ui";
import { ScrollProvider, useScroll } from "@/presenters/contexts/ScrollContext";
import { Routes } from "@/presenters/routes/routes";

const scrollEasing = (t: number) => 1 - Math.pow(1 - t, 5);

const LOADING_TOTAL_MS = 4500; // 2500ms barra + 2000ms após 100%
const LOADING_BG = "#040405"; // mesmo fundo da LoadingScreen

const preloadBaseAndHome = () =>
  Promise.all([
    import("@/presenters/layout/base"),
    import("@/presenters/pages/Home").then((m) => m.Home),
  ]);

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
  const [loadingExited, setLoadingExited] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const minDelay = new Promise((r) => setTimeout(r, LOADING_TOTAL_MS));
    Promise.all([minDelay, preloadBaseAndHome()]).then(() => {
      if (!cancelled) setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const rootEl = document.getElementById("root");
    const resetStyles = () => {
      document.body.style.overflow = "";
      document.body.style.background = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.documentElement.style.background = "";
      rootEl?.style.removeProperty("background");
    };

    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.background = LOADING_BG;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.documentElement.style.background = LOADING_BG;
      if (rootEl) rootEl.style.background = LOADING_BG;
      return resetStyles;
    }

    // Restaura scroll; não pinta body/root de preto aqui (a overlay da loading já tem o fundo escuro; pintar body quebra e mostra bordas)
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";

    if (loadingExited) {
      const isTouchDevice =
        typeof window !== "undefined" &&
        window.matchMedia?.("(pointer: coarse)").matches;

      const applyAndRefresh = () => {
        document.body.style.background = "#fff";
        document.documentElement.style.background = "#fff";
        rootEl?.style.removeProperty("background");
        ScrollTrigger.refresh();
        // No mobile: forçar reflow para o compositor atualizar camadas (evita preto/bordas ao scrollar)
        if (isTouchDevice) {
          void document.body.offsetHeight;
          requestAnimationFrame(() => ScrollTrigger.refresh());
        }
      };

      const rafId = requestAnimationFrame(applyAndRefresh);
      return () => {
        cancelAnimationFrame(rafId);
        resetStyles();
      };
    }

    // Durante o fade-out: deixa o cleanup anterior ter limpo o background (volta ao branco do CSS)
    return resetStyles;
  }, [isLoading, loadingExited]);

  return (
    <ScrollProvider>
      <AppContent />
      <AnimatePresence onExitComplete={() => setLoadingExited(true)}>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
    </ScrollProvider>
  );
}

export default App;
