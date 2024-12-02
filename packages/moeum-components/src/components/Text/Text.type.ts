import { AllHTMLAttributes, ElementType, CSSProperties } from "react";

export enum Typography {
  Heading = "heading",
  Body = "body",
  Text = "text"
}

export enum FontWeight {
  Regular = "regular",
  Medium = "medium",
  Bold = "bold"
}

export interface TextProps extends Omit<AllHTMLAttributes<Element>, "as"> {
  as?: ElementType;
  children?: React.ReactNode;
  className?: string;
  typography?: Typography;
  fontWeight?: FontWeight;
  color?: string;
  ellipsisLines?: number;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
}
