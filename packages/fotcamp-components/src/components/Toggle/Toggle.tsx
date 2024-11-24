import * as ToggleBase from "@radix-ui/react-toggle";
import classNames from "classnames";

const Root = ({ className, ...props }: ToggleBase.ToggleProps) => {
  return (
    <ToggleBase.Root
      className={classNames("toggle", className)}
      data-fotcamp-component="Toggle"
      {...props}
    />
  );
};

export default { Root };
