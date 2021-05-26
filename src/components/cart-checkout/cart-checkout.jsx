import React from "react";
import {connect} from "react-redux";
import {changeDeleteFromCartPopupShownGuitar, openDeleteFromCartPopup} from "../../store/actions";
import {getCartGuitars} from "../../store/selectors";
import OrderCard from "../order-card/order-card";

const CartCheckout = (props) => {
  const {cartGuitars, openDeleteFromCartPopupAction, changeDeleteFromCartPopupShownGuitarAction} = props;

  const deleteGuitarFromCartCallback = (guitar) => {
    changeDeleteFromCartPopupShownGuitarAction(guitar);
    openDeleteFromCartPopupAction();
  };

  return (
    <section className="page-content__cart-checkout cart-checkout">
      <h2 className="visually-hidden">Оформление заказа</h2>

      <form action="#" className="cart-checkout__form">
        <ul className="cart-checkout__orders">
          {cartGuitars.map((guitar, i) => (
            <OrderCard
              key={`cart-guitar-${i}`}
              index={i}
              guitar={guitar}
              deleteGuitarHandler={deleteGuitarFromCartCallback}
            />
          ))}
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
  );
};

const mapStateToProps = (state) => ({
  cartGuitars: getCartGuitars(state),
});

const mapDispatchToProps = (dispatch) => ({
  openDeleteFromCartPopupAction() {
    dispatch(openDeleteFromCartPopup());
  },
  changeDeleteFromCartPopupShownGuitarAction(guitar) {
    dispatch(changeDeleteFromCartPopupShownGuitar(guitar));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);
