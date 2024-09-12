import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);

  // Check if the item is liked by the current user
  const isLiked = currentUser && item.likes.includes(currentUser._id);

  // Define className based on whether the item is liked
  const itemLikeButtonClassName = `itemCard__button-like ${
    isLiked ? "itemCard__button-like_active" : "itemCard__button-like_inactive"
  }`;

  const handleLikes = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="itemCard">
      <div className="itemCard__header">
        <h3 className="itemCard__name">{item.name}</h3>
        {currentUser && (
          <button
            className={itemLikeButtonClassName}
            onClick={handleLikes}
            aria-label={isLiked ? "Unlike item" : "Like item"}
          ></button>
        )}
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
