import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./ClothingSection.css";

const ClothingSection = ({ onSelectCard, handleOpenModal, clothingItems }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <div className="clothingsection__content">
        <p className="clothingsection__header"> Your items</p>
        <button
          className="clothingsection__add-clothes-button"
          type="button"
          onClick={handleOpenModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothingsection__card-wrapper">
        {clothingItems
          .filter((item) => item.Owner === currentUser._id)
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
      </div>
    </>
  );
};

export default ClothingSection;
