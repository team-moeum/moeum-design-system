import * as DialogPropsBase from "@radix-ui/react-dialog";

export const DialogTheme = {
  light: "light",
  dark: "dark"
} as const;

export const DialogRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

type ValueOf<T> = T[keyof T];

export type DialogTheme = ValueOf<typeof DialogTheme>;
export type DialogRadius = ValueOf<typeof DialogRadius>;

export type DialogProps = {
  locked?: boolean;
  zIndex?: number;
  theme?: DialogTheme;
  radius?: DialogRadius;
  className?: string;
} & Omit<DialogPropsBase.DialogProps, "modal">;
