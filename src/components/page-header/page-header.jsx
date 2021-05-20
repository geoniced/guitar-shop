import React from "react";
import logo from "../../assets/img/logo.svg";

const PageHeader = () => {
  return (
    <header className="page-header">
      <nav className="page-header__main-navigation main-navigation">
        <a className="main-navigation__logo logo">
          <img className="logo__image" src={logo} alt="Логотип Guitar Shop" width="67" height="70"/>
        </a>

        <ul className="main-navigation__site-navigation site-navigation">
          <li className="site-navigation__item">
            <a href="#" className="site-navigation__link">Каталог</a>
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
              <span className="visually-hidden">Карта</span>
            </a>
          </li>
          <li className="user-navigation__item">
            <a href="#" className="user-navigation__link">
              <span className="visually-hidden">Поиск</span>
            </a>
          </li>
          <li className="user-navigation__item">
            <a href="#" className="user-navigation__link">
              <span className="visually-hidden">Корзина</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default PageHeader;
