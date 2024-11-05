import { Drawer } from "vaul";
import { SwitchCase } from "../../shared/components/SwitchCase";

export const BottomSheet = ({
  open,
  onClose,
  children,
  overlay=true,
}: {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  overlay?: boolean;
}) => {
  return (
    <Drawer.Root open={open} onClose={onClose}>
      <Drawer.Portal>
        <SwitchCase
          value={String(overlay)}
          caseBy={{
            true: <Drawer.Overlay />,
          }}
        />
        <Drawer.Content className="drawer-content">
          <Drawer.Handle />
          <Drawer.Title />
          <div className="content">{children}</div>
          <Drawer.Close><button>close button</button></Drawer.Close>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
