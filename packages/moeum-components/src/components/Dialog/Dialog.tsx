import cx from "classnames";
import * as DialogBase from "@radix-ui/react-dialog";
import { DialogProps } from "./Dialog.type";

export const Dialog = ({
  open,
  theme = "light",
  radius,
  zIndex = 1,
  locked = true,
  children,
  className,
  onOpenChange,
  ...rest
}: DialogProps) => (
  <DialogBase.Root open={open} onOpenChange={onOpenChange} modal={locked} {...rest}>
    <DialogBase.Portal>
      <DialogBase.Overlay
        className="overlay"
        data-fotcamp-component="DialogOverlay"
        style={{ zIndex }}
      />
      <DialogBase.Content
        className={cx(
          "dialog-content",
          {
            [`dialog-content--theme-${theme}`]: theme,
            [`dialog-content--radius-${radius}`]: radius
          },
          className
        )}
        data-fotcamp-component="Dialog"
        style={{ zIndex }}
      >
        {children}
      </DialogBase.Content>
    </DialogBase.Portal>
  </DialogBase.Root>
);
