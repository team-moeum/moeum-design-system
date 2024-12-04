import * as TooltipBase from "@radix-ui/react-tooltip";

type TooltipProps = {
  trigger?: React.ReactNode;
  sideOffset?: number;
} & TooltipBase.TooltipProps;

export const Tooltip = ({ sideOffset = 5, trigger, children, ...props }: TooltipProps) => {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root {...props}>
        <TooltipBase.Trigger asChild>{trigger}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipBase.Content className="TooltipContent" sideOffset={sideOffset}>
            Add to library
            <TooltipBase.Arrow className="TooltipArrow" />
          </TooltipBase.Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
};
