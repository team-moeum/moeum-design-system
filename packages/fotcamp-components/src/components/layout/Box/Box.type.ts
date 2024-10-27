import { AllHTMLAttributes, ElementType, CSSProperties } from "react";
import { SpacingProps } from "../../../utils/getSpacingStyle";

export interface BoxProps extends Omit<AllHTMLAttributes<HTMLElement>, "as">, SpacingProps {
  as?: ElementType;
  className?: string;
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  display?: CSSProperties["display"];
}
