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
const LOADING_BG = "#040405"; // mesmo fundo da LoadingScreen

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
  const [showContent, setShowContent] = useState(false);
  const [transitionDone, setTransitionDone] = useState(false);

  // Ao terminar o tempo: loading sai e o conteúdo já começa a entrar (sobrepostos = sem gap branco)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, LOADING_TOTAL_MS);
    return () => clearTimeout(timer);
  }, []);

  // Fundo escuro + bloqueio de scroll até a transição terminar
  useEffect(() => {
    const resetStyles = () => {
      document.body.style.overflow = "";
      document.body.style.background = "";
      document.body.style.transition = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.documentElement.style.background = "";
      document.documentElement.style.transition = "";
    };

    if (!transitionDone) {
      document.body.style.overflow = "hidden";
      document.body.style.background = LOADING_BG;
      document.body.style.transition = "";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.documentElement.style.background = LOADING_BG;
      document.documentElement.style.transition = "";
      return resetStyles;
    }

    // Transição suave do fundo escuro → claro para evitar piscada
    const duration = "0.5s";
    document.body.style.transition = `background ${duration} ease-out`;
    document.documentElement.style.transition = `background ${duration} ease-out`;
    document.body.style.background = "#fff";
    document.documentElement.style.background = "#fff";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";

    const t = setTimeout(() => {
      document.body.style.background = "";
      document.body.style.transition = "";
      document.documentElement.style.background = "";
      document.documentElement.style.transition = "";
    }, 520);

    return () => {
      clearTimeout(t);
      resetStyles();
    };
  }, [transitionDone]);

  // Restaura estado só depois da loading sair; delay para conteúdo já preencher a tela
  const handleLoadingExitComplete = () => {
    setTimeout(() => setTransitionDone(true), 280);
  };

  return (
    <ScrollProvider>
      <AnimatePresence mode="wait" onExitComplete={handleLoadingExitComplete}>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "relative",
            zIndex: 0,
            willChange: "opacity",
          }}
        >
          <AppContent />
        </motion.div>
      )}
    </ScrollProvider>
  );
}

export default App;
