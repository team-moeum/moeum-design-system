import { Drawer } from "vaul";

export const BottomSheet = ({
  open,
  onClose,
  children,
}: {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}) => {
  return (

    <Drawer.Root open={open} onClose={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="overlay" />
        <Drawer.Content className="drawer-content">
          <Drawer.Handle />
          <Drawer.Title />
          <div className="content">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
