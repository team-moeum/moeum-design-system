export type ToggleStatus = "on" | "off";

export interface ToggleProps {
  className?: string;
  status?: ToggleStatus;
  disabled?: ToggleStatus;
  onChange?: (checked: boolean) => void;
}
