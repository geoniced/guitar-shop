import React from "react";
import {connect} from "react-redux";
import GuitarCard from "../guitar-card/guitar-card";
import {GUITARS_PER_PAGE} from "../../const";
import Sorting from "../sorting/sorting";
import {getCurrentPage, getGuitarsSorted} from "../../store/selectors";
import Pagination from "../pagination/pagination";
import {openAddToCartPopup, changeAddToCartPopupShownGuitar} from "../../store/actions";


const GuitarCatalogBlock = (props) => {
  const {guitars, currentPage, openAddToCartPopupAction, changeAddToCartPopupShownGuitarAction} = props;

  const showGuitarsTo = currentPage * GUITARS_PER_PAGE;
  const showGuitarsFrom = showGuitarsTo - GUITARS_PER_PAGE;
  const shownGuitars = guitars.slice(showGuitarsFrom, showGuitarsTo);

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
          />
        ))}
      </ul>

      <Pagination />
    </section>
  );
};

const mapStateToProps = (state) => ({
  guitars: getGuitarsSorted(state),
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
