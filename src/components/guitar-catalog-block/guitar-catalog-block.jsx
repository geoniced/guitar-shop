import React from "react";
import {connect} from "react-redux";
import {ReactComponent as IconArrowUp} from "../../assets/img/icon-arrow-up.svg";
import {ReactComponent as IconArrowDown} from "../../assets/img/icon-arrow-down.svg";
import GuitarCard from "../guitar-card/guitar-card";


const GuitarCatalogBlock = (props) => {
  const {guitars} = props;

  return (
    <section className="page-content__guitar-catalog guitar-catalog">
      <h2 className="visually-hidden">Список гитар</h2>
      <div className="guitar-catalog__sorting sorting">
        <p className="sorting__text">
          Сортировать:
        </p>

        <ul className="sorting__sort-types">
          <li className="sorting__sort-type-item">
            <a href="#" className="sorting__sort-type-text sorting__sort-type-text--price sorting__sort-type-text--active">по цене</a>
          </li>
          <li className="sorting__sort-type-item">
            <a href="#" className="sorting__sort-type-text sorting__sort-type-text--popularity">по популярности</a>
          </li>
        </ul>

        <ul className="sorting__sort-orders">
          <li className="sorting__sort-order-item">
            <a href="#" className="sorting__sort-order-button">
              <IconArrowUp className="sorting__sort-order-icon" />
              <span className="visually-hidden">От меньшего к большему</span>
            </a>
          </li>
          <li className="sorting__sort-order-item">
            <a href="#" className="sorting__sort-order-button">
              <IconArrowDown className="sorting__sort-order-icon" />
              <span className="visually-hidden">От большего к меньшему</span>
            </a>
          </li>
        </ul>
      </div>

      <ul className="guitar-catalog__guitars">
        {guitars.map((guitar, i) => (
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
