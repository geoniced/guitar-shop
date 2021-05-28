import React from "react";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import GuitarCatalogBlock from "../guitar-catalog-block/guitar-catalog-block";
import GuitarFilters from "../guitar-filters/guitar-filters";


const GuitarCatalogPage = () => {
  return (
    <main className="page-content">
      <div className="page-content__wrapper container">
        <h1 className="page-content__title">Каталог гитар</h1>

        <ul className="page-content__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Главная</a>
          </li>
          <li className="breadcrumbs__item breadcrumbs__item--arrow">
            <IconArrowRight className="breadcrumbs__arrow" />
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link breadcrumbs__link--current">Каталог</a>
          </li>
        </ul>

        <div className="page-content__catalog-wrapper">
          <GuitarFilters />

          <GuitarCatalogBlock />
        </div>
      </div>
    </main>
  );
};

export default GuitarCatalogPage;
