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

export interface ToastType {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  duration: number;
  position: ToastPosition;
}

export interface ToastContextValue {
  toasts: ToastType[];
  add: (toast: ToastProps) => string;
  update: (id: string, toast: Partial<ToastType>) => void;
  remove: (id: string) => void;
}

export type ToastProps = Partial<Omit<ToastType, "id">> & {
  style?: React.CSSProperties;
};
