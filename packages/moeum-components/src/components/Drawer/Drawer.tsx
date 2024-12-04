import cx from "classnames";
import { Drawer as DrawerBase } from "vaul";
import { DrawerProps, POSITION_MAP } from "./Drawer.type";

export const Drawer = ({
  direction = "top",
  open,
  onClose,
  locked = true,
  zIndex = 1,
  className,
  children
}: DrawerProps) => {
  return (
    <DrawerBase.Root direction={direction} open={open} onClose={onClose} modal={locked}>
      <DrawerBase.Portal>
        <DrawerBase.Overlay
          className="overlay"
          data-fotcamp-component="DrawerOverlay"
          style={{ zIndex }}
        />
        <DrawerBase.Content
          className={cx("drawer-content", className)}
          data-fotcamp-component="Drawer"
          style={{ zIndex, ...POSITION_MAP[direction] }}
        >
          {children}
        </DrawerBase.Content>
      </DrawerBase.Portal>
    </DrawerBase.Root>
  );
};
