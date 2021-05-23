import React from "react";
import {connect} from "react-redux";
import {ReactComponent as IconArrowUp} from "../../assets/img/icon-arrow-up.svg";
import {ReactComponent as IconArrowDown} from "../../assets/img/icon-arrow-down.svg";
import {SortingType} from "../../const";
import SortTypeItem from "../sort-type-item/sort-type-item";

const Sorting = (props) => {
  const {currentSortingType} = props;

  const sortTypes = Object.values(SortingType);

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
          />
        ))}
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
  );
};

const mapStateToProps = (state) => ({
  currentSortingType: state.currentSortingType,
});

export default connect(mapStateToProps)(Sorting);
