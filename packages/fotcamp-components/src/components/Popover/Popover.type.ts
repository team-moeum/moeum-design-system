import * as PopverPropsBase from "@radix-ui/react-popover";

type RootProps = {
  locked?: boolean;
} & Omit<PopverPropsBase.PopoverProps, "modal">;

type TriggerProps = PopverPropsBase.PopoverTriggerProps;

type ContentProps = PopverPropsBase.PopoverContentProps;

export { RootProps, TriggerProps, ContentProps };
