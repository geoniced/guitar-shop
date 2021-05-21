import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import {AppRoute} from "../../const";

const CartPage = () => {
  return (
    <main className="page-content container">
      <h1 className="page-content__title">Корзина</h1>

      <ul className="page-content__breadcrumbs breadcrumbs">
        <li className="breadcrumbs__item">
          <Link to={AppRoute.ROOT} className="breadcrumbs__link">Главная</Link>
        </li>
        <li className="breadcrumbs__item breadcrumbs__item--arrow">
          <IconArrowRight className="breadcrumbs__arrow" />
        </li>
        <li className="breadcrumbs__item">
          <Link to={AppRoute.ROOT} className="breadcrumbs__link">Каталог</Link>
        </li>
        <li className="breadcrumbs__item breadcrumbs__item--arrow">
          <IconArrowRight className="breadcrumbs__arrow" />
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link breadcrumbs__link--current">Оформляем</a>
        </li>
      </ul>

      <section className="page-content__cart-checkout cart-checkout">
        <h2 className="visually-hidden">Оформление заказа</h2>

        <form action="#" className="cart-checkout__form">

        </form>
      </section>

    </main>
  )
};

export default CartPage;
