import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

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

  const marqueeWordBaseContent = (
    <>
      <span className="marquee__word">Estratégicos</span>
      <span className="marquee__word">Escaláveis</span>
      <span className="marquee__word">Intuitivos</span>
    </>
  );

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const containerWidth =
      track.parentElement?.offsetWidth || window.innerWidth;
    const contentWidth = track.scrollWidth / copies;

    const neededCopies = Math.ceil((containerWidth * 2) / contentWidth);

    setCopies(neededCopies);

    requestAnimationFrame(() => {
      const totalWidth = track.scrollWidth;

      gsap.to(track, {
        x: `-=${totalWidth / 2}`,
        duration: totalWidth / 150,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    });
  }, [copies]);

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
            <div className="marquee__track" ref={trackRef}>
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
