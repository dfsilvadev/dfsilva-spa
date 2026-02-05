import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { handleSlideIn } from "../components/ui";
import { AboutMe, Hero } from "../container";
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
    </>
  );
}
