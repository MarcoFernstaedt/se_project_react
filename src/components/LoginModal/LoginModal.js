import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={onClose}
      // modalName="login"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Email</label>
      <input
        className="modal__input modal__input_type_text"
        type="email"
        name="email"
        value={values.email || ""}
        onChange={handleChange}
        placeholder="Email"
      />
      <label className="modal__label">Password</label>
      <input
        className="modal__input modal__input_type_text"
        type="password"
        name="password"
        value={values.password || ""}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <button type="button">or Register</button>
    </ModalWithForm>
  );
};

export default LoginModal;
