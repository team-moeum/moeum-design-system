import React from "react";
import {
  Content,
  Group,
  Item,
  ItemText,
  Label,
  Portal,
  Root,
  Trigger,
  Value,
  Viewport
} from "@radix-ui/react-select";
import { SelectProps } from "./Select.type";

export const Select: React.FC<SelectProps> = ({
  placeholder = "Select",
  options,
  groups,
  value,
  onChange,
  disabled = false
}) => {
  return (
    <div className="select" data-fotcamp-component="Select">
      <Root value={value} onValueChange={onChange} disabled={disabled}>
        <Trigger className="SelectTrigger">
          <Value placeholder={placeholder} />
        </Trigger>
        <Portal>
          <Content className="SelectContent">
            <Viewport className="SelectViewport">
              {options && (
                <Group className="SelectGroup">
                  {options?.map(option => (
                    <Item
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                      className="SelectItem"
                    >
                      <ItemText>{option.label}</ItemText>
                    </Item>
                  ))}
                </Group>
              )}
              {groups &&
                groups?.map((group, index) => (
                  <Group className="SelectGroup" key={index}>
                    <Label className="SelectLabel">{group.label}</Label>
                    {group.options.map(option => (
                      <Item
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        className="SelectItem"
                      >
                        <ItemText>{option.label}</ItemText>
                      </Item>
                    ))}
                  </Group>
                ))}
            </Viewport>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};
