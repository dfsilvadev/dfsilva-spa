import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

import {
  Flex,
  GridColumn,
  Heading,
  Magnetic,
  SectionDivider,
  SectionHeading,
  Text,
  TextReveal,
  TypingText,
} from "../../components/ui";

import "./styles.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState<number>(21);
  const prefersReducedMotion = useReducedMotion();

  const marqueeWordBaseContent = (
    <>
      <span className="marquee__word">Estratégicos</span>
      <span className="marquee__word">Escaláveis</span>
      <span className="marquee__word">Intuitivos</span>
    </>
  );

  useEffect(() => {
    if (!trackRef.current || prefersReducedMotion) return;

    const track = trackRef.current;

    const containerWidth =
      track.parentElement?.offsetWidth || window.innerWidth;
    const totalWidth = track.scrollWidth;
    if (!totalWidth) return;

    const contentWidth = totalWidth / copies;
    if (!contentWidth) return;

    const neededCopies = Math.ceil((containerWidth * 2) / contentWidth);

    // Primeiro ajusta a quantidade de cópias; só anima quando já estiver correto
    if (neededCopies !== copies) {
      setCopies(neededCopies);
      return;
    }

    // Largura do loop (metade do track, já que o conteúdo está duplicado)
    const loopWidth = totalWidth / 2;
    if (!loopWidth) return;

    // Animação infinita com loop perfeito usando módulo (sem resets bruscos)
    const tween = gsap.to(track, {
      x: -loopWidth,
      duration: loopWidth / 150,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const value = parseFloat(x);
          // Mantém o valor sempre no intervalo [-loopWidth, 0)
          const wrapped = value % -loopWidth;
          return `${wrapped}px`;
        },
      },
    });

    return () => {
      tween.kill();
    };
  }, [copies, prefersReducedMotion]);

  return (
    <section className="marquee">
      <div className="marquee__grid grid grid--border-light grid--has-divider">
        <GridColumn className="marquee__first-column">
          <SectionHeading>
            <TypingText>Meu processo criativo</TypingText>
          </SectionHeading>

          <div className="marquee__first-column-body">
            <Flex gap="0.8rem" direction="column">
              <TextReveal>
                <Heading
                  as="h2"
                  size="large"
                  className="reveal"
                  data-animation="trigger"
                >
                  Onde a ideia se encontra
                </Heading>
              </TextReveal>

              <TextReveal>
                <Heading
                  as="h2"
                  size="large"
                  className="reveal"
                  data-animation="trigger"
                >
                  com a performance.
                </Heading>
              </TextReveal>
            </Flex>

            <Text>
              Código de qualidade que se traduz em{" "}
              <Magnetic>
                <span>
                  <strong>
                    <u>experiências </u>
                  </strong>
                </span>
              </Magnetic>{" "}
              <Magnetic>
                <span>
                  <strong>
                    <u>fluidas</u>
                  </strong>
                </span>
              </Magnetic>
              .
            </Text>
          </div>
        </GridColumn>

        <GridColumn className="marquee__last-column">
          <div className="marquee__wrapper">
            <div className="marquee__track" ref={trackRef} aria-hidden="true">
              {Array.from({ length: copies }).map((_, i) => (
                <React.Fragment key={i}>
                  {marqueeWordBaseContent}
                </React.Fragment>
              ))}
            </div>
          </div>
        </GridColumn>
      </div>

      <SectionDivider />
    </section>
  );
}
