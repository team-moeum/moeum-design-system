import { CSSProperties } from "react";

export const BottomSheetRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

type ValueOf<T> = T[keyof T];

export type BottomSheetRadius = ValueOf<typeof BottomSheetRadius>;
export interface BottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  modal?: boolean;
  showHandle?: boolean;
  handleOnly?: boolean;
  zIndex?: number;
  radius?: BottomSheetRadius;
  className?: string;
  children?: React.ReactNode;
}