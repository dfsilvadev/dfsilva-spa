import { MouseEvent, useRef } from "react";
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
  const gridBoxRef = useRef<HTMLDivElement>(null);
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
    <div className="about-me-technologies" ref={gridBoxRef}>
      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="javascript"
      >
        <JavascriptIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="react"
      >
        <ReactIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="next"
      >
        <NextIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="node"
      >
        <NodeIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="tailwind"
      >
        <TailwindIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="styled-components"
      >
        <StyledIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="storybook"
      >
        <StorybookIcon {...dimensions} />
      </TechnologyCard>

      <TechnologyCard
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-technology="cypress"
      >
        <CypressIcon {...dimensions} />
      </TechnologyCard>
    </div>
  );
}
