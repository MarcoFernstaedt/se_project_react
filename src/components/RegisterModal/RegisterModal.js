import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onSubmit }) => {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values)
    onSubmit(values);
  };

  return (
    <ModalWithForm
      title="Register"
      onClose={onClose}
      // modalName="login"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name='name'
        value={values.name || ''}
        onChange={handleChange}
        placeholder="Name"
      />
      <label className="modal__label">Email</label>
      <input
        className="modal__input modal__input_type_text"
        type="email"
        name='email'
        value={values.email || ''}
        onChange={handleChange}
        placeholder="Email"
      />
      <label className="modal__label">Password</label>
      <input
        className="modal__input modal__input_type_text"
        type="password"
        name='password'
        value={values.password || ''}
        onChange={handleChange}
        placeholder="Password"
      />
      <label className="modal__label">Avatar</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name='avatar'
        value={values.avatar || ''}
        onChange={handleChange}
        placeholder="Avatar Url"
      />
      <button type="submit">Register</button>
    </ModalWithForm>
  );
};

export default RegisterModal;
