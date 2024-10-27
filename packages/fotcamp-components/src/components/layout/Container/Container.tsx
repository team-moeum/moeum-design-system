import { ContainerProps } from "./Container.type";
import { Box } from "../Box";
import cx from "classnames";

export function Container({
  as: Component = "div",
  maxWidth = "100%",
  className,
  style,
  ...rest
}: ContainerProps) {
  return (
    <Box
      data-fotcamp-component="Container"
      as={Component}
      className={cx("container", className)}
      style={{
        maxWidth,
        marginLeft: "auto",
        marginRight: "auto",
        ...style,
      }}
      {...rest}
    />
  );
}
