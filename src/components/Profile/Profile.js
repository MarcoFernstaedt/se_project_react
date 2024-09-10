import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  onSelectCard,
  handleOpenModal,
  clothingItems,
  handleLogOut,
  handleEditProfileModal,
}) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <Sidebar
          handleLogOut={handleLogOut}
          handleEditProfileModal={handleEditProfileModal}
        />
      </div>
      <section className="profile__clothessection">
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingItems={clothingItems}
          handleOpenModal={handleOpenModal}
        />
      </section>
    </div>
  );
};

export default Profile;
