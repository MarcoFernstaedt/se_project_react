const ItemModal = ({selectedCard, onClose}) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}></button>
        <img className="modal__image" src={selectedCard.link} alt={`picture of a ${selectedCard.name}`} />
        <div>{selectedCard.name}</div>
        <div>Weather: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
