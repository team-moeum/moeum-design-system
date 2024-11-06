import { ComponentProps } from "react";
import { Drawer } from "vaul";

export interface BottomSheetProps extends Omit<ComponentProps<typeof Drawer.Root>, 'children'> {
  children?: React.ReactNode;
}