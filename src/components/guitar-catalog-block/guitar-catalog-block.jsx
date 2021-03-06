import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import GuitarCard from "../guitar-card/guitar-card";
import {GUITARS_PER_PAGE, PropTypesValidation} from "../../const";
import Sorting from "../sorting/sorting";
import {getCartGuitars, getCurrentPage, getGuitarsSorted} from "../../store/selectors";
import Pagination from "../pagination/pagination";
import {openAddToCartPopup, changeAddToCartPopupShownGuitar} from "../../store/actions";
import {collectGuitarIds} from "../../utils";


const GuitarCatalogBlock = (props) => {
  const {
    guitars,
    cartGuitars,
    currentPage,
    openAddToCartPopupAction,
    changeAddToCartPopupShownGuitarAction,
  } = props;

  const showGuitarsTo = currentPage * GUITARS_PER_PAGE;
  const showGuitarsFrom = showGuitarsTo - GUITARS_PER_PAGE;
  const shownGuitars = guitars.slice(showGuitarsFrom, showGuitarsTo);

  const cartGuitarsIds = cartGuitars.reduce(collectGuitarIds, {});

  const onAddToCartClick = (guitar) => {
    changeAddToCartPopupShownGuitarAction(guitar);
    openAddToCartPopupAction();
  };

  return (
    <section className="page-content__guitar-catalog guitar-catalog">
      <h2 className="visually-hidden">Список гитар</h2>
      <Sorting />

      <ul className="guitar-catalog__guitars">
        {shownGuitars.map((guitar, i) => (
          <GuitarCard
            key={`guitar-${i}`}
            guitar={guitar}
            addToCartClickHandler={onAddToCartClick}
            isInCart={guitar.id in cartGuitarsIds}
          />
        ))}
      </ul>

      <Pagination />
    </section>
  );
};

GuitarCatalogBlock.propTypes = {
  guitars: PropTypes.arrayOf(PropTypesValidation.guitar),
  cartGuitars: PropTypes.arrayOf(PropTypesValidation.guitar),
  currentPage: PropTypes.number.isRequired,
  openAddToCartPopupAction: PropTypes.func.isRequired,
  changeAddToCartPopupShownGuitarAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guitars: getGuitarsSorted(state),
  cartGuitars: getCartGuitars(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  openAddToCartPopupAction() {
    dispatch(openAddToCartPopup());
  },
  changeAddToCartPopupShownGuitarAction(guitar) {
    dispatch(changeAddToCartPopupShownGuitar(guitar));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GuitarCatalogBlock);
