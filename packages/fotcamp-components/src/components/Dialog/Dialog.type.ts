import * as DialogPropsBase from "@radix-ui/react-dialog";

export const DialogSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export const DialogRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

type ValueOf<T> = T[keyof T];

export type DialogSize = ValueOf<typeof DialogSize>;
export type DialogRadius = ValueOf<typeof DialogRadius>;

export type DialogProps = {
  locked?: boolean;
  zIndex?: number;
  radius?: DialogSize;
  size?: DialogSize;
  className?: string;
} & Omit<DialogPropsBase.DialogProps, "modal">;
