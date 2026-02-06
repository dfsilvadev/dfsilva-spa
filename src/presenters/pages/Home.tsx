import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { AboutMe, Books, Contact, Hero, Marquee, Projects } from "../container";

import { handleSlideIn } from "../components/ui";

import "./Home.scss";

export function Home() {
  const ctx = useRef<ReturnType<typeof handleSlideIn> | null>(null);

  useGSAP(() => {
    const timer = setTimeout(() => {
      const moveUpContentList = document.querySelectorAll(
        '[data-slidein="up"]'
      );
      ctx.current = handleSlideIn(moveUpContentList);
      ctx.current.onInit();
    }, 1);

    return () => {
      clearTimeout(timer);
      ctx.current?.revert();
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <Books />
      <Marquee />
      <Projects />
      <Contact />
    </>
  );
}
