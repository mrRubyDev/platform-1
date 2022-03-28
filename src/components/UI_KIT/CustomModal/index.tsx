import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ICustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  style?: any;
  body?: any;
  footer?: any;
}

export default function CustomModal({
  isOpen,
  onClose,
  header,
  style,
  body,
  footer,
}: ICustomModalProps) {
  return (
    <Modal isOpen={isOpen} fade backdrop={true} toggle={onClose}>
      {header && (
        <ModalHeader charCode="X" toggle={() => onClose()}>
          {header}
        </ModalHeader>
      )}
      {body && (
        <ModalBody
          style={
            style
              ? style
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          {body}
        </ModalBody>
      )}
      {footer && (
        <ModalFooter style={{ display: "flex", justifyContent: "flex-end" }}>
          {footer}
        </ModalFooter>
      )}
    </Modal>
  );
}
