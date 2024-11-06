export const TextFieldSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const TextFieldVariant = {
  CLASSIC: "classic",
  SURFACE: "surface",
  SOFT: "soft",
} as const;

export const TextFieldRadius = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FULL: "full",
} as const;

type ValueOf<T> = T[keyof T];

export type TextFieldSize = ValueOf<typeof TextFieldSize>;
export type TextFieldVariant = ValueOf<typeof TextFieldVariant>;
export type TextFieldRadius = ValueOf<typeof TextFieldRadius>;

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  radius?: TextFieldRadius;
  error?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}
