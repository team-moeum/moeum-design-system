const Typography = {
  Heading: "heading",
  Body: "body",
  Text: "text",
  Body2: "body2",
  Body3: "body3",
} as const;

export type TypographyValue = (typeof Typography)[keyof typeof Typography];

const FontWeight = {
  Regular: "regular",
  Medium: "medium",
  Bold: "bold",
} as const;

export type FontWeightValue = (typeof FontWeight)[keyof typeof FontWeight];

export interface TextProps extends Omit<AllHTMLAttributes<Element>, "as"> {
  as?: ElementType;
  children?: React.ReactNode;
  className?: string;
  typography?: TypographyValue;
  fontWeight?: FontWeightValue;
  color?: string;
  ellipsisLines?: number;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
}
