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

export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  modal?: boolean;
  zIndex?: number;
  radius?: DialogSize;
  size?: DialogSize;
  className?: string;
  children?: React.ReactNode;
}
