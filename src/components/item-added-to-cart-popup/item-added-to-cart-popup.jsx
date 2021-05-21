import React from "react";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";

const ItemAddedToCartPopup = () => {
  return (
    <div className="basic-popup item-added-to-cart-popup">
      <h2 className="basic-popup__title">Товар успешно добавлен в корзину</h2>
      <a className="basic-popup__close-button" href="#">
        <IconCross className="basic-popup__close-icon" />
        <span className="visually-hidden">Закрыть окно</span>
      </a>

      <div className="item-added-to-cart-popup__buttons-wrapper">
        <button className="basic-popup__button button button--orange" type="button">Перейти в корзину</button>
        <button className="basic-popup__button button button--white" type="button">Продолжить покупки</button>
      </div>
    </div>
  );
};

export default ItemAddedToCartPopup;
