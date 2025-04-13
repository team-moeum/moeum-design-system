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

  const defaultOptions = options;

  const add = useCallback(
    (toast: Partial<ToastOptions>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastType = {
        ...toast,
        id,
        type: toast.type ?? defaultOptions?.type ?? defaultToastValue.type,
        action: toast.action ?? defaultOptions?.action ?? defaultToastValue.action,
        style: toast.style ?? defaultOptions?.style ?? defaultToastValue.style,
        offest: toast.offest ?? defaultOptions?.offest ?? defaultToastValue.offest,
        radius: toast.radius ?? defaultOptions?.radius ?? defaultToastValue.radius,
        message: toast.message ?? defaultOptions?.message ?? defaultToastValue.message,
        duration: toast.duration ?? defaultOptions?.duration ?? defaultToastValue.duration,
        position: toast.position ?? defaultOptions?.position ?? defaultToastValue.position
      };

      setToasts(prev => [newToast, ...prev]);

      if (newToast.duration > 0) {
        setTimeout(() => remove(id), newToast.duration);
      }

      return id;
    },
    [defaultOptions]
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
