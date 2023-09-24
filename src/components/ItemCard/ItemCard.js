import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="itemCard">
      <h3 className="itemCard__name">{item.name}</h3>
      <img
        src={item.link}
        className="itemCard__image"
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
