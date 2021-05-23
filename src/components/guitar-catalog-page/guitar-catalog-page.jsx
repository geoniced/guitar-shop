import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as IconArrowRight} from "../../assets/img/icon-arrow-right.svg";
import {ReactComponent as IconPriceLineSeparator} from "../../assets/img/icon-price-line-separator.svg";
import {ReactComponent as IconCheckbox} from "../../assets/img/icon-checkbox-box.svg";
import {AppRoute} from "../../const";
import GuitarCatalogBlock from "../guitar-catalog-block/guitar-catalog-block";


const GuitarCatalogPage = () => {
  return (
    <main className="page-content">
      <div className="page-content__wrapper container">
        <h1 className="page-content__title">Каталог гитар</h1>

        <ul className="page-content__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item">
            <Link to={AppRoute.ROOT} className="breadcrumbs__link">Главная</Link>
          </li>
          <li className="breadcrumbs__item breadcrumbs__item--arrow">
            <IconArrowRight className="breadcrumbs__arrow" />
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link breadcrumbs__link--current">Каталог</a>
          </li>
        </ul>

        <div className="page-content__catalog-wrapper">
          <section className="page-content__guitar-filters guitar-filters">
            <h2 className="guitar-filters__title">Фильтр</h2>

            <form action="#" className="guitar-filters__form">
              <fieldset className="guitar-filters__fieldset">
                <legend className="guitar-filters__legend">Цена, ₽</legend>

                <div className="guitar-filters__price-wrapper">
                  <label htmlFor="filters-price-from" className="visually-hidden">От</label>
                  <input className="guitar-filters__numeric-input" type="number" name="filters-price-from" id="filters-price-from" placeholder="1 000" />

                  <IconPriceLineSeparator className="guitar-filters__price-separator" />

                  <label htmlFor="filters-price-to" className="visually-hidden">До</label>
                  <input className="guitar-filters__numeric-input" type="number" name="filters-price-to" id="filters-price-to" placeholder="30 000" />
                </div>
              </fieldset>

              <fieldset className="guitar-filters__fieldset">
                <legend className="guitar-filters__legend">Тип гитар</legend>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-type-acoustic" id="filters-type-acoustic" />
                <label htmlFor="filters-type-acoustic" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  Акустические гитары
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-type-electro" id="filters-type-electro" defaultChecked />
                <label htmlFor="filters-type-electro" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  Электрогитары
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-type-ukulele" id="filters-type-ukulele" defaultChecked />
                <label htmlFor="filters-type-ukulele" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  Укулеле
                </label>
              </fieldset>

              <fieldset className="guitar-filters__fieldset">
                <legend className="guitar-filters__legend">Количество струн</legend>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-4" id="filters-strings-4" defaultChecked />
                <label htmlFor="filters-strings-4" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  4
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-6" id="filters-strings-6" defaultChecked />
                <label htmlFor="filters-strings-6" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  6
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-7" id="filters-strings-7" />
                <label htmlFor="filters-strings-7" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  7
                </label>

                <input className="guitar-filters__checkbox visually-hidden" type="checkbox" name="filters-strings-12" id="filters-strings-12" disabled />
                <label htmlFor="filters-strings-12" className="guitar-filters__checkbox-label">
                  <IconCheckbox className="guitar-filters__checkbox-icon" />
                  12
                </label>
              </fieldset>

              <button className="guitar-filters__show button" type="submit">Показать</button>
            </form>
          </section>

          <GuitarCatalogBlock />
        </div>
      </div>
    </main>
  );
};

export default GuitarCatalogPage;
