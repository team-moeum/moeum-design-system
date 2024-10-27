import { PropsWithChildren } from "react";

export const ButtonSize = {
  Large: "large",
  Medium: "medium",
  Small: "small",
} as const;

export type ButtonSizeValue = (typeof ButtonSize)[keyof typeof ButtonSize];

export type ButtonProps = PropsWithChildren<{
  type?: "primary" | "danger" | "secondary" | "success" | "warning" | "info";
  style?: "fill" | "outline" | "flat";
  display?: "inline" | "block" | "full";
  size?: ButtonSizeValue;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  loading?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}>;