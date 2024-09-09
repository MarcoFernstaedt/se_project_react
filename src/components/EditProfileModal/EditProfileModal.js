import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const EditProfileModal = ({ buttonText, onClose, isOpen, onSubmit }) => {
  const { values, handleChange, setValues } = useForm({});
  
  const handleSubmit = (e) => {
    console.log(`modal values - name: ${values.name} avatar: ${values.avatar}`)
    e.preventDefault();
    onSubmit(values);
  };
  
  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label className="modal__label">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name='name'
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />
      <label className="modal__label">Avatar</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name='avatar'
        value={values.avatar || ""}
        onChange={handleChange}
        placeholder="Avatar"
      />
      <div className="modal__button-container">
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
