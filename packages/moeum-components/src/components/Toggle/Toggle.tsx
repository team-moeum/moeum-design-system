import { forwardRef } from "react";
import { Switch } from "radix-ui";
import cx from "classnames";
import { ToggleProps } from "./Toggle.type";
import "./Toggle.scss";

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, states = "active", onChange }, ref) => {
    return (
      <Switch.Root
        ref={ref}
        onCheckedChange={onChange}
        checked={states === "active"}
        className={cx("toggle", className)}
        data-moeum-component="Toggle"
      >
        <Switch.Thumb className="toggle-thumb" />
      </Switch.Root>
    );
  }
);

Toggle.displayName = "Toggle";
