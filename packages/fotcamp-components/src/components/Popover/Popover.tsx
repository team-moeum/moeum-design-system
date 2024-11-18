import { Root, Trigger, Content, Portal } from "@radix-ui/react-popover";
import { ComponentProps } from "react";

export type PopoverRootProps = ComponentProps<typeof Root>;
export type PopoverTriggerProps = ComponentProps<typeof Trigger>;
export type PopoverContentProps = ComponentProps<typeof Content>;

/**
 * prop modal 이름 변경 -> locked
 */
const Popover = ({ ...props }: PopoverRootProps) => {
  return (
    <Root data-fotcamp-component="Popover" {...props}>
      {props.children}
    </Root>
  );
};

const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  return (
    <Trigger data-fotcamp-component="PopoverTrigger" asChild {...props}>
      {props.children}
    </Trigger>
  );
};

const PopoverContent = ({ sideOffset = 4, align = "center", ...props }: PopoverContentProps) => {
  return (
    <Portal data-fotcamp-component="PopoverPortal">
      <Content
        sideOffset={sideOffset}
        align={align}
        data-fotcamp-component="PopoverContent"
        className="popover-content"
        {...props}
      >
        {props.children}
      </Content>
    </Portal>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
