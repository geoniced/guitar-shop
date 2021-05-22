import React from "react";
import electroGuitar1 from "../../assets/img/electro-1.png";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";

const DeleteFromCartPopup = () => {
  return (
    <div className="basic-popup delete-from-cart-popup">
      <h2 className="basic-popup__title">Удалить этот товар? </h2>
      <a className="basic-popup__close-button" href="#">
        <IconCross className="basic-popup__close-icon" />
        <span className="visually-hidden">Закрыть окно</span>
      </a>

      <article className="delete-from-cart-popup__guitar-info-card guitar-info-card">
        <div className="guitar-info-card__description-column">
          <div className="guitar-info-card__characteristics">
            <h3 className="guitar-info-card__title">Гитара Честер bass</h3>
            <p className="guitar-info-card__vendor-code">Артикул: SO757575</p>
            <p className="guitar-info-card__guitar-info">Электрогитара, 6 струнная</p>
            <p className="guitar-info-card__guitar-price">Цена: 17 500 ₽</p>
          </div>

          <img className="guitar-info-card__image" src={electroGuitar1} alt="Гитара Честер bass" width="56" height="128" />
        </div>

        <div className="guitar-info-card__buttons-column">
          <button className="guitar-info-card__button basic-popup__button button button--orange" type="button">Удалить товар</button>
          <button className="guitar-info-card__button basic-popup__button button button--white" type="button">Продолжить покупки</button>
        </div>
      </article>
    </div>
  );
};

export default DeleteFromCartPopup;
