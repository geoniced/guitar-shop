import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";
import {ReactComponent as IconMinus} from "../../assets/img/icon-minus.svg";
import {ReactComponent as IconPlus} from "../../assets/img/icon-plus.svg";
import {Amount, GuitarTypeName, PropTypesValidation} from "../../const";
import {formatDecimalWithRublesChar, getGuitarStringsText, packNumberInMinMax} from "../../utils";

const OrderCard = (props) => {
  const {index, guitar, deleteGuitarHandler, amountChangeHandler} = props;

  const {
    name,
    type,
    vendorCode,
    strings,
    image,
    price,
    id,
    amount,
  } = guitar;

  const typeText = GuitarTypeName[type];
  const stringsText = getGuitarStringsText(strings);
  const totalPrice = price * amount;

  const onDeleteButtonClick = () => {
    deleteGuitarHandler(guitar);
  };

  const onAmountChange = (evt) => {
    const value = packNumberInMinMax(Number(evt.target.value), Amount.MIN);

    amountChangeHandler(id, value);
  };

  const onAmountPlusClick = () => {
    amountChangeHandler(id, amount + 1);
  };

  const onAmountMinusClick = (evt) => {
    if (amount === 1) {
      deleteGuitarHandler(guitar);
    } else {
      amountChangeHandler(id, packNumberInMinMax(amount - 1, Amount.MIN));
    }
  };

  return (
    <li className="cart-checkout__order-item order-card">
      <div className="order-card__guitar-info-wrapper">
        <h3 className="order-card__title">{typeText} {name}</h3>
        <p className="order-card__vendor-code">Артикул: {vendorCode}</p>
        <p className="order-card__guitar-info">{typeText}, {stringsText}</p>
      </div>

      <img className="order-card__image" src={image} alt="ЭлектроГитара Честер bass" width="48" height="124" />

      <p className="order-card__original-price">{formatDecimalWithRublesChar(price)}</p>

      <div className="order-card__amount-wrapper">
        <label htmlFor={`checkout-order-amount-${index}`} className="visually-hidden">Количество товара</label>
        <button
          onClick={onAmountMinusClick}
          className="order-card__amount-button order-card__amount-button--minus"
          type="button"
        >
          <IconMinus className="order-card__amount-icon" />
          <span className="visually-hidden">Уменьшить</span>
        </button>
        <input
          onChange={onAmountChange}
          value={amount}
          className="order-card__amount-input"
          type="number"
          name={`checkout-order-amount-${index}`}
          id={`checkout-order-amount-${index}`}
          placeholder="1"
        />
        <button
          onClick={onAmountPlusClick}
          className="order-card__amount-button order-card__amount-button--plus"
          type="button"
        >
          <IconPlus className="order-card__amount-icon" />
          <span className="visually-hidden">Увеличить</span>
        </button>
      </div>

      <p className="order-card__total-price">{formatDecimalWithRublesChar(totalPrice)}</p>

      <button
        onClick={onDeleteButtonClick}
        className="order-card__delete-order"
        type="button"
      >
        <IconCross className="order-card__delete-icon" />
        <span className="visually-hidden">Удалить товар</span>
      </button>
    </li>
  );
};

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  guitar: PropTypesValidation.guitar,
  deleteGuitarHandler: PropTypes.func.isRequired,
  amountChangeHandler: PropTypes.func.isRequired,
};

export default OrderCard;
