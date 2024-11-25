import * as CheckboxBase from "@radix-ui/react-checkbox";
import classNames from "classnames";

const Root = ({ className, ...props }: CheckboxBase.CheckboxProps) => {
  return (
    <CheckboxBase.Root
      className={classNames("checkbox", className)}
      data-fotcamp-component="Checkbox"
      {...props}
    />
  );
};

const Indicator = ({ ...props }: CheckboxBase.CheckboxIndicatorProps) => {
  <CheckboxBase.Indicator data-fotcamp-component="CheckboxIndicator" {...props} />;
};

export default {
  Root,
  Indicator
};
