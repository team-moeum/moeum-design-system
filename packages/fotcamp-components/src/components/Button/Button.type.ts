import { PropsWithChildren } from "react";

export enum ButtonSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

export enum ButtonType {
  Primary = "primary",
  Danger = "danger",
  Secondary = "secondary",
  Success = "success",
  Warning = "warning",
  Info = "info",
}

export enum ButtonStyle {
  Fill = "fill",
  Outline = "outline",
  Flat = "flat",
}

export enum ButtonDisplay {
  Inline = "inline",
  Block = "block",
  Full = "full",
}

export type ButtonProps = PropsWithChildren<{
  type?: ButtonType;
  style?: ButtonStyle;
  display?: ButtonDisplay;
  size?: ButtonSize;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  loading?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}>;
