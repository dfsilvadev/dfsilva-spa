import { useRef } from "react";
import type { MouseEvent, RefObject } from "react";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";

import { TechnologyCard } from "../../../../components/ui";

import {
  CypressIcon,
  JavascriptIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  StorybookIcon,
  StyledIcon,
  TailwindIcon,
} from "../../../../assets/images/svg/icons";

import { handleOnHoverCard } from "./anim";

import "./styles.scss";

const dimensions = {
  width: 55,
  height: 55,
};

export default function Technologies() {
  const { t } = useTranslation();
  const gridBoxRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const ctx = useRef<ReturnType<typeof handleOnHoverCard> | null>(null);

  const onEnter = (evt: MouseEvent<HTMLElement>) => {
    if (ctx.current) {
      ctx.current.onEnter(evt);
    }
  };

  const onLeave = () => {
    if (ctx.current) {
      ctx.current.onLeave();
    }
  };

  useGSAP(() => {
    ctx.current = handleOnHoverCard(gridBoxRef);
  });

  return (
    <div
      className="about-me-technologies"
      ref={gridBoxRef}
      role="group"
      aria-label={t("about.technologiesTitle")}
    >
      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="javascript"
      >
        <span aria-hidden="true">
          <JavascriptIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="react"
      >
        <span aria-hidden="true">
          <ReactIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="next"
      >
        <span aria-hidden="true">
          <NextIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="node"
      >
        <span aria-hidden="true">
          <NodeIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="tailwind"
      >
        <span aria-hidden="true">
          <TailwindIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="styled-components"
      >
        <span aria-hidden="true">
          <StyledIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="storybook"
      >
        <span aria-hidden="true">
          <StorybookIcon {...dimensions} />
        </span>
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="cypress"
      >
        <span aria-hidden="true">
          <CypressIcon {...dimensions} />
        </span>
      </TechnologyCard>
    </div>
  );
}
