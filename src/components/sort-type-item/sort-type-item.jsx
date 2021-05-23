import React from "react";
import {SortingTypeData} from "../../const";

const SortTypeItem = (props) => {
  const {isActive, type} = props;

  const sortTypeText = SortingTypeData[type];

  return (
    <li className="sorting__sort-type-item">
      <a
        href="#"
        className={`sorting__sort-type-text sorting__sort-type-text--${type} ${isActive ? `sorting__sort-type-text--active` : ``}`}
      >
        {sortTypeText}
      </a>
    </li>
  );
};

export default SortTypeItem;
