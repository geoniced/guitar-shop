import React, {createRef, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {PromoCodeDiscount, PropTypesValidation} from "../../const";
import {changeCartGuitars, changeDeleteFromCartPopupShownGuitar, openDeleteFromCartPopup} from "../../store/actions";
import {getCartGuitars} from "../../store/selectors";
import {calculateTotalPrice, formatDecimalWithRublesChar, getGuitarsWithChangedGuitarsAmountById, packNumberInMinMax, setStorageGuitars} from "../../utils";
import OrderCard from "../order-card/order-card";
import PromoCodeErrorBlock from "../promo-code-error-block/promo-code-error-block";

const CartCheckout = (props) => {
  const {
    cartGuitars,
    openDeleteFromCartPopupAction,
    changeDeleteFromCartPopupShownGuitarAction,
    changeAmountAction,
  } = props;

  const promoCodeRef = createRef();
  const [currentPromoCode, setCurrentPromoCode] = useState(``);

  const isValidPromoCode = PromoCodeDiscount[currentPromoCode];
  const showInvalidPromoBlock = !isValidPromoCode && currentPromoCode !== ``;

  const totalPriceWithoutDiscount = calculateTotalPrice(cartGuitars);

  const totalCartGuitarPrice = isValidPromoCode
    ? packNumberInMinMax(PromoCodeDiscount[currentPromoCode](totalPriceWithoutDiscount), 0)
    : totalPriceWithoutDiscount;

  const deleteGuitarFromCartCallback = (guitar) => {
    changeDeleteFromCartPopupShownGuitarAction(guitar);
    openDeleteFromCartPopupAction();
  };

  const amountChangeHandler = (guitarId, newAmount) => {
    changeAmountAction(cartGuitars, guitarId, newAmount);
  };

  const onApplyPromoCodeClick = () => {
    const promoCode = promoCodeRef.current.value;

    setCurrentPromoCode(promoCode);
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
              amountChangeHandler={amountChangeHandler}
            />
          ))}
        </ul>

        <div className="cart-checkout__order-wrapper">
          <section className="cart-checkout__promocode">
            <h3 className="cart-checkout__promocode-title">Промокод на скидку</h3>
            <p className="cart-checkout__promocode-description">Введите свой промокод, если он у вас есть.</p>

            <div className="cart-checkout__promocode-input-wrapper">
              <label htmlFor="checkout-order-promocode" className="visually-hidden">Промокод:</label>
              <input
                ref={promoCodeRef}
                className="cart-checkout__promocode-input"
                type="text"
                name="checkout-order-promocode"
                id="checkout-order-promocode"
              />
              <button
                onClick={onApplyPromoCodeClick}
                className="cart-checkout__apply-promocode button"
                type="button"
              >
                Применить купон
              </button>

              {showInvalidPromoBlock && <PromoCodeErrorBlock />}
            </div>
          </section>

          <div className="cart-checkout__order-total">
            <p className="cart-checkout__order-total-sum">Всего: {formatDecimalWithRublesChar(totalCartGuitarPrice)} </p>
            <a href="#" className="cart-checkout__order-submit button button--orange">Оформить заказ</a>
          </div>
        </div>
      </form>
    </section>
  );
};

CartCheckout.propTypes = {
  cartGuitars: PropTypes.arrayOf(PropTypesValidation.guitar).isRequired,
  openDeleteFromCartPopupAction: PropTypes.func.isRequired,
  changeDeleteFromCartPopupShownGuitarAction: PropTypes.func.isRequired,
  changeAmountAction: PropTypes.func.isRequired,
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
  changeAmountAction(guitars, guitarId, newAmount) {
    const cartGuitarsWithChangedAmount = getGuitarsWithChangedGuitarsAmountById(guitars, guitarId, newAmount);

    setStorageGuitars(cartGuitarsWithChangedAmount);

    dispatch(changeCartGuitars(cartGuitarsWithChangedAmount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);
