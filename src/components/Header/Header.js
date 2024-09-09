import logo from "../../images/logo.svg";
// import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";

const Header = ({
  onLoginModal,
  onRegisterModal,
  onCreateModal,
  weatherCity,
}) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-date">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />{" "}
        </Link>
        <div className="header__date">
          {currentDate}, {weatherCity}
        </div>
      </div>
      <div className="header__button-avatar">
        <ToggleSwitch />
        <button
          type="button"
          onClick={onCreateModal}
          className="header__button"
        >
          + Add Clothes
        </button>
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="header__username">
              <p>{currentUser.name}</p>
            </Link>
            {currentUser.avatar ? (
              <img
                className="header__avatar"
                src={currentUser.avatar}
                alt="avatar"
              />
            ) : (
              <img
                className="header__avatar"
                src={currentUser.name.charAt(0)}
                alt="avatar"
              />
            )}
          </>
        ) : (
          <>
            <button
              onClick={onLoginModal}
              className="header__button"
              type="button"
            >
              Login
            </button>
            <button
              onClick={onRegisterModal}
              className="header__button"
              type="button"
            >
              Register
            </button>
          </>
        )}

        {/* <Link to="/profile" className="header__username">
          <p>Terrence Tegegne</p>
        </Link>
        <img className="header__avatar" src={avatarImage} alt="avatar" /> */}
      </div>
    </header>
  );
};

export default Header;
