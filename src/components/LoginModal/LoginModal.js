import { useForm } from "../../hooks/useForm";
import ModalWithForm from '../ModalWithForm';

const LoginModal = ({ isOpen, onClose, onSubmit }) => {
    const {values, handleChange, setValues} = useForm({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const [email, password] = values
      onSubmit({ email, password });
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
        <input type="email" value={values.email} onChange={handleChange} placeholder="Email" />
        <label className="modal__label">Password</label>
        <input type="password" value={values.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
      </ModalWithForm>
    );
  };
  
  export { LoginModal };