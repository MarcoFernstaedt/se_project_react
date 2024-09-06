import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Sidebar.css";

const Sidebar = ({ handleEditProfileModal, handleLogOut }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          src={currentUser.avatar}
          alt="Avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__name">{currentUser.name}</p>
      </div>

      <button
        onClick={handleEditProfileModal}
        type="button"
        className="header__button"
      >
        Change profile data
      </button>
      <button onClick={handleLogOut} type="button" className="header__button">
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
