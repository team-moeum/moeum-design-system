export interface BoxProps extends Omit<AllHTMLAttributes<HTMLElement>, "as"> {
  as?: ElementType;
  className?: string;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  display?: CSSProperties["display"];
}
