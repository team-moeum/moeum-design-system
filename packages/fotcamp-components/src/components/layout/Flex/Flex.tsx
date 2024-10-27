import cx from "classnames";
import { FlexProps } from "./Flex.type";
import { Box } from "../Box";

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
