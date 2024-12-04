type Direction = "left" | "right" | "top" | "bottom";
type DirectionMap<T> = Record<Direction, T>;

export const POSITION_MAP: DirectionMap<Partial<Record<"top" | "right" | "bottom" | "left", 0>>> = {
  left: { top: 0, bottom: 0, left: 0 },
  right: { top: 0, bottom: 0, right: 0 },
  top: { top: 0, left: 0, right: 0 },
  bottom: { bottom: 0, left: 0, right: 0 }
};

export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  locked?: boolean;
  zIndex?: number;
  direction?: Direction;
  className?: string;
  children?: React.ReactNode;
}
