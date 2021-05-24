import React, {useState} from "react";
import {ReactComponent as IconPriceLineSeparator} from "../../assets/img/icon-price-line-separator.svg";
import {ReactComponent as IconCheckbox} from "../../assets/img/icon-checkbox-box.svg";
import {formatDecimal, packNumberInMinMax} from "../../utils";
import {DefaultPrice} from "../../const";
import NumericField from "../numeric-field/numeric-field";

const GuitarFilters = (props) => {
  const [priceFrom, setPriceFrom] = useState(DefaultPrice.FROM);
  const [priceTo, setPriceTo] = useState(DefaultPrice.TO);

  const onPriceFromChange = (evt) => {
    let newValue = Number(evt.target.value);
    newValue = packNumberInMinMax(newValue, 0, priceTo);

    setPriceFrom(newValue);
  };

  const onPriceToChange = (evt) => {
    let newValue = Number(evt.target.value);
    newValue = packNumberInMinMax(newValue, priceFrom);

    setPriceTo(newValue);
  };

  return (
    <section className="page-content__guitar-filters guitar-filters">
      <h2 className="guitar-filters__title">Фильтр</h2>

      <form action="#" className="guitar-filters__form">
        <fieldset className="guitar-filters__fieldset">
          <legend className="guitar-filters__legend">Цена, ₽</legend>

          <div className="guitar-filters__price-wrapper">
            <label htmlFor="filters-price-from" className="visually-hidden">От</label>
            <NumericField
              onChange={onPriceFromChange}
              value={priceFrom}
              name="filters-price-from"
              convertCallback={formatDecimal}
            />

            <IconPriceLineSeparator className="guitar-filters__price-separator" />

            <label htmlFor="filters-price-to" className="visually-hidden">До</label>
            <NumericField
              onChange={onPriceToChange}
              value={priceTo}
              name="filters-price-to"
              convertCallback={formatDecimal}
            />
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
  );
};

export default GuitarFilters;
