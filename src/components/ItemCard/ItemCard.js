import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  console.log(item)
  return (
    <li className="itemCard">
      <div className="itemCard__header">
        <h3 className="itemCard__name">{item.name}</h3>
        <button className='itemCard__button-like'></button>
      </div>
      <img
        src={item.imageUrl}
        className="itemCard__image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
