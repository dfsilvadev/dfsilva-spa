import type { SlideInUpDependencies } from "./types";
import "./styles.scss";

export { handleSlideIn } from "./anim";
export type { SlideInUpContext } from "./anim";

export default function SlideInUp({
  children,
  ...props
}: SlideInUpDependencies) {
  return (
    <span className="slide-in-up__content">
      <span className="slide-in-up__wrapper" {...props}>
        {children}
      </span>
    </span>
  );
}
