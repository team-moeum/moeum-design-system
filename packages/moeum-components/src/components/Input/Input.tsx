import { forwardRef, useState } from "react";
import cx from "classnames";
import { InputProps } from "./input.type";
import "./Input.scss";
import CloseIcon from "./assets/close.svg?react";
import LinkIcon from "./assets/link.svg?react";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      accept,
      display = "box",
      disabled = false,
      error = false,
      onClear,
      className,
      value,
      onChange,
      placeholder = "텍스트를 입력하세요",
      ...rest
    },
    ref
  ) => {
    const [hasFile, setHasFile] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "file") {
        setHasFile(!!(e.target.files && e.target.files.length > 0));
      }

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div
        className={cx(
          "input-wrapper",
          {
            [`input--display-${display}`]: display,
            "input--disabled": disabled,
            "input--error": error
          },
          className
        )}
      >
        <input
          placeholder={placeholder}
          ref={ref}
          type={type}
          disabled={disabled}
          className={cx("input", { "has-file": hasFile })}
          data-moeum-component="Input"
          onChange={handleChange}
          {...rest}
        />
        {type === "file" && (
          <button className="input--action input--action-link" disabled={disabled}>
            <LinkIcon />
          </button>
        )}
        {value && onClear && (
          <button onClick={onClear} className="input--close" disabled={disabled}>
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
