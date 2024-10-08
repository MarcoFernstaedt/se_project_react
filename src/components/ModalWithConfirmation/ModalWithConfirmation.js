import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ModalWithConfirmation.css";

const ModalWithConfirmation = ({ isSelectedCard, onClose, isOpen, onSubmit, buttonText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(isSelectedCard._id);
  };

  return (
    <ModalWithForm
      title="Confirm Deletion"
      buttonText="Delete"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="modal"
    >
      <p className="modal__text">Are you sure you want to delete this item?</p>
      <div className="modal__button-wrap">
        <button type="submit" className="confirmmodal__buttons">
          {buttonText}
        </button>
        <button
          onClick={onClose}
          className="confirmmodal__buttons"
          type="button"
        >
          Cancel
        </button>
      </div>
    </ModalWithForm>
  );
};

export default ModalWithConfirmation;
