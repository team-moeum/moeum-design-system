import { Box } from "../Box";
import cx from "classnames";
import { GridProps } from "./Grid.type";

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
