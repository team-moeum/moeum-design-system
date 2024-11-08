import {
  TextFieldRadius,
  TextFieldSize,
  TextFieldVariant,
} from "../TextField.type";

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  radius?: TextFieldRadius;
  error?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}
