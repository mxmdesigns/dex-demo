import classNames from "classnames";
import React from "react";
import "../../styles/Split/Modal";

type ModalProps = {
  content?: React.ReactNode | null;
  title: string | null;
  setModal: (_) => void;
};

export const Modal = ({ content, title, setModal }: ModalProps) => {
  const modalClasses = classNames("modal", { open: content && title });

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModal(null);
    }
  };

  return (
    <div onClick={closeModal} className={modalClasses}>
      <div className="modal__content">
        <div className="modal__content-header">
          <span>{title}</span>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal__content-wrapper">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
