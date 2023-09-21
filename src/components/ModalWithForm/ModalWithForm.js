import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  modalName,
}) => {
  return (
    <div className={`modal modal_type_${modalName}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}></button>
        <h3 className="modal__title">{title}</h3>
        <form className="form">{children}</form>
        <button className="modal__button" type="submit" disabled>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
