import type { LogoDependencies } from "./types";
import "./styles.scss";

const DEFAULTS = {
  color: "primary" as const,
  size: "md" as const,
};

function buildLogoClassName(props: {
  color?: LogoDependencies["color"];
  size?: LogoDependencies["size"];
}): string {
  const { color = DEFAULTS.color, size = DEFAULTS.size } = props;
  return ["logo", `logo--color-${color}`, `logo--size-${size}`].join(" ");
}

export default function Logo({
  color = DEFAULTS.color,
  size = DEFAULTS.size,
  className,
  ...rest
}: LogoDependencies) {
  const finalClassName = [buildLogoClassName({ color, size }), className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finalClassName} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logotipo quadrado que remete às tags de HTML"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.688 36c.828 0 1.494-.674 1.553-1.5C15.974 24.2 24.2 15.974 34.5 15.24c.826-.058 1.5-.724 1.5-1.553V1.5A1.5 1.5 0 0 0 34.5 0H22.312c-.828 0-1.494.674-1.553 1.5C20.026 11.8 11.8 20.026 1.5 20.76c-.826.058-1.5.724-1.5 1.552V34.5A1.5 1.5 0 0 0 1.5 36h12.188ZM36 19.94c0-.829-.674-1.507-1.5-1.437-8.502.718-15.279 7.495-15.997 15.998-.07.825.608 1.499 1.436 1.499H34.5a1.5 1.5 0 0 0 1.5-1.5V19.94ZM16.06 0c.829 0 1.507.674 1.437 1.5-.718 8.502-7.495 15.279-15.998 15.997C.674 17.567 0 16.89 0 16.061V1.5A1.5 1.5 0 0 1 1.5 0h14.56Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
