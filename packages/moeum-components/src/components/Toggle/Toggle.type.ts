export type ToggleStates = "active" | "inactive";

export interface ToggleProps {
  className?: string;
  states?: ToggleStates;
  onChange?: (checked: boolean) => void;
}
