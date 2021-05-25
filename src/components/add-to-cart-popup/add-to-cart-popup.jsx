import React, {useCallback} from "react";
import {connect} from "react-redux";
import electroGuitar1 from "../../assets/img/electro-1-small.png";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {closeAddToCartPopup} from "../../store/actions";
import {capitalizeFirstLetter, createBlocklayerClickHandler, formatDecimalWithRublesChar, isEscKeyPressed} from "../../utils";
import {getAddToCartGuitar} from "../../store/selectors";
import {GuitarTypeName, StringTextNumberMap} from "../../const";

const AddToCartPopup = (props) => {
  const {addToCartGuitar, closePopup} = props;

  const {
    name,
    price,
    vendorCode,
    strings,
    image,
    type,
  } = addToCartGuitar;

  const typeText = capitalizeFirstLetter(GuitarTypeName[type]);
  const stringsText = `${StringTextNumberMap[strings]} струнная`;

  const onBlockLayerClick = createBlocklayerClickHandler(closePopup);

  const onCloseButtonClick = (evt) => {
    evt.preventDefault();

    closePopup();
  };

  const onEscKeyDown = useCallback((evt) => {
    if (isEscKeyPressed(evt)) {
      closePopup();
    }
  }, [closePopup]);

  usePreventPageScroll();
  useKeyDown(onEscKeyDown);

  return (
    <section
      onClick={onBlockLayerClick}
      className="basic-popup add-to-cart-popup"
    >
      <div className="basic-popup__wrapper">
        <h2 className="basic-popup__title">Добавить товар в корзину</h2>
        <a
          onClick={onCloseButtonClick}
          className="basic-popup__close-button"
          href="#"
        >
          <IconCross className="basic-popup__close-icon" />
          <span className="visually-hidden">Закрыть окно</span>
        </a>

        <article className="add-to-cart-popup__guitar-info-card guitar-info-card">
          <div className="guitar-info-card__description-column">
            <div className="guitar-info-card__characteristics">
              <h3 className="guitar-info-card__title">Гитара {name}</h3>
              <p className="guitar-info-card__vendor-code">Артикул: {vendorCode}</p>
              <p className="guitar-info-card__guitar-info">{typeText}, {stringsText}</p>
              <p className="guitar-info-card__guitar-price">Цена: {formatDecimalWithRublesChar(price)}</p>
            </div>

            <img className="guitar-info-card__image" src={image} alt={`${typeText} ${name}`} width="56" height="128" />
          </div>

          <div className="guitar-info-card__buttons-column">
            <button className="guitar-info-card__add-button basic-popup__button button button--orange" type="button">Добавить в корзину</button>
          </div>
        </article>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  addToCartGuitar: getAddToCartGuitar(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeAddToCartPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartPopup);
