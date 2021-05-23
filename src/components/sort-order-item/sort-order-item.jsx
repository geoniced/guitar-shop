import React from "react";
import {SortingOrderData} from "../../const";

const SortOrderItem = (props) => {
  const {isActive, type, onClick} = props;

  const sortOrderData = SortingOrderData[type];
  const sortOrderText = sortOrderData.text;
  const IconComponent = sortOrderData.icon;

  return (
    <li
      data-sort-order={type}
      onClick={onClick}
      className="sorting__sort-order-item"
    >
      <a
        href="#"
        className={`sorting__sort-order-button ${isActive ? `sorting__sort-order-button--active` : ``}`}
      >
        <IconComponent className="sorting__sort-order-icon" />
        <span className="visually-hidden">{sortOrderText}</span>
      </a>
    </li>
  );
};

export default SortOrderItem;
