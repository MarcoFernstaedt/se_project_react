import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ handleCloseModal, isOpen, onAddItem }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [weatherType, setWeatherType] = useState('');

  const hanldeSetName = (e) => {
    setName(e.target.value);
  }

  const handleSetImageUrl = (e) => {
    setImageUrl(e.target.value)
  }

  const handleSetWeatherType = (e) => {
    setWeatherType(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({name, imageUrl, weatherType});
  }

  return (
    <ModalWithForm
      title="New Garmnet"
      buttonText="Add garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name</label>

      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
        id="name"
        onChange={hanldeSetName}
      />
      <label className="modal__label">Image</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="link"
        minLength="1"
        id="link"
        placeholder="Image URL"
        onChange={handleSetImageUrl}
      />
      <label className="modal__label">Select the weather type:</label>
      <div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weatherType"
            id="Hot"
            value="hot"
            onChange={handleSetWeatherType}
          />
          <label className="modal__label_radio" htmlFor="Hot">
            Hot
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weatherType"
            id="Warm"
            value="warm"
            onChange={handleSetWeatherType}
          />
          <label className="modal__label_radio" htmlFor="Warm">
            Warm
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            className=" modal__input_radio"
            type="radio"
            name="weatherType"
            id="Cold"
            value="cold"
            onChange={handleSetWeatherType}
          />
          <label className=" modal__label_radio" htmlFor="Cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;