export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps {
  placeholder?: string;
  options?: SelectOption[];
  groups?: SelectGroup[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}
