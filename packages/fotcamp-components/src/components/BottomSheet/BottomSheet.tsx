import cx from "classnames";
import { Drawer } from "vaul";
import { BottomSheetProps } from "./BottomSheet.type";
import { SwitchCase } from "../../shared/components/SwitchCase";

export const BottomSheet = ({
  open,
  onClose,
  modal = true,
  showHandle = true,
  handleOnly = false,
  radius,
  zIndex = 1,
  className,
  children,
}: BottomSheetProps) => {
  return (
    <Drawer.Root
      open={open}
      onClose={onClose}
      modal={modal}
      handleOnly={handleOnly}
    >
      <Drawer.Portal>
        <Drawer.Overlay
          className="overlay"
          data-fotcamp-component="BottomSheetOverlay"
          style={{ zIndex }}
        />
        <Drawer.Content
          className={cx(
            "drawer-content",
            {
              [`bottomsheet-container--radius-${radius}`]: radius,
            },
            className
          )}
          data-fotcamp-component="BottomSheet"
          style={{ zIndex }}
        >
          <SwitchCase
            value={String(showHandle)}
            caseBy={{
              true: <Drawer.Handle className="drawer-handle" />,
            }}
          ></SwitchCase>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
