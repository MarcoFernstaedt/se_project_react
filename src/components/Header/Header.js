import logo from "../../images/logo.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, weatherCity }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-date">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__date">
          {currentDate}, {weatherCity}
        </div>
      </div>
      <div className="header__button-avatar">
        <ToggleSwitch />
        <button type="button" onClick={onCreateModal} className="header__button">
          + Add Clothes
        </button>
        <Link to='/profile'>
        <p className="header__username">Terrence Tegegne</p>
        <img className="header__avatar" src={avatarImage} alt="avatar" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
