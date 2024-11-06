import { Drawer } from "vaul";
import { BottomSheetProps } from "./BottomSheet.type";
import { useState } from "react";

const snapPoints = ['100px', '200px', 1];

export const BottomSheet = ({
  open,
  onClose,
  children,
  modal = true,
  ...rest
}: BottomSheetProps) => {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);

  return (
    <Drawer.Root 
      open={open}
      onClose={onClose}
      modal={modal}
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      {...rest}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="overlay" />
        <Drawer.Content className="drawer-content" data-fotcamp-component="BottomSheet">
          <Drawer.Handle className="drawer-handle" />
          <Drawer.Title />
          <div className="content">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
