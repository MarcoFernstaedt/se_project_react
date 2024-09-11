import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext)
  // Check if the item was liked by the current user
  // The likes array should be an array of ids
  const isLiked = item.likes.some(id => id === currentUser._id);
  
  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = isLiked ? 'itemCard__button-like_active' : 'itemCard__button-like_inactive'

  const handleLikes = () => {
    let id = item.owner
    onCardLike({ id, isLiked });
  };
  return (
    <li className="itemCard">
      <div className="itemCard__header">
        <h3 className="itemCard__name">{item.name}</h3>
        <button
          className={`itemCard__button-like ${itemLikeButtonClassName}`}
          onClick={handleLikes}
        ></button>
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
