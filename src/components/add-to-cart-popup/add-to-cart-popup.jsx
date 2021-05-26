import React, {useCallback} from "react";
import {connect} from "react-redux";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {changeCartGuitars, closeAddToCartPopup, openItemAddedToCartPopup} from "../../store/actions";
import {createBlocklayerClickHandler, isEscKeyPressed} from "../../utils";
import {getAddToCartShownGuitar, getCartGuitars} from "../../store/selectors";
import ClosePopupButton from "../close-popup-button/close-popup-button";
import GuitarInfoCardDescription from "../guitar-info-card-description/guitar-info-card-description";
import {Amount} from "../../const";

const AddToCartPopup = (props) => {
  const {
    cartGuitars,
    guitar,
    closePopup,
    addGuitarToCartAction,
    openItemAddedToCartPopupAction,
  } = props;

  const onBlockLayerClick = createBlocklayerClickHandler(closePopup);

  const onCloseButtonClick = (evt) => {
    evt.preventDefault();

    closePopup();
  };

  const onAddToCartClick = (evt) => {
    evt.preventDefault();
    const guitarWithAmount = Object.assign({}, guitar);
    guitarWithAmount.amount = Amount.DEFAULT;

    addGuitarToCartAction(cartGuitars, guitarWithAmount);
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
          <GuitarInfoCardDescription
            guitar={guitar}
          />

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
  guitar: getAddToCartShownGuitar(state),
  cartGuitars: getCartGuitars(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeAddToCartPopup());
  },
  addGuitarToCartAction(guitars, newGuitar) {
    const newCardGuitars = guitars.slice();
    newCardGuitars.push(newGuitar);

    dispatch(changeCartGuitars(newCardGuitars));
  },
  openItemAddedToCartPopupAction() {
    dispatch(openItemAddedToCartPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartPopup);
