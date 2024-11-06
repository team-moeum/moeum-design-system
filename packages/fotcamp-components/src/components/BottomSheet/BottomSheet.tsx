import { Drawer } from "vaul";
import { SwitchCase } from "../../shared/components/SwitchCase";

export const BottomSheet = ({
  open,
  onClose,
  children,
  modal=true,
}: {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  modal?: boolean;
}) => {
  return (
    <Drawer.Root open={open} onClose={onClose} modal={modal}>
      <Drawer.Portal>
        <Drawer.Overlay className="overlay" />
        <Drawer.Content className="drawer-content" data-fotcamp-component="BottomSheet">
          <Drawer.Handle />
          <Drawer.Title />
          <div className="content">{children}</div>
          <Drawer.Close><button>close button</button></Drawer.Close>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
