import { useState, useCallback, useMemo } from "react";
import { ToastType, ToastPosition } from "./Toast.type";
import cx from "classnames";

interface UseToastStackReturn {
  getToasterProps: (
    toast: ToastType,
    index: number,
    position: ToastPosition
  ) => {
    ref: (el: HTMLDivElement | null) => void;
    style: {
      transform: string;
      transition: string;
    };
    className: string;
  };
  groupedToasts: Record<ToastPosition, ToastType[]>;
}

export const useToastStack = (toasts: ToastType[]): UseToastStackReturn => {
  const [heights, setHeights] = useState<Record<string, number>>({});
  const GAP = 8;

  const updateHeight = useCallback((id: string, height: number) => {
    setHeights(prev => ({
      ...prev,
      [id]: height
    }));
  }, []);

  const groupedToasts = useMemo(() => {
    const groups: Record<ToastPosition, ToastType[]> = {
      "top-left": [],
      "top-center": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-center": [],
      "bottom-right": []
    };

    toasts.forEach(toast => {
      const position = toast.position;
      groups[position].push(toast);
    });

    return groups;
  }, [toasts]);

  const getToasterProps = useCallback(
    (toast: ToastType, index: number, position: ToastPosition) => {
      const positionToasts = groupedToasts[position];
      const offset = positionToasts
        .slice(0, index)
        .reduce((total, t) => total + (heights[t.id] || 0) + GAP, 0);

      const translateY = `${offset * (position.includes("top") ? 1 : -1)}px`;
      const translateX = position.includes("center") ? "-50%" : "0";

      return {
        ref: (el: HTMLDivElement | null) => {
          if (el) {
            const height = el.getBoundingClientRect().height;
            if (heights[toast.id] !== height) {
              updateHeight(toast.id, height);
            }
          }
        },
        style: {
          transform: `translate(${translateX}, ${translateY})`,
          transition: "transform 0.23s cubic-bezier(0.21, 1.02, 0.73, 1)"
        },
        className: cx("toast-wrapper", `toast-wrapper--${position}`)
      };
    },
    [heights, groupedToasts]
  );

  return {
    getToasterProps,
    groupedToasts
  };
};
