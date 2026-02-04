import {
  forwardRef,
  type ForwardRefRenderFunction,
  type HTMLAttributes,
} from "react";
import Grid from "../grid";
import "./styles.scss";

export type SectionDividerDependencies = HTMLAttributes<HTMLDivElement>;

const SectionDivider: ForwardRefRenderFunction<
  HTMLDivElement,
  SectionDividerDependencies
> = (props, ref) => {
  const { className, ...rest } = props;
  const finalClassName = ["section-divider", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={finalClassName} {...rest}>
      <Grid hasDivider={false} />
    </div>
  );
};

export default forwardRef(SectionDivider);
