import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import {ReactComponent as IconMap} from "../../assets/img/icon-map.svg";
import {ReactComponent as IconSearch} from "../../assets/img/icon-search.svg";
import {ReactComponent as IconCart} from "../../assets/img/icon-basket.svg";
import {AppRoute} from "../../const";
import Logo from "../logo/logo";
import LinkToRoot from "../link-to-root/link-to-root";
import {connect} from "react-redux";
import {getCartItemsCount} from "../../store/selectors";

const PageHeader = (props) => {
  const {cartItemsCount} = props;

  return (
    <header className="page-header">
      <nav className="page-header__main-navigation main-navigation container">
        <Logo
          className="main-navigation__logo"
          logo={logo}
        />

        <ul className="main-navigation__site-navigation site-navigation">
          <li className="site-navigation__item">
            <LinkToRoot className="site-navigation__link">Каталог</LinkToRoot>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Где купить?</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">О компании</a>
          </li>
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Cервис-центры</a>
          </li>
        </ul>

        <ul className="main-navigation__user-navigation user-navigation">
          <li className="user-navigation__item">
            <a href="#" className="user-navigation__link">
              <IconMap className="user-navigation__icon user-navigation__icon--map" />
              <span className="visually-hidden">Карта</span>
            </a>
          </li>
          <li className="user-navigation__item">
            <a href="#" className="user-navigation__link">
              <IconSearch className="user-navigation__icon user-navigation__icon--search" />
              <span className="visually-hidden">Поиск</span>
            </a>
          </li>
          <li className="user-navigation__item">
            <Link to={AppRoute.CART} className="user-navigation__link user-navigation__link--cart">
              <IconCart className="user-navigation__icon user-navigation__icon--cart" />
              <span className="visually-hidden">Корзина</span>
              {cartItemsCount > 0 && (
                <span className="user-navigation__cart-items-number">{cartItemsCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

PageHeader.propTypes = {
  cartItemsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cartItemsCount: getCartItemsCount(state),
});

export default connect(mapStateToProps)(PageHeader);
