import React, { forwardRef } from "react";
import cx from "classnames";
import { ButtonDisplay, ButtonProps, ButtonSize, ButtonStyle, ButtonType } from "./Button.type";
import { isIcon } from "../../shared/icon";

export function ButtonSide({ size, children }: { size: ButtonSize; children: React.ReactNode }) {
  if (isIcon(children)) {
    return <>To-Do Icon</>;
    // return <Icon source={children} size={size} />;
  }

  return <>{children}</>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      style = ButtonStyle.Fill,
      display = ButtonDisplay.Inline,
      disabled = false,
      loading = false,
      type = ButtonType.Primary,
      size = ButtonSize.LARGE,
      className,
      children,
      leftContent,
      rightContent,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        data-fotcamp-component="Button"
        className={cx(
          "button",
          {
            [`button--size-${size}`]: size,
            [`button--type-${type}`]: type,
            [`button--style-${style}`]: style,
            [`button--display-${display}`]: display
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
);

Button.displayName = "Button";
