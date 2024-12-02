import React from "react";
import cx from "classnames";
import { TextAreaProps } from "./TextArea.type";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, size = "medium", variant = "surface", color, radius, disabled, error, ...props },
    ref
  ) => {
    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
      props.onBlur?.(e);
    };

    return (
      <div
        data-fotcamp-component="TextArea"
        className={cx(
          "textarea-container",
          {
            [`textarea-container--size-${size}`]: size,
            [`textarea-container--variant-${variant}`]: variant,
            [`textarea-container--radius-${radius}`]: radius,
            "textarea-container--disabled": disabled,
            "textarea-container--error": error
          },
          className
        )}
      >
        <textarea
          disabled={disabled}
          ref={ref}
          className="textarea"
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ color }}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
