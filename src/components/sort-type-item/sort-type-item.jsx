import React from "react";
import PropTypes from "prop-types";
import {PropTypesValidation, SortingTypeData} from "../../const";

const SortTypeItem = (props) => {
  const {isActive, type, onClick} = props;

  const sortTypeText = SortingTypeData[type];

  return (
    <li
      data-sort-type={type}
      onClick={onClick}
      className="sorting__sort-type-item"
    >
      <a
        href="#"
        className={`sorting__sort-type-text ${isActive ? `sorting__sort-type-text--active` : ``}`}
      >
        {sortTypeText}
      </a>
    </li>
  );
};

SortTypeItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  type: PropTypesValidation.sortingType,
  onClick: PropTypes.func.isRequired,
};

export default SortTypeItem;
