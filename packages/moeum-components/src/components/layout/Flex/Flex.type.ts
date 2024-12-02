import { CSSProperties } from "react";
import { BoxProps } from "../Box";

export interface FlexProps extends BoxProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  flex?: CSSProperties["flex"];
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  gap?: number;
}
