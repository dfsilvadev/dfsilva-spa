import type { GridDependencies } from "./types";
import "./styles.scss";

const GRID_DEFAULTS = {
  borderColor: "light" as const,
  hasDivider: true,
};

function buildGridClassName(props: {
  borderColor?: "black" | "light";
  hasDivider?: boolean;
}): string {
  const {
    borderColor = GRID_DEFAULTS.borderColor,
    hasDivider = GRID_DEFAULTS.hasDivider,
  } = props;

  const classes = [
    "grid",
    `grid--border-${borderColor}`,
    hasDivider ? "grid--has-divider" : "",
  ].filter(Boolean);

  return classes.join(" ");
}

export default function Grid({
  children,
  borderColor = GRID_DEFAULTS.borderColor,
  hasDivider = GRID_DEFAULTS.hasDivider,
  className,
  ...rest
}: GridDependencies) {
  const finalClassName = [
    buildGridClassName({ borderColor, hasDivider }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
}
