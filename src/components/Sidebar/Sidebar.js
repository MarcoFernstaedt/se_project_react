import { useContext } from "react";
// import avatarImage from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Sidebar.css";

const Sidebar = (handleOpenEditProfileModal, handleLogOut) => {
  const [currentUser] = useContext(CurrentUserContext);

  return (
    <>
      <div
        className="sidebar__avatar-image"
       >
        <img src={currentUser.avatar} alt="Your avatar" />
      </div>
      <div className="sidebar__profile-info" >currentUser.name</div>
      <p onClick={handleOpenEditProfileModal}>CHange profile data</p>
      <p onClick={handleLogOut}>Log out</p>
    </>
  );
};

export default Sidebar;
