import { Root } from "@radix-ui/react-toggle";
import type { ToggleProps } from "./Toggle.type";

export function Toggle({ children, ...props }: ToggleProps) {
  return (
    <Root className="toggle" data-fotcamp-component="Toggle" {...props}>
      {children}
    </Root>
  );
}
