import React, { PropsWithChildren } from "react";
import cx from "classnames";

export const ButtonSize = {
  Large: "large",
  Medium: "medium",
  Small: "small",
} as const;

export type ButtonSizeValue = (typeof ButtonSize)[keyof typeof ButtonSize];

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
    return <Icon source={children} size={size} />;
  }

  return <>{children}</>;
}

export type ButtonProps = PropsWithChildren<{
  type?: "primary" | "danger" | "secondary" | "success" | "warning" | "info";
  style?: "fill" | "outline" | "flat";
  display?: "inline" | "block" | "full";
  size: ButtonSizeValue;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  loading?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}>;

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
          <Spinner size={size} />
        </div>
      )}
    </button>
  );
}
