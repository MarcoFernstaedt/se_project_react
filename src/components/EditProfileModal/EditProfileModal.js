import React, { useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

const EditProfileModal = ({ buttonText, onClose, isOpen, onSubmit }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({ name: "", avatar: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    setValues({
      name: currentUser.name || "",
      avatar: currentUser.avatar || "",
    });
  }, [currentUser, setValues]);

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
        name="name"
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />
      <label className="modal__label">Avatar</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="avatar"
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
