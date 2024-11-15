import { Root, Indicator } from "@radix-ui/react-checkbox";
import { CheckboxProps } from "./Checkbox.type";

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <Root className="checkbox" data-fotcamp-component="Checkbox" {...props}>
      <Indicator>{children}</Indicator>
    </Root>
  );
}
