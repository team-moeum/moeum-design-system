import cx from "classnames";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useToastStack } from "./useToastStack";
import { ToastPosition, ToastProps, ToastType } from "./Toast.type";
import { Fragment, useEffect, useMemo, useState } from "react";

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

export const Toast = ({ ...toast }: ToastProps) => {
  const isMounted = useIsMounted();
  const [visible, setVisible] = useState(false);
  const isTop = toast.position?.includes("top");
  const positionClass = isTop ? "top" : "bottom";

  const offsetStyle = useMemo(() => {
    const offsetValue = toast.offest;

    return isTop ? { top: offsetValue + "px" } : { bottom: offsetValue + "px" };
  }, [isTop, toast.offest]);

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
      className={cx(
        "toast-content",
        positionClass,
        {
          visible: visible,
          hidden: !visible
        },
        {
          [`toast--radius-${toast.radius}`]: toast.radius
        }
      )}
      style={{
        visibility: visible ? "visible" : "hidden",
        ...offsetStyle,
        ...toast.style
      }}
    >
      {toast.message}
      {toast.content}
    </div>
  );
};
