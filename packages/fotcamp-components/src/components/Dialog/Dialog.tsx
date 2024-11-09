import cx from "classnames";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogProps } from "./Dialog.type";

export const Dialog = ({
  open,
  onClose,
  modal = true,
  radius,
  size,
  zIndex = 1,
  className,
  children,
}: DialogProps) => (
  <DialogPrimitive.Root open={open} onOpenChange={onClose} modal={modal}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className="overlay"
        data-fotcamp-component="DialogOverlay"
        style={{ zIndex }}
      />
      <DialogPrimitive.Content
        className={cx(
          "dialog-content",
          {
            [`dialog-content--size-${size}`]: size,
            [`dialog-content--radius-${radius}`]: radius,
          },
          className
        )}
        data-fotcamp-component="Dialog"
        style={{ zIndex }}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
