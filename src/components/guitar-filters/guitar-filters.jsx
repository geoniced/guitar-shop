import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconPriceLineSeparator} from "../../assets/img/icon-price-line-separator.svg";
import {createDisabledFiltersDeletionCallback, createFilterChangeHandler, dispatchFilterChange, formatDecimal, getAvailableStringsForCurrentGuitarTypes, getAvailableTypesForCurrentGuitarStrings, packNumberInMinMax} from "../../utils";
import {GuitarType, GuitarTypeFilterTitle, StringsCount, StringTextNumberMap} from "../../const";
import NumericField from "../numeric-field/numeric-field";
import CheckboxField from "../checkbox-field/checkbox-field";
import {connect} from "react-redux";
import {getCurrentFilterGuitarTypes, getCurrentFilterGuitarStrings, getPriceFrom, getPriceTo} from "../../store/selectors";
import {changeFilterGuitarStrings, changeFilterGuitarType, changeFilterPriceFrom, changeFilterPriceTo} from "../../store/actions";


const GuitarFilters = (props) => {
  const {
    priceFrom,
    priceTo,
    filterGuitarTypes,
    filterGuitarStrings,
    changeFilterPriceFromAction,
    changeFilterPriceToAction,
    changeFilterGuitarTypeAction,
    changeFilterGuitarStringsAction,
    setFilterGuitarType,
    setFilterGuitarStrings,
  } = props;

  const guitarTypes = Object.values(GuitarType);
  const stringsAmounts = Object.values(StringsCount);
  const currentFilterTypes = Object.values(filterGuitarTypes);

  const availableStringsForCurrentGuitarTypes = getAvailableStringsForCurrentGuitarTypes(currentFilterTypes);
  const availableTypesForCurrentGuitarStrings = getAvailableTypesForCurrentGuitarStrings(filterGuitarStrings);


  const onPriceFromChange = (evt) => {
    let newValue = Number(evt.target.value);
    newValue = packNumberInMinMax(newValue, 0, priceTo);

    changeFilterPriceFromAction(newValue);
  };

  const onPriceToChange = (evt) => {
    let newValue = Number(evt.target.value);
    newValue = packNumberInMinMax(newValue, priceFrom);

    changeFilterPriceToAction(newValue);
  };

  const deleteDisabledTypeFiltersData = {
    changedFilter: filterGuitarStrings,
    filtersToBeDeleted: filterGuitarTypes,
    getAvailableValuesForChangedFilter: getAvailableTypesForCurrentGuitarStrings,
    changedFitlerSetter: setFilterGuitarType,
  };

  const deleteDisabledStringFiltersData = {
    changedFilter: filterGuitarTypes,
    filtersToBeDeleted: filterGuitarStrings,
    getAvailableValuesForChangedFilter: getAvailableStringsForCurrentGuitarTypes,
    changedFitlerSetter: setFilterGuitarStrings,
    needsConvertingToList: true,
  };

  const deleteDisabledTypeFilters = createDisabledFiltersDeletionCallback(deleteDisabledTypeFiltersData);
  const deleteDisabledStringFilters = createDisabledFiltersDeletionCallback(deleteDisabledStringFiltersData);

  const onFilterTypeChange = createFilterChangeHandler(changeFilterGuitarTypeAction, filterGuitarTypes, deleteDisabledStringFilters);
  const onFilterStringsChange = createFilterChangeHandler(changeFilterGuitarStringsAction, filterGuitarStrings, deleteDisabledTypeFilters);

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
              checked={guitarType in filterGuitarTypes}
              disabled={!(guitarType in availableTypesForCurrentGuitarStrings)}
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
              checked={stringsAmount in filterGuitarStrings}
              disabled={!(stringsAmount in availableStringsForCurrentGuitarTypes)}
            />
          ))}
        </fieldset>

        {/* <button className="guitar-filters__show button" type="submit">Показать</button> */}
      </form>
    </section>
  );
};

GuitarFilters.propTypes = {
  priceFrom: PropTypes.number.isRequired,
  priceTo: PropTypes.number.isRequired,
  filterGuitarTypes: PropTypes.object.isRequired,
  filterGuitarStrings: PropTypes.object.isRequired,
  changeFilterPriceFromAction: PropTypes.func.isRequired,
  changeFilterPriceToAction: PropTypes.func.isRequired,
  changeFilterGuitarTypeAction: PropTypes.func.isRequired,
  changeFilterGuitarStringsAction: PropTypes.func.isRequired,
  setFilterGuitarType: PropTypes.func.isRequired,
  setFilterGuitarStrings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  priceFrom: getPriceFrom(state),
  priceTo: getPriceTo(state),
  filterGuitarTypes: getCurrentFilterGuitarTypes(state),
  filterGuitarStrings: getCurrentFilterGuitarStrings(state),
});


const mapDispatchToProps = (dispatch) => ({
  changeFilterPriceFromAction(value) {
    dispatch(changeFilterPriceFrom(value));
  },
  changeFilterPriceToAction(value) {
    dispatch(changeFilterPriceTo(value));
  },
  changeFilterGuitarTypeAction: dispatchFilterChange(dispatch, changeFilterGuitarType),
  changeFilterGuitarStringsAction: dispatchFilterChange(dispatch, changeFilterGuitarStrings),
  setFilterGuitarType(newValues) {
    dispatch(changeFilterGuitarType(newValues));
  },
  setFilterGuitarStrings(newValues) {
    dispatch(changeFilterGuitarStrings(newValues));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GuitarFilters);
