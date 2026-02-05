import type { HTMLAttributes, ReactNode } from "react";
import "./styles.scss";

type GridColumnProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function GridColumn({
  children,
  className,
  ...rest
}: GridColumnProps) {
  const finalClassName = ["grid-column", className].filter(Boolean).join(" ");

  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
}
