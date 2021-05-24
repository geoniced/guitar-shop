import React, {useState} from "react";
import {ReactComponent as IconPriceLineSeparator} from "../../assets/img/icon-price-line-separator.svg";
import {dispatchFilterChange, formatDecimal, packNumberInMinMax} from "../../utils";
import {DefaultPrice, GuitarType, GuitarTypeFilterTitle, StringsCount, StringTextNumberMap, FilterOperation} from "../../const";
import NumericField from "../numeric-field/numeric-field";
import CheckboxField from "../checkbox-field/checkbox-field";
import {connect} from "react-redux";
import {getCurrentFilterGuitarTypes, getCurrentFilterGuitarStrings} from "../../store/selectors";
import {changeFilterGuitarStrings, changeFilterGuitarType} from "../../store/actions";

const GuitarFilters = (props) => {
  const {
    filterGuitarTypes,
    filterGuitarStrings,
    changeFilterGuitarTypeAction,
    changeFilterGuitarStringsAction,
  } = props;

  const [priceFrom, setPriceFrom] = useState(DefaultPrice.FROM);
  const [priceTo, setPriceTo] = useState(DefaultPrice.TO);

  const guitarTypes = Object.values(GuitarType);
  const stringsAmounts = Object.values(StringsCount);

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

  const onFilterTypeChange = (evt) => {
    const value = evt.target.dataset.value;
    const operation = evt.target.checked ? FilterOperation.ADD : FilterOperation.DELETE;

    changeFilterGuitarTypeAction(filterGuitarTypes, operation, value);
  };

  const onFilterStringsChange = (evt) => {
    const value = evt.target.dataset.value;
    const operation = evt.target.checked ? FilterOperation.ADD : FilterOperation.DELETE;

    changeFilterGuitarStringsAction(filterGuitarStrings, operation, value);
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

          {guitarTypes.map((guitarType, i) => (
            <CheckboxField
              key={`filters-guitar-type-${i}`}
              name={`filters-type-${guitarType}`}
              dataValue={guitarType}
              title={GuitarTypeFilterTitle[guitarType]}
              onChange={onFilterTypeChange}
            />
          ))}
        </fieldset>

        <fieldset className="guitar-filters__fieldset">
          <legend className="guitar-filters__legend">Количество струн</legend>

          {stringsAmounts.map((stringsAmount, i) => (
            <CheckboxField
              key={`filters-strings-${i}`}
              name={`filters-strings-${stringsAmount}`}
              title={StringTextNumberMap[stringsAmount]}
              dataValue={stringsAmount}
              onChange={onFilterStringsChange}
            />
          ))}
        </fieldset>

        <button className="guitar-filters__show button" type="submit">Показать</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  filterGuitarTypes: getCurrentFilterGuitarTypes(state),
  filterGuitarStrings: getCurrentFilterGuitarStrings(state),
});


const mapDispatchToProps = (dispatch) => ({
  changeFilterGuitarTypeAction: dispatchFilterChange(dispatch, changeFilterGuitarType),
  changeFilterGuitarStringsAction: dispatchFilterChange(dispatch, changeFilterGuitarStrings),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuitarFilters);
