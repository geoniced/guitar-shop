import React, {useCallback} from "react";
import {connect} from "react-redux";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {addGuitarToCart, closeAddToCartPopup, openItemAddedToCartPopup} from "../../store/actions";
import {capitalizeFirstLetter, createBlocklayerClickHandler, formatDecimalWithRublesChar, isEscKeyPressed} from "../../utils";
import {getAddToCartShownGuitar} from "../../store/selectors";
import {GuitarTypeName, StringTextNumberMap} from "../../const";
import ClosePopupButton from "../close-popup-button/close-popup-button";

const AddToCartPopup = (props) => {
  const {
    addToCartShownGuitar,
    closePopup,
    addGuitarToCartAction,
    openItemAddedToCartPopupAction,
  } = props;

  const {
    name,
    price,
    vendorCode,
    strings,
    image,
    type,
  } = addToCartShownGuitar;

  const typeText = capitalizeFirstLetter(GuitarTypeName[type]);
  const stringsText = `${StringTextNumberMap[strings]} струнная`;

  const onBlockLayerClick = createBlocklayerClickHandler(closePopup);

  const onCloseButtonClick = (evt) => {
    evt.preventDefault();

    closePopup();
  };

  const onAddToCartClick = (evt) => {
    evt.preventDefault();

    addGuitarToCartAction(addToCartShownGuitar);
    closePopup();
    openItemAddedToCartPopupAction();
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
        <ClosePopupButton
          onClick={onCloseButtonClick}
        />

        <article className="add-to-cart-popup__guitar-info-card guitar-info-card">
          <div className="guitar-info-card__description-column">
            <div className="guitar-info-card__characteristics">
              <h3 className="guitar-info-card__title">Гитара {name}</h3>
              <p className="guitar-info-card__vendor-code">Артикул: {vendorCode}</p>
              <p className="guitar-info-card__guitar-info">
                <span className="guitar-info-card__guitar-info-text--type">{typeText}, </span>
                <span className="guitar-info-card__guitar-info-text--strings">{stringsText}</span>
              </p>
              <p className="guitar-info-card__guitar-price">Цена: {formatDecimalWithRublesChar(price)}</p>
            </div>

            <img className="guitar-info-card__image" src={image} alt={`${typeText} ${name}`} width="56" height="128" />
          </div>

          <div className="guitar-info-card__buttons-column">
            <button
              onClick={onAddToCartClick}
              className="guitar-info-card__add-button basic-popup__button button button--orange"
              type="button"
            >
              Добавить в корзину
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  addToCartShownGuitar: getAddToCartShownGuitar(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeAddToCartPopup());
  },
  addGuitarToCartAction(guitar) {
    dispatch(addGuitarToCart(guitar));
  },
  openItemAddedToCartPopupAction() {
    dispatch(openItemAddedToCartPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartPopup);
