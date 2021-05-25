import React from "react";
import {connect} from "react-redux";
import GuitarCard from "../guitar-card/guitar-card";
import {GUITARS_PER_PAGE, GuitarTypeName} from "../../const";
import Sorting from "../sorting/sorting";
import {getCurrentPage, getGuitarsSorted} from "../../store/selectors";
import Pagination from "../pagination/pagination";


const GuitarCatalogBlock = (props) => {
  const {guitars, currentPage} = props;

  const showGuitarsTo = currentPage * GUITARS_PER_PAGE;
  const showGuitarsFrom = showGuitarsTo - GUITARS_PER_PAGE;
  const shownGuitars = guitars.slice(showGuitarsFrom, showGuitarsTo);

  return (
    <section className="page-content__guitar-catalog guitar-catalog">
      <h2 className="visually-hidden">Список гитар</h2>
      <Sorting />

      <ul className="guitar-catalog__guitars">
        {shownGuitars.map((guitar, i) => (
          <GuitarCard
            key={`guitar-${i}`}
            name={guitar.name}
            price={guitar.price}
            image={guitar.image}
            type={GuitarTypeName[guitar.type]}
            reviewsCount={guitar.reviewsCount}
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

export default connect(mapStateToProps)(GuitarCatalogBlock);
