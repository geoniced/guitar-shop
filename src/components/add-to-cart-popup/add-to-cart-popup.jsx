import React from "react";
import electroGuitar1 from "../../assets/img/electro-1.png";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";

const AddToCartPopup = () => {
  return (
    <div className="basic-popup add-to-cart-popup">
      <h2 className="basic-popup__title">Добавить товар в корзину</h2>
      <a className="basic-popup__close-button" href="#">
        <IconCross className="basic-popup__close-icon" />
        <span className="visually-hidden">Закрыть окно</span>
      </a>

      <article className="add-to-cart-popup__guitar-info-card guitar-info-card">
        <h3 className="guitar-info-card__title">Гитара Честер bass</h3>
        <p className="guitar-info-card__vendor-code">Артикул: SO757575</p>
        <p className="guitar-info-card__guitar-info">Электрогитара, 6 струнная</p>
        <p className="guitar-info-card__guitar-price">Цена: 17 500 ₽</p>
        <img className="guitar-info-card__image" src={electroGuitar1} alt="Гитара Честер bass" width="56" height="128" />

        <button className="guitar-info-card__add button button--orange" type="butto">Добавить в корзину</button>
      </article>
    </div>
  );
};

export default AddToCartPopup;
