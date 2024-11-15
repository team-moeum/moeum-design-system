import { CheckboxProps as CheckboxBaseProps } from "@radix-ui/react-checkbox";
import { ReactNode } from "react";

export interface CheckboxProps extends CheckboxBaseProps {
  children?: ReactNode;
}
