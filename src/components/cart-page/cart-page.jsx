import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import {AppRoute} from "../../const";
import CartCheckout from "../cart-checkout/cart-checkout";

const CartPage = () => {
  return (
    <main className="page-content page-content--basket">
      <div className="page-content__wrapper container">
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

        <CartCheckout />
      </div>
    </main>
  );
};

export default CartPage;
