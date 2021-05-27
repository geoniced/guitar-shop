import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {changeCartGuitars, closeDeleteFromCartPopup} from "../../store/actions";
import {getCartGuitars, getDeleteFromCartShownGuitar} from "../../store/selectors";
import {createBlocklayerClickHandler, isEscKeyPressed, removeGuitar} from "../../utils";
import ClosePopupButton from "../close-popup-button/close-popup-button";
import GuitarInfoCardDescription from "../guitar-info-card-description/guitar-info-card-description";
import {PropTypesValidation} from "../../const";

const DeleteFromCartPopup = (props) => {
  const {
    cartGuitars,
    guitar,
    closePopup,
    deleteGuitarFromCartAction
  } = props;

  const onDeleteItemClick = () => {
    closePopup();
    deleteGuitarFromCartAction(cartGuitars, guitar.id);
  };

  const onContinueClick = () => {
    closePopup();
  };

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
      className="basic-popup delete-from-cart-popup"
    >
      <div className="basic-popup__wrapper">
        <h2 className="basic-popup__title">Удалить этот товар? </h2>
        <ClosePopupButton
          onClick={onCloseButtonClick}
        />

        <article className="delete-from-cart-popup__guitar-info-card guitar-info-card">
          <GuitarInfoCardDescription
            guitar={guitar}
          />

          <div className="guitar-info-card__buttons-column">
            <button
              onClick={onDeleteItemClick}
              className="guitar-info-card__button basic-popup__button button button--orange"
              type="button"
            >
              Удалить товар
            </button>
            <button
              onClick={onContinueClick}
              className="guitar-info-card__button basic-popup__button button button--white"
              type="button"
            >
              Продолжить покупки
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

DeleteFromCartPopup.propTypes = {
  cartGuitars: PropTypes.arrayOf(PropTypesValidation.guitar).isRequired,
  guitar: PropTypesValidation.guitar,
  closePopup: PropTypes.func.isRequired,
  deleteGuitarFromCartAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cartGuitars: getCartGuitars(state),
  guitar: getDeleteFromCartShownGuitar(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeDeleteFromCartPopup());
  },
  deleteGuitarFromCartAction(guitars, guitarId) {
    const cartGuitarsWithoutGuitar = removeGuitar(guitars, guitarId);

    dispatch(changeCartGuitars(cartGuitarsWithoutGuitar));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFromCartPopup);
