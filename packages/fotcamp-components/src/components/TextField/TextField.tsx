import React from "react";
import cx from "classnames";
import { TextFieldProps } from "./TextField.type";
import { TextFieldSide } from "./TextFieldSide";

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      size = "medium",
      variant = "surface",
      color,
      radius,
      type = "text",
      disabled,
      error,
      leftContent,
      rightContent,
      ...props
    },
    ref
  ) => {
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      props.onBlur?.(e);
    };

    return (
      <div
        data-fotcamp-component="Textfield"
        className={cx(
          "textfield-container",
          {
            [`textfield-container--size-${size}`]: size,
            [`textfield-container--variant-${variant}`]: variant,
            [`textfield-container--radius-${radius}`]: radius,
            "textfield-container--disabled": disabled,
            "textfield-container--error": error,
          },
          className
        )}
      >
        {leftContent && (
          <TextFieldSide size={size}>{leftContent}</TextFieldSide>
        )}
        <input
          type={type}
          disabled={disabled}
          ref={ref}
          className="textfield"
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ color }}
          {...props}
        />
        {rightContent && (
          <TextFieldSide size={size}>{rightContent}</TextFieldSide>
        )}
      </div>
    );
  }
);
