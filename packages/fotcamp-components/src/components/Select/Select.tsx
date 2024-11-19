import * as SelectBase from "@radix-ui/react-select";
import classNames from "classnames";
import { SelectProps } from "./Select.type";

const Root = ({ className, ...props }: SelectProps) => {
  return (
    <div className={classNames("select", className)}>
      <SelectBase.Root data-fotcamp-component="Select" {...props} />
    </div>
  );
};

const Trigger = ({ ...props }: SelectBase.SelectTriggerProps) => {
  return <SelectBase.Trigger data-fotcamp-component="SelectTrigger" {...props} />;
};

const Portal = ({ ...props }: SelectBase.SelectPortalProps) => {
  return <SelectBase.Portal data-fotcamp-component="SelectPortal" {...props} />;
};

const Content = ({ ...props }: SelectBase.SelectContentProps) => {
  return <SelectBase.Content data-fotcamp-component="SelectContent" {...props} />;
};

const Viewport = ({ ...props }: SelectBase.SelectViewportProps) => {
  return <SelectBase.Viewport data-fotcamp-component="SelectViewport" {...props} />;
};

const Group = ({ ...props }: SelectBase.SelectGroupProps) => {
  return <SelectBase.Group data-fotcamp-component="SelectGroup" {...props} />;
};

const Item = ({ ...props }: SelectBase.SelectItemProps) => {
  return <SelectBase.Item data-fotcamp-component="SelectItem" {...props} />;
};

const Label = ({ ...props }: SelectBase.SelectLabelProps) => {
  return <SelectBase.Label data-fotcamp-component="SelectLabel" {...props} />;
};

const ItemText = ({ ...props }: SelectBase.SelectItemTextProps) => {
  return <SelectBase.ItemText data-fotcamp-component="SelectItemText" {...props} />;
};

const Value = ({ ...props }: SelectBase.SelectValueProps) => {
  return <SelectBase.Value data-fotcamp-component="SelectValue" {...props} />;
};

export default {
  Root,
  Trigger,
  Portal,
  Content,
  Viewport,
  Group,
  Item,
  Label,
  ItemText,
  Value
};
