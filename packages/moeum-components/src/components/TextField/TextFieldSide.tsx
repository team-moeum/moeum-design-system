import { isIcon } from "../../shared/icon";
import { TextFieldSize } from "./TextField.type";

export function TextFieldSide({
  size,
  children
}: {
  size: TextFieldSize;
  children: React.ReactNode;
}) {
  if (isIcon(children)) {
    return <>To-Do Icon</>;
    // return <Icon source={children} size={size} />;
  }

  return <>{children}</>;
}
