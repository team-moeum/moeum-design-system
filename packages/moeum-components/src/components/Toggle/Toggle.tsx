import { forwardRef } from "react";
import { Switch } from "radix-ui";
import cx from "classnames";
import { ToggleProps } from "./Toggle.type";
import "./Toggle.scss";

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, status = "on", disabled = "off", onChange }, ref) => {
    return (
      <Switch.Root
        ref={ref}
        onCheckedChange={onChange}
        checked={status === "on"}
        disabled={disabled === "on"}
        className={cx("toggle", className)}
        data-moeum-component="Toggle"
      >
        <Switch.Thumb className="toggle-thumb" />
      </Switch.Root>
    );
  }
);

Toggle.displayName = "Toggle";
