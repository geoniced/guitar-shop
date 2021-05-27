import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {PropTypesValidation, SortingOrder, SortingType} from "../../const";
import SortTypeItem from "../sort-type-item/sort-type-item";
import {changeSortingOrder, changeSortingType} from "../../store/actions";
import SortOrderItem from "../sort-order-item/sort-order-item";
import {getCurrentSortingOrder, getCurrentSortingType} from "../../store/selectors";

const Sorting = (props) => {
  const {
    currentSortingType,
    currentSortingOrder,
    changeSortingTypeAction,
    changeSortingOrderAction,
  } = props;

  const sortTypes = Object.values(SortingType);
  const sortOrders = Object.values(SortingOrder);

  const onSortTypeClick = (evt) => {
    evt.preventDefault();

    const sortType = evt.currentTarget.dataset.sortType;

    if (!currentSortingType) {
      changeSortingOrderAction(SortingOrder.ASC);
    }

    changeSortingTypeAction(sortType);
  };

  const onSortOrderClick = (evt) => {
    evt.preventDefault();

    const sortOrder = evt.currentTarget.dataset.sortOrder;

    if (!currentSortingType) {
      changeSortingTypeAction(SortingType.PRICE);
    }

    changeSortingOrderAction(sortOrder);
  };

  return (
    <div className="guitar-catalog__sorting sorting">
      <p className="sorting__text">
        Сортировать:
      </p>

      <ul className="sorting__sort-types">
        {sortTypes.map((sortType, i) => (
          <SortTypeItem
            key={`sort-type-item-${i}`}
            isActive={currentSortingType === sortType}
            type={sortType}
            onClick={onSortTypeClick}
          />
        ))}
      </ul>

      <ul className="sorting__sort-orders">
        {sortOrders.map((sortOrder, i) => (
          <SortOrderItem
            key={`sort-type-item-${i}`}
            isActive={currentSortingOrder === sortOrder}
            type={sortOrder}
            onClick={onSortOrderClick}
          />
        ))}
      </ul>
    </div>
  );
};

Sorting.propTypes = {
  currentSortingType: PropTypesValidation.sortingType,
  currentSortingOrder: PropTypesValidation.sortingOrder,
  changeSortingTypeAction: PropTypes.func.isRequired,
  changeSortingOrderAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortingType: getCurrentSortingType(state),
  currentSortingOrder: getCurrentSortingOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingTypeAction(newType) {
    dispatch(changeSortingType(newType));
  },
  changeSortingOrderAction(newOrder) {
    dispatch(changeSortingOrder(newOrder));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
