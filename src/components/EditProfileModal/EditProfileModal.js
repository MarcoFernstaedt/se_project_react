import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const EditProfileModal = ({ buttonText, onClose, isOpen, onSubmit }) => {
  const { values, handleChange, setValues } = useForm({});
  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={onSubmit}
      buttonText={buttonText}
    >
      <label className="modal__labal">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />
      <label className="modal__labal">Avatar</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        value={values.avatar || ""}
        onChange={handleChange}
        placeholder="Avatar"
      />
    </ModalWithForm>
  );
};

export default EditProfileModal;
