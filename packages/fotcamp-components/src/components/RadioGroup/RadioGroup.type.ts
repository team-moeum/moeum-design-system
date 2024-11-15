import {
  RadioGroupItemProps as RadioGroupItemBaseProps,
  RadioGroupProps as RadioGroupBaseProps
} from "@radix-ui/react-radio-group";

export interface RadioGroupItemProps extends Omit<RadioGroupItemBaseProps, "children"> {
  children?: React.ReactNode;
}

export interface RadioGroupProps extends Omit<RadioGroupBaseProps, "children"> {
  children?: React.ReactNode;
}
