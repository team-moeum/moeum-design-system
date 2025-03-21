import cx from "classnames";
import { Drawer } from "vaul";
import { BottomSheetProps } from "./BottomSheet.type";
import { SwitchCase } from "../../shared/components/SwitchCase";
import { Flex } from "../layout/Flex";

export const BottomSheet = ({
  open,
  onClose,
  locked = true,
  showHandle = true,
  handleOnly = false,
  radius,
  theme = "light",
  zIndex = 1,
  className,
  children
}: BottomSheetProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose} modal={locked} handleOnly={handleOnly}>
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
              [`bottomsheet-container--theme-${theme}`]: theme
            },
            className
          )}
          data-moeum-component="BottomSheet"
          style={{ zIndex }}
        >
          <SwitchCase
            value={String(showHandle)}
            caseBy={{
              true: (
                <Flex className="drawer-handle" align="center" justify="center">
                  <Drawer.Handle style={{ width: 36 }} />
                </Flex>
              )
            }}
          ></SwitchCase>
          <div className="drawer-content-inner">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
