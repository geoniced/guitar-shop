import React, {useCallback} from "react";
import {connect} from "react-redux";
import {useKeyDown} from "../../hooks/use-key-down/use-key-down";
import {usePreventPageScroll} from "../../hooks/use-prevent-page-scroll/use-prevent-page-scroll";
import {closeDeleteFromCartPopup} from "../../store/actions";
import {getDeleteFromCartShownGuitar} from "../../store/selectors";
import {createBlocklayerClickHandler, isEscKeyPressed} from "../../utils";
import ClosePopupButton from "../close-popup-button/close-popup-button";
import GuitarInfoCardDescription from "../guitar-info-card-description/guitar-info-card-description";

const DeleteFromCartPopup = (props) => {
  const {guitar, closePopup} = props;

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
            <button className="guitar-info-card__button basic-popup__button button button--orange" type="button">Удалить товар</button>
            <button className="guitar-info-card__button basic-popup__button button button--white" type="button">Продолжить покупки</button>
          </div>
        </article>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  guitar: getDeleteFromCartShownGuitar(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup() {
    dispatch(closeDeleteFromCartPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFromCartPopup);
