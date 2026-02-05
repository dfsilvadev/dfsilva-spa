import type { TechnologyCardDependencies } from "./types";

import "./styles.scss";

export default function TechnologyCard({
  children,
  className,
  ...rest
}: TechnologyCardDependencies) {
  const finalClassName = ["technology-card", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
}
