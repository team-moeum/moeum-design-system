import { Dialog } from "radix-ui";
import { ReactNode } from "react";

export interface BasePopupProps extends Dialog.DialogProps {
  children?: ReactNode;
  className?: string;
  container?: Element | DocumentFragment | null;
  title?: string;
  description?: string;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}

interface TypeAPopupProps extends BasePopupProps {
  buttonLayoutType: "typeA";
  button?: React.ReactNode;
}

interface TypeBPopupProps extends BasePopupProps {
  buttonLayoutType: "typeB";
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
}

export type PopupProps = TypeAPopupProps | TypeBPopupProps;
