import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import { RadioGroupItemProps, RadioGroupProps } from "./RadioGroup.type";

function RadioGroupItem({ children, value, ...props }: RadioGroupItemProps) {
  return (
    <div className="radio-group-item" data-fotcamp-component="RadioGroupItem">
      <Item value={value} id={value} {...props}>
        <Indicator />
      </Item>
      <label htmlFor={value}>{children}</label>
    </div>
  );
}

export function RadioGroup({ children, ...props }: RadioGroupProps) {
  return (
    <Root className="radio-group" data-fotcamp-component="RadioGroup" {...props}>
      {children}
    </Root>
  );
}

RadioGroup.Item = RadioGroupItem;
