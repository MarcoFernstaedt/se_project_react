import "./Header.css";

const Header = ({onCreateModal}) => {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  
  return (
    <header className="header">
      <div className="header__logo-icon">
        <img src={require('../../images/logo.svg').default} />
        <div>{currentDate}</div>
      </div>
      <div className="header__avatar-icon">
        <div>
          <button type="text" onClick={onCreateModal} >+ Add clothes</button>
        </div>
        <div>Terrence Tegegne</div>
        <img src={require("../../images/avatar.svg").default} alt="avatar logo" />
      </div>
    </header>
  );
};

export default Header;
