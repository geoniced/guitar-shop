import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import {ReactComponent as IconMap} from "../../assets/img/icon-map.svg";
import {ReactComponent as IconSearch} from "../../assets/img/icon-search.svg";
import {ReactComponent as IconCart} from "../../assets/img/icon-basket.svg";
import {AppRoute} from "../../const";

const PageHeader = () => {
  return (
    <header className="page-header">
      <nav className="page-header__main-navigation main-navigation container">
        <a className="main-navigation__logo logo">
          <img className="logo__image" src={logo} alt="Логотип Guitar Shop" width="67" height="70"/>
        </a>

        <ul className="main-navigation__site-navigation site-navigation">
          <li className="site-navigation__item">
            <Link to={AppRoute.ROOT} className="site-navigation__link">Каталог</Link>
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
            <Link to={AppRoute.CART} className="user-navigation__link">
              <IconCart className="user-navigation__icon user-navigation__icon--cart" />
              <span className="visually-hidden">Корзина</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default PageHeader;
