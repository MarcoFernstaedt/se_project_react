 import { useContext } from "react";
// import avatarImage from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Sidebar.css";

const Sidebar = (handleOpenEditProfileModal, handleLogOut) => {
  const [currentUser, isLoggedIn] = useContext(CurrentUserContext);

  return (
    <>
      <div
        onClick={handleOpenEditProfileModal}
        className="sidebar__avatar-image"
      >
        <img src={currentUser.avatar} alt="Your avatar" />
      </div>
      <div className="sidebar__profile-info">currentUser.name</div>
    </>
  );
};

export default Sidebar;
