import { CSSProperties } from "react";
import { BoxProps } from "../Box";

export interface GridProps extends BoxProps {
  columns?: number | string;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  autoFlow?: CSSProperties["gridAutoFlow"];
  areas?: CSSProperties["gridTemplateAreas"];
}
