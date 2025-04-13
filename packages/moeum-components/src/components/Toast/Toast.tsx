import cx from "classnames";
import { SwitchCase } from "@/shared/components/SwitchCase";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useToastStack } from "./useToastStack";
import { ToastPosition, ToastProps, ToastType } from "./Toast.type";
import { Fragment, useEffect, useMemo, useState } from "react";
import SuccessIcon from "./assets/toast-success.svg?react";
import WarningIcon from "./assets/toast-warning.svg?react";
import ErrorIcon from "./assets/toast-error.svg?react";

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
  const { width, type, action, position, offest, duration, style, message, buttonText, onAction } =
    toast;

  const isMounted = useIsMounted();
  const [visible, setVisible] = useState(false);
  const isTop = position?.includes("top");
  const positionClass = isTop ? "top" : "bottom";

  const offsetStyle = useMemo(() => {
    const offsetValue = offest;

    return isTop ? { top: offsetValue + "px" } : { bottom: offsetValue + "px" };
  }, [isTop, offest]);

  useEffect(() => {
    if (isMounted) {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration! - 500);

    return () => clearTimeout(timer);
  }, [isMounted]);

  return (
    <div
      data-mouem-component="Toast"
      className={cx("toast--content", positionClass, {
        visible: visible,
        hidden: !visible
      })}
      style={{
        width: width,
        visibility: visible ? "visible" : "hidden",
        ...offsetStyle,
        ...style
      }}
    >
      <div className="toast--type-message">
        <div className="toast--type-icon" data-toast-type={type}>
          <SwitchCase
            value={type || "default"}
            caseBy={{
              success: <SuccessIcon />,
              warning: <WarningIcon />,
              error: <ErrorIcon />
            }}
            defaultComponent={null}
          />
        </div>
        <div className="toast--message">{message}</div>
      </div>

      <SwitchCase
        value={action || "defualt"}
        caseBy={{
          "icon-link": (
            <button className="toast--action-link" onClick={onAction}>
              링크→
            </button>
          ),
          "icon-button": (
            <button className="toast--action-button" onClick={onAction}>
              {buttonText}
            </button>
          )
        }}
        defaultComponent={null}
      />
    </div>
  );
};
