import cx from "classnames";
import { FontWeight, TextProps, Typography } from "./Text.type";

export function Text({
  as: Component = "span",
  className,
  children,
  ellipsisLines,
  typography = Typography.Body,
  fontWeight = FontWeight.Regular,
  color,
  display = "inline-block",
  textAlign,
  style,
  ...rest
}: TextProps) {
  const isSingleLine = ellipsisLines !== undefined && ellipsisLines === 1;
  const isMultiLine = ellipsisLines !== undefined && ellipsisLines > 1;
  return (
    <Component
      data-fotcamp-component="Text"
      className={cx(
        "text",
        {
          "text--single-line": isSingleLine,
          "text--multi-line": isMultiLine,
          [`text--font-weight-${fontWeight}`]: fontWeight,
          [`text--display-${display}`]: display && !isSingleLine && !isMultiLine,
          [`text--typography-${typography}`]: typography
        },
        className
      )}
      style={{
        color,
        textAlign,
        WebkitLineClamp: ellipsisLines,
        ...style
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
