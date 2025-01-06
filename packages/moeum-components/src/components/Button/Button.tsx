import React, { forwardRef } from "react";
import cx from "classnames";
import { ButtonDisplay, ButtonProps, ButtonSizes, ButtonTypes } from "./Button.type";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "solid-green",
      display = "inline",
      disabled = false,
      loading = false,
      size = "md",
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        data-moeum-component="Button"
        className={cx(
          "button",
          {
            [`button--size-${size}`]: size,
            [`button--type-${type}`]: type,
            [`button--display-${display}`]: display
          },
          { disabled: disabled },
          className
        )}
        disabled={disabled || loading}
        {...rest}
      >
        <span className={cx("button--content", { "button--content--hidden": loading })}>
          {children}
        </span>
        {loading && (
          <span className="button--loading">
            <div className="button--loading-dot"></div>
            <div className="button--loading-dot"></div>
            <div className="button--loading-dot"></div>
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
