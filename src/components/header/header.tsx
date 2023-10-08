import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import FormSearch from '../form-search/form-search';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <Navigation />
        <FormSearch />
        <Link className="header__basket-link" to="#">
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
