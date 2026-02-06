import { ArrowDown, Pause, Play } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Flex,
  Grid,
  GridColumn,
  Magnetic,
  SectionDivider,
  SectionHeading,
  TypingText,
} from "../../components/ui";

import {
  handleTitleClick,
  nextSlide,
  projects,
  startProgressBar,
  stopProgressBar,
} from "./anim";

import "./styles.scss";

export default function Projects() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const progressRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const currentProgressRefs = progressRefs.current;
    if (!isPaused)
      startProgressBar(activeIndex, currentProgressRefs, () =>
        nextSlide(setActiveIndex, projects.length)
      );
    return () => stopProgressBar(activeIndex, currentProgressRefs);
  }, [activeIndex, isPaused]);

  useEffect(() => {
    if (isPaused) stopProgressBar(activeIndex, progressRefs.current, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <section id="projects" className="projects">
      <div className="projects__header grid grid--border-light grid--has-divider">
        <GridColumn className="projects__first-column">
          <SectionHeading>
            <TypingText>{t("projects.sectionTitle")}</TypingText>
          </SectionHeading>
        </GridColumn>

        <GridColumn className="projects__last-column greaterThan">
          <SectionHeading hasBorder={false}>
            <ArrowDown className="greaterThan" />
            <TypingText>{t("projects.sectionSubtitle")}</TypingText>
          </SectionHeading>
        </GridColumn>
      </div>

      <div className="projects__card" data-pinned="card-pinned">
        <Grid data-pinned="project">
          <GridColumn className="projects__first-column">
            <ul>
              <Flex align="stretch" direction="column" gap="0.4rem">
                {projects.map((project, index) => (
                  <li key={index}>
                    <div className="projects__title-wrapper flex">
                      <button
                        type="button"
                        className={[
                          "projects__title-button",
                          activeIndex === index
                            ? "projects__title-button--active"
                            : "projects__title-button--inactive",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => handleTitleClick(index, setActiveIndex)}
                      >
                        {project.title}
                      </button>

                      <Magnetic>
                        <button
                          type="button"
                          className={[
                            "projects__pause-button",
                            activeIndex === index
                              ? "projects__pause-button--active"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          onClick={() => setIsPaused((prev) => !prev)}
                          aria-label={
                            isPaused
                              ? t("a11y.resumeCarousel")
                              : t("a11y.pauseCarousel")
                          }
                        >
                          <Flex align="center" justify="center">
                            {isPaused ? (
                              <Play size={14} />
                            ) : (
                              <Pause size={14} />
                            )}
                          </Flex>
                        </button>
                      </Magnetic>

                      <div className="projects__progress-bar">
                        <span
                          ref={(el) => {
                            progressRefs.current[index] = el;
                          }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </Flex>
            </ul>
          </GridColumn>

          <GridColumn className="projects__last-column">
            <figure className="projects__figure">
              {projects.map((project, index) => (
                <a
                  href={project.repositoryURL}
                  key={index}
                  data-content="view-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("a11y.viewRepo", { title: project.title })}
                  aria-hidden={activeIndex !== index}
                  tabIndex={activeIndex === index ? 0 : -1}
                >
                  <img
                    src={project.image}
                    alt={activeIndex === index ? project.title : ""}
                    className="projects__slide-image"
                    data-active={activeIndex === index}
                    style={{ zIndex: activeIndex === index ? 2 : 1 }}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </a>
              ))}
            </figure>
          </GridColumn>
        </Grid>
        <SectionDivider />
      </div>
    </section>
  );
}
