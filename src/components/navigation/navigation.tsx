import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Navigation(): JSX.Element {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="main-nav__link" to={AppRoute.Main}>
            Каталог
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="#">
            Гарантии
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="#">
            Доставка
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="#">
            О компании
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
