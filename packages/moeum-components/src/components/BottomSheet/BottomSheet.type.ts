export const BottomSheetRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export const BottomSheetTheme = {
  light: "light",
  dark: "dark"
} as const;

type ValueOf<T> = T[keyof T];

export type BottomSheetRadius = ValueOf<typeof BottomSheetRadius>;
export type BottomSheetTheme = ValueOf<typeof BottomSheetTheme>;
export interface BottomSheetProps {
  open?: boolean;
  onClose?: () => void;
  locked?: boolean;
  showHandle?: boolean;
  handleOnly?: boolean;
  zIndex?: number;
  radius?: BottomSheetRadius;
  theme?: BottomSheetTheme;
  className?: string;
  children?: React.ReactNode;
}
