import React, { ReactNode, MouseEventHandler } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

type ModalSectionProps = {
  children: ReactNode;
};

function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}

function ModalHeader({ children }: ModalSectionProps) {
  return <div className="modal-header">{children}</div>;
}

function ModalBody({ children }: ModalSectionProps) {
  return <div className="modal-body">{children}</div>;
}

function ModalFooter({ children }: ModalSectionProps) {
  return <div className="modal-footer">{children}</div>;
}

// Attach subcomponents
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
