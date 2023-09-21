import './ItemCard.css';

const ItemCard = ({item, onSelectCard}) => {
  return (
    <div className="card__item">
      <div className="card__name">{item.name}</div>
      <div>
        <img src={item.link} className="card__image" onClick={() => onSelectCard(item)} />
      </div>
    </div>
  );
};

export default ItemCard;