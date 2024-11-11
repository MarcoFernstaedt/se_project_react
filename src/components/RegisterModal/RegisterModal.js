import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  buttonText,
  openLoginModal,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { values, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm
      title="Register"
      onClose={onClose}
      buttonText={buttonText}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
      </label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        id="name"
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />
      <label htmlFor="email" className="modal__label">
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
      <label htmlFor="password" className="modal__label">
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
      <label htmlFor="avatar" className="modal__label">
        Avatar
      </label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="avatar"
        id="avatar"
        value={values.avatar || ""}
        onChange={handleChange}
        placeholder="Avatar Url"
      />
      <div className="modal__button-container">
        <button className="modal__primary-button" type="submit">
          {buttonText}
        </button>
        <button
          className="modal__secondary-button"
          onClick={openLoginModal}
          type="button"
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
