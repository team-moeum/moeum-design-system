export type InputTypes = "text" | "file";
export type InputDisplay = "line" | "box";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputTypes;
  display?: InputDisplay;
  disabled?: boolean;
  error?: boolean;
  onClear?: () => void;
  className?: string;
}
