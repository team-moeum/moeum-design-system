import { useIsMounted } from "@/hooks/useIsMounted";
import { createContext, ReactNode, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { Toaster } from "./Toast";
import { ToastContextValue, ToastProps, ToastType } from "./Toast.type";

export const ToastContext = createContext<ToastContextValue>({
  toasts: [],
  add: () => "",
  update: () => {},
  remove: () => {}
});

const ToastPortal = ({ children }: { children: ReactNode }) => {
  const isMounted = useIsMounted();
  const node = document.getElementById("toast-portal") as Element;

  if (!isMounted) return null;
  return createPortal(children, node);
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const add = useCallback((toast: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastType = {
      id,
      message: toast.message || "",
      duration: toast.duration ?? 3000,
      type: toast.type ?? "info",
      position: toast.position ?? "bottom-right"
    };

    setToasts(prev => [newToast, ...prev]);

    if (newToast.duration > 0) {
      setTimeout(() => remove(id), newToast.duration);
    }

    return id;
  }, []);

  const update = useCallback((id: string, toast: Partial<ToastType>) => {
    setToasts(prev => prev.map(t => (t.id === id ? { ...t, ...toast } : t)));
  }, []);

  const remove = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      toasts,
      add,
      update,
      remove
    }),
    [toasts, add, update, remove]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastPortal>{toasts.length && <Toaster toasts={toasts} />}</ToastPortal>
    </ToastContext.Provider>
  );
};
