import "./Modal.css";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div>
        <span className="close-modal" onClick={onClose}>
          x
        </span>
        <div className="modal">{children}</div>
      </div>
    </div>
  );
};
