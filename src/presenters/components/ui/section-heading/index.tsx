import type { ReactNode } from "react";
import Flex from "../flex";
import Heading from "../heading";
import "./styles.scss";

export type { SectionHeadingDependencies } from "./types";

const DEFAULTS = {
  hasBorder: true,
};

type SectionHeadingProps = {
  children: ReactNode;
  hasBorder?: boolean;
};

export default function SectionHeading({
  children,
  hasBorder = DEFAULTS.hasBorder,
}: SectionHeadingProps) {
  const finalClassName = [
    "section-heading",
    hasBorder ? "section-heading--has-border" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finalClassName}>
      <Heading as="h2" size="small">
        <Flex align="center" gap="0.4rem">
          {children}
        </Flex>
      </Heading>
    </div>
  );
}
