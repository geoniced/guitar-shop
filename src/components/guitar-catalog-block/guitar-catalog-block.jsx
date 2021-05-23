import React from "react";
import {connect} from "react-redux";
import GuitarCard from "../guitar-card/guitar-card";
import {SHOWN_GUITARS_COUNT} from "../../const";
import Sorting from "../sorting/sorting";


const GuitarCatalogBlock = (props) => {
  const {guitars} = props;

  const shownGuitars = guitars.slice(0, SHOWN_GUITARS_COUNT);

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
            type={guitar.type}
            reviewsCount={guitar.reviewsCount}
          />
        ))}
      </ul>

      <ul className="guitar-catalog__pagination pagination">
        <li className="pagination__item">
          <a className="pagination__link pagination__link--active">1</a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">2</a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link pagination__link--dots">...</a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link">7</a>
        </li>
        <li className="pagination__item">
          <a href="#" className="pagination__link pagination__link--next">Далее</a>
        </li>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  guitars: state.guitars,
});

export default connect(mapStateToProps)(GuitarCatalogBlock);
