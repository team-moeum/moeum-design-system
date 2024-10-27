import React from "react";
import cx from "classnames";
import { ButtonProps, ButtonSizeValue } from "./Button.type";

/** To-Do move to Icon Package */
function isIcon(children: React.ReactNode): boolean {
  /* React element인지 확인 */
  if (!React.isValidElement(children)) {
    return false;
  }

  /* data-fotcamp-component 속성이 "Icon"인지 확인 */
  return children.props["data-fotcamp-component"] === "Icon";
}

export function ButtonSide({
  size,
  children,
}: {
  size: ButtonSizeValue;
  children: React.ReactNode;
}) {
  if (isIcon(children)) {
    return <>To-Do Icon</>;
    // return <Icon source={children} size={size} />;
  }

  return <>{children}</>;
}

export function Button({
  style = "fill",
  display = "inline",
  disabled = false,
  loading = false,
  type = "primary",
  size = "large",
  className,
  children,
  leftContent,
  rightContent,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-fotcamp-component="Button"
      className={cx(
        "button",
        {
          [`button--size-${size}`]: size,
          [`button--type-${type}`]: type,
          [`button--style-${style}`]: style,
          [`button--display-${display}`]: display,
        },
        { disabled: disabled },
        className
      )}
      disabled={disabled}
      {...rest}
    >
      <ButtonSide size={size}>{leftContent}</ButtonSide>
      {children}
      <ButtonSide size={size}>{rightContent}</ButtonSide>
      {loading && (
        <div className="button-spinner">
          To-Do Spinner
          {/* <Spinner size={size} /> */}
        </div>
      )}
    </button>
  );
}
