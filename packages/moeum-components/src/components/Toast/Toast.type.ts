export const ToastRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

type ValueOf<T> = T[keyof T];

export type ToastRadius = ValueOf<typeof ToastRadius>;

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastOptions {
  type: "success" | "error" | "info";
  offest: number;
  message: string;
  duration: number;
  position: ToastPosition;

  radius?: ToastRadius;
  style?: React.CSSProperties;

  content?: React.ReactNode;
}

export interface ToastType extends ToastOptions {
  id: string;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  options?: Partial<ToastOptions>;
}

export interface ToastContextValue {
  toasts: ToastType[];
  add: (toast: Partial<ToastOptions>) => string;
  remove: (id: string) => void;
}

export interface ToastProps extends Partial<ToastOptions> {
  children?: React.ReactNode;
}
