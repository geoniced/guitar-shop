import React from "react";
import {SortingTypeData} from "../../const";

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

export default SortTypeItem;
