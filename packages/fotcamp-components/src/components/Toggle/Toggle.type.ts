import { ToggleProps as ToggleBaseProps } from "@radix-ui/react-toggle";
import { ReactNode } from "react";

export interface ToggleProps extends ToggleBaseProps {
  chidlren?: ReactNode;
}
