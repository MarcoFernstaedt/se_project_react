import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithConfirmation/ModalWithConfirmation.css";

const LoginModal = ({
  buttonText,
  isOpen,
  onClose,
  openRegisterModal,
  onSubmit,
}) => {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={onClose}
      buttonText={buttonText}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label for="email" className="modal__label">
        Email
      </label>
      <input
        className="modal__input modal__input_type_text"
        type="email"
        name="email"
        id="email"
        value={values.email || ""}
        onChange={handleChange}
        placeholder="Email"
      />
      <label for="password" className="modal__label">
        Password
      </label>
      <input
        className="modal__input modal__input_type_text"
        type="password"
        name="password"
        id="password"
        value={values.password || ""}
        onChange={handleChange}
        placeholder="Password"
      />
      <div className="modal__button-container">
        <button className="modal__primary-button" type="submit">
          {buttonText}
        </button>
        <button
          className="modal__secondary-button"
          onClick={openRegisterModal}
          type="button"
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
