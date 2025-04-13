import { Toaster } from "./Toast";
import { createPortal } from "react-dom";
import { useIsMounted } from "@/hooks/useIsMounted";
import { createContext, ReactNode, useState, useCallback, useMemo } from "react";
import { ToastContextValue, ToastOptions, ToastProviderProps, ToastType } from "./Toast.type";

const defaultToastValue: ToastOptions = {
  type: "default",
  action: "defualt",
  style: {},
  offest: 0,
  message: "",
  duration: 3000,
  position: "top-right"
};

export const ToastContext = createContext<ToastContextValue>({
  toasts: [],
  add: () => "",
  remove: () => {}
});

const ToastPortal = ({ children }: { children: ReactNode }) => {
  const isMounted = useIsMounted();
  const node = document.getElementById("toast-portal") as Element;

  if (!isMounted) return null;
  return createPortal(children, node);
};

export const ToastProvider = ({ options, children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const add = useCallback(
    (toast: Partial<ToastOptions>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastType = {
        ...toast,
        id,
        type: toast.type ?? options?.type ?? defaultToastValue.type,
        action: toast.action ?? options?.action ?? defaultToastValue.action,
        style: toast.style ?? options?.style ?? defaultToastValue.style,
        offest: toast.offest ?? options?.offest ?? defaultToastValue.offest,
        radius: toast.radius ?? options?.radius ?? defaultToastValue.radius,
        message: toast.message ?? options?.message ?? defaultToastValue.message,
        duration: toast.duration ?? options?.duration ?? defaultToastValue.duration,
        position: toast.position ?? options?.position ?? defaultToastValue.position
      };

      setToasts(prev => [newToast, ...prev]);

      if (newToast.duration > 0) {
        setTimeout(() => remove(id), newToast.duration);
      }

      return id;
    },
    [options]
  );

  const remove = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      toasts,
      add,
      remove
    }),
    [toasts, add, remove]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastPortal>{toasts.length && <Toaster toasts={toasts} />}</ToastPortal>
    </ToastContext.Provider>
  );
};
