import './CardItem.css';

const CardItem = ({item}) => {
  return (
    <div className="card__items">
      <div>
        <img src={item.link} className="card__image" />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default CardItem;