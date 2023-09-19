import './CardItem.css';

const CardItem = ({item}) => {
  return (
    <div className="card__item">
      <div className="card__name">{item.name}</div>
      <div>
        <img src={item.link} className="card__image" />
      </div>
    </div>
  );
};

export default CardItem;