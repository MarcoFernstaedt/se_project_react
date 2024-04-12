import { useEscape } from "../../hooks/useEscape";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemModal.css";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, openModal, buttonText }) => {
  const { currentUser } = useContext(CurrentUserContext);
  // use userContext
  useEscape(onClose);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className="modal modal-preview">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={`${selectedCard.name}`}
        />
        <div className="modal__description-wrap">
          <div className="modal__description">
            <div>{selectedCard.name}</div>
            <div>Weather: {selectedCard.weather}</div>
          </div>
          <div className="modal__button-wrap">
            <button
              onClick={openModal}
              type="button"
              className={itemDeleteButtonClassName}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
