import React, {useCallback} from "react";
import {connect} from "react-redux";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {closeItemAddedToCartPopup} from "../../store/actions";
import {createBlocklayerClickHandler, isEscKeyPressed} from "../../utils";
import ClosePopupButton from "../close-popup-button/close-popup-button";

const ItemAddedToCartPopup = (props) => {
  const {closePopup} = props;

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
      className="basic-popup item-added-to-cart-popup"
    >
      <div className="basic-popup__wrapper item-added-to-cart-popup__wrapper">
        <h2 className="basic-popup__title">Товар успешно добавлен в корзину</h2>
        <ClosePopupButton
          onClick={onCloseButtonClick}
        />

        <div className="item-added-to-cart-popup__buttons-wrapper">
          <button className="item-added-to-cart-popup__button basic-popup__button button button--orange" type="button">Перейти в корзину</button>
          <button className="item-added-to-cart-popup__button basic-popup__button button button--white" type="button">Продолжить покупки</button>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeItemAddedToCartPopup());
  }
});

export default connect(null, mapDispatchToProps)(ItemAddedToCartPopup);
