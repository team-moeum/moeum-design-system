import * as PopoverBase from "@radix-ui/react-popover";
import * as PopoverPropsBase from "./Popover.type";

const Root = ({ locked, ...props }: PopoverPropsBase.RootProps) => {
  return <PopoverBase.Root data-fotcamp-component="Popover" modal={locked} {...props} />;
};

const Trigger = ({ ...props }: PopoverPropsBase.TriggerProps) => {
  return <PopoverBase.Trigger data-fotcamp-component="PopoverTrigger" asChild {...props} />;
};

const Content = ({ sideOffset = 4, align = "center", ...props }: PopoverPropsBase.ContentProps) => {
  return (
    <PopoverBase.Portal data-fotcamp-component="PopoverPortal">
      <PopoverBase.Content
        sideOffset={sideOffset}
        align={align}
        data-fotcamp-component="PopoverContent"
        className="popover-content"
        {...props}
      >
        {props.children}
      </PopoverBase.Content>
    </PopoverBase.Portal>
  );
};

export { Root, Trigger, Content };
