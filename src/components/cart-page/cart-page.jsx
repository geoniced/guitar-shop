import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import {AppRoute} from "../../const";
import electroGuitar1 from "../../assets/img/electro-1.png";
import electroGuitar2 from "../../assets/img/electro-2.png";

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
          <ul className="cart-checkout__orders">
            <li className="cart-checkout__order-item order-card">
              <h3 className="order-card__title">ЭлектроГитара Честер bass</h3>
              <p className="order-card__vendor-code">Артикул: SO757575</p>
              <p className="order-card__guitar-info">Электрогитара, 6 струнная</p>

              <img className="order-card__image" src={electroGuitar1} alt="ЭлектроГитара Честер bass" width="48" height="124" />

              <p className="order-card__original-price">17 500 ₽</p>

              <div className="order-card__amount-wrapper">
                <label htmlFor="checkout-order-amount-1" className="visually-hidden">Количество товара</label>
                <button className="order-card__amount-button order-card__amount-button--minus" type="button">
                  <span className="visually-hidden">Уменьшить</span>
                </button>
                <input type="number" name="checkout-order-amount-1" id="checkout-order-amount-1" />
                <button className="order-card__amount-button order-card__amount-button--plus" type="button">
                  <span className="visually-hidden">Увеличить</span>
                </button>
              </div>

              <p className="order-card__total-price">17 500 ₽</p>

              <button className="order-card__delete-order" type="button">

                <span className="visually-hidden">Удалить товар</span>
              </button>
            </li>

            <li className="cart-checkout__order-item order-card">
              <h3 className="order-card__title">Электрогитара СURT Z300</h3>
              <p className="order-card__vendor-code">Артикул: AO757599</p>
              <p className="order-card__guitar-info">Электрогитара, 6 струнная</p>

              <img className="order-card__image" src={electroGuitar2} alt="Электрогитара СURT Z300" width="48" height="124" />

              <p className="order-card__original-price">29 500 ₽</p>

              <div className="order-card__amount-wrapper">
                <label htmlFor="checkout-order-amount-2" className="visually-hidden">Количество товара</label>
                <button className="order-card__amount-button order-card__amount-button--minus" type="button">
                  <span className="visually-hidden">Уменьшить</span>
                </button>
                <input type="number" name="checkout-order-amount-2" id="checkout-order-amount-2" />
                <button className="order-card__amount-button order-card__amount-button--plus" type="button">
                  <span className="visually-hidden">Увеличить</span>
                </button>
              </div>

              <p className="order-card__total-price">29 500 ₽</p>

              <button className="order-card__delete-order" type="button">

                <span className="visually-hidden">Удалить товар</span>
              </button>
            </li>
          </ul>

          <section className="cart-checkout__promocode">
            <h3 className="cart-checkout__promocode-title">Промокод на скидку</h3>
            <p className="cart-checkout__promocode-description">Введите свой промокод, если он у вас есть.</p>

            <input className="cart-checkout__promocode-input" type="text" name="checkout-order-promocode" id="checkout-order-promocode" />
            <button className="cart-checkout__apply-promocode" type="button">Применить купон</button>
          </section>

          <div className="cart-checkout__order-total">
            <p className="cart-checkout__order-total-sum">Всего: 47 000 ₽ </p>
            <button type="submit">Оформить заказ</button>
          </div>
        </form>
      </section>

    </main>
  )
};

export default CartPage;
