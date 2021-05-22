import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";
import {ReactComponent as IconMinus} from "../../assets/img/icon-minus.svg";
import {ReactComponent as IconPlus} from "../../assets/img/icon-plus.svg";
import {AppRoute} from "../../const";
import electroGuitar1 from "../../assets/img/electro-1.png";
import electroGuitar2 from "../../assets/img/electro-2.png";

const CartPage = () => {
  return (
    <main className="page-content page-content--basket container">
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
              <div className="order-card__guitar-info-wrapper">
                <h3 className="order-card__title">ЭлектроГитара Честер bass</h3>
                <p className="order-card__vendor-code">Артикул: SO757575</p>
                <p className="order-card__guitar-info">Электрогитара, 6 струнная</p>
              </div>

              <img className="order-card__image" src={electroGuitar1} alt="ЭлектроГитара Честер bass" width="48" height="124" />

              <p className="order-card__original-price">17 500 ₽</p>

              <div className="order-card__amount-wrapper">
                <label htmlFor="checkout-order-amount-1" className="visually-hidden">Количество товара</label>
                <button className="order-card__amount-button order-card__amount-button--minus" type="button">
                  <IconMinus className="order-card__amount-icon" />
                  <span className="visually-hidden">Уменьшить</span>
                </button>
                <input className="order-card__amount-input" type="number" name="checkout-order-amount-1" id="checkout-order-amount-1" placeholder="1" />
                <button className="order-card__amount-button order-card__amount-button--plus" type="button">
                  <IconPlus className="order-card__amount-icon" />
                  <span className="visually-hidden">Увеличить</span>
                </button>
              </div>

              <p className="order-card__total-price">17 500 ₽</p>

              <button className="order-card__delete-order" type="button">
                <IconCross className="order-card__delete-icon" />
                <span className="visually-hidden">Удалить товар</span>
              </button>
            </li>

            <li className="cart-checkout__order-item order-card">
              <div className="order-card__guitar-info-wrapper">
                <h3 className="order-card__title">Электрогитара СURT Z300</h3>
                <p className="order-card__vendor-code">Артикул: AO757599</p>
                <p className="order-card__guitar-info">Электрогитара, 6 струнная</p>
              </div>

              <img className="order-card__image" src={electroGuitar2} alt="Электрогитара СURT Z300" width="48" height="124" />

              <p className="order-card__original-price">29 500 ₽</p>

              <div className="order-card__amount-wrapper">
                <label htmlFor="checkout-order-amount-2" className="visually-hidden">Количество товара</label>
                <button className="order-card__amount-button order-card__amount-button--minus" type="button">
                  <IconMinus className="order-card__amount-icon" />
                  <span className="visually-hidden">Уменьшить</span>
                </button>
                <input className="order-card__amount-input" type="number" name="checkout-order-amount-2" id="checkout-order-amount-2" placeholder="1" />
                <button className="order-card__amount-button order-card__amount-button--plus" type="button">
                  <IconPlus className="order-card__amount-icon" />
                  <span className="visually-hidden">Увеличить</span>
                </button>
              </div>

              <p className="order-card__total-price">29 500 ₽</p>

              <button className="order-card__delete-order" type="button">
                <IconCross className="order-card__delete-icon" />
                <span className="visually-hidden">Удалить товар</span>
              </button>
            </li>
          </ul>

          <div className="cart-checkout__order-wrapper">
            <section className="cart-checkout__promocode">
              <h3 className="cart-checkout__promocode-title">Промокод на скидку</h3>
              <p className="cart-checkout__promocode-description">Введите свой промокод, если он у вас есть.</p>

              <div className="cart-checkout__promocode-input-wrapper">
                <label htmlFor="checkout-order-promocode" className="visually-hidden">Промокод:</label>
                <input className="cart-checkout__promocode-input" type="text" name="checkout-order-promocode" id="checkout-order-promocode" defaultValue="GITARAHIT"/>
                <button className="cart-checkout__apply-promocode button" type="button">Применить купон</button>
              </div>
            </section>

            <div className="cart-checkout__order-total">
              <p className="cart-checkout__order-total-sum">Всего: 47 000 ₽ </p>
              <button className="cart-checkout__order-submit button button--orange" type="submit">Оформить заказ</button>
            </div>
          </div>
        </form>
      </section>

    </main>
  )
};

export default CartPage;
