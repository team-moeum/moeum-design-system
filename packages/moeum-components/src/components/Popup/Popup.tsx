import { Dialog } from "radix-ui";
import cx from "classnames";
import { PopupProps } from "./Popup.type";
import "./Popup.scss";

export const Popup: React.FC<PopupProps> = props => {
  const { className, children, buttonLayoutType, container, title, description, onClose, ...rest } =
    props;

  return (
    <Dialog.Root {...rest} defaultOpen>
      <Dialog.Portal container={container || document.body}>
        <Dialog.Overlay className="popup--overlay" onClick={onClose} />
        <Dialog.Content
          data-moeum-component="Popup"
          className={cx(
            "popup",
            {
              [`popup--layout-${buttonLayoutType}`]: buttonLayoutType
            },
            className
          )}
        >
          <Dialog.Title className="visually-hidden">{title || "Popup"}</Dialog.Title>
          <Dialog.Description className="visually-hidden">
            {description || "Popup"}
          </Dialog.Description>
          <div className="popup--body">{children}</div>
          {buttonLayoutType === "typeA" && "button" in props && props.button && (
            <div className="popup--actions">{props.button}</div>
          )}
          {buttonLayoutType === "typeB" && "leftButton" in props && "rightButton" in props && (
            <div className="popup--actions popup--actions-typeB">
              <div className="popup--actions-left">{props.leftButton}</div>
              <div className="popup--actions-right">{props.rightButton}</div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Popup;
