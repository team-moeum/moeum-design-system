import { Fragment, useEffect, useState } from "react";
import { ToastPosition, ToastProps, ToastType } from "./Toast.type";
import cx from "classnames";
import { useToastStack } from "./useToastStack";
import { useIsMounted } from "@/hooks/useIsMounted";

export const Toaster = ({ toasts }: { toasts: ToastType[] }) => {
  const { getToasterProps, groupedToasts } = useToastStack(toasts);

  return (
    <Fragment>
      {(Object.entries(groupedToasts) as [ToastPosition, ToastType[]][]).map(
        ([position, positionToasts]) =>
          positionToasts.length > 0 && (
            <div key={position} className="toaster-content">
              {positionToasts.map((toast, idx) => {
                const toasterProps = getToasterProps(toast, idx, position as ToastPosition);

                return (
                  <div key={toast.id} {...toasterProps}>
                    <Toast {...toast} />
                  </div>
                );
              })}
            </div>
          )
      )}
    </Fragment>
  );
};

export const Toast = ({ style, ...toast }: ToastProps) => {
  const isMounted = useIsMounted();
  const [visible, setVisible] = useState(false);
  const isTop = toast.position?.includes("top");
  const positionClass = isTop ? "top" : "bottom";

  useEffect(() => {
    if (isMounted) {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, toast.duration! - 500);

    return () => clearTimeout(timer);
  }, [isMounted]);

  return (
    <div
      className={cx("toast-content", positionClass, {
        visible: visible,
        hidden: !visible
      })}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      {toast.message}
    </div>
  );
};
