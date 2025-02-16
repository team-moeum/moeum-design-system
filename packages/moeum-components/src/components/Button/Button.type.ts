import { PropsWithChildren } from "react";

export type ButtonTypes =
  | "solid-green"
  | "solid-red"
  | "solid-gray"
  | "outline-green"
  | "outline-red"
  | "outline-gray"
  | "text-none"
  | "base";

export type ButtonStates = "active" | "inactive" | "loading" | "pressed";

export type ButtonSizes = "lg" | "md";

export type ButtonDisplay = "inline" | "full" | "block";

export type ButtonProps = PropsWithChildren<{
  type?: ButtonTypes;
  size?: ButtonSizes;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  display?: ButtonDisplay;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}>;
