import './Header.css';

const Header = () => {

    return (
        <header className="header">
        <div className='header__logo-icon'>
          <img src='/images/logo.svg' alt='What to Wear Logo' />
          <div>June 15, New York</div>
        </div>
        <div className='header__avatar-icon'>
            <div>
                <button type='button'>+ Add clothes</button>
            </div>
            <div>Terrence Tegegne</div>
            <img src='/images/avatar.svg' alt='avatar logo' />
            </div>
        </header>
    )
}

export default Header;