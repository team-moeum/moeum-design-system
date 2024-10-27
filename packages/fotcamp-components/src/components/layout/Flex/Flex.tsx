import { CSSProperties } from "react";
import { Box, BoxProps } from "../Box";
import cx from "classnames";

export interface FlexProps extends BoxProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  flex?: CSSProperties["flex"];
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  gap?: number;
}

export function Flex({
  as: Component = "div",
  align,
  justify,
  flex,
  direction,
  wrap,
  gap,
  className,
  style,
  ...rest
}: FlexProps) {
  return (
    <Box
      data-fotcamp-component="Flex"
      as={Component}
      className={cx("flex", className)}
      style={{
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flex,
        flexDirection: direction,
        flexWrap: wrap,
        gap: gap,
        ...style,
      }}
      {...rest}
    />
  );
}
