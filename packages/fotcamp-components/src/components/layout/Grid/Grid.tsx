import { CSSProperties } from "react";
import { Box, BoxProps } from "../Box";
import cx from "classnames";

export interface GridProps extends BoxProps {
  columns?: number | string;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  autoFlow?: CSSProperties["gridAutoFlow"];
  areas?: CSSProperties["gridTemplateAreas"];
}

export function Grid({
  as: Component = "div",
  columns,
  gap,
  rowGap,
  columnGap,
  autoFlow,
  areas,
  className,
  style,
  ...rest
}: GridProps) {
  return (
    <Box
      data-fotcamp-component="Grid"
      as={Component}
      className={cx("grid", className)}
      style={{
        display: "grid",
        gridTemplateColumns:
          typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns,
        gap: gap,
        rowGap: rowGap,
        columnGap: columnGap,
        gridAutoFlow: autoFlow,
        gridTemplateAreas: areas,
        ...style,
      }}
      {...rest}
    />
  );
}
