import React from "react";
import PropTypes from "prop-types";

const PaginationItem = (props) => {
  const {
    isCurrentPage,
    page,
    onPageClick,
  } = props;

  return (
    <li
      onClick={onPageClick}
      data-page={page}
      key={`page-${page}`}
      className="pagination__item"
    >
      <a href="#" className={`pagination__link ${isCurrentPage ? `pagination__link--active` : ``}`}>{page}</a>
    </li>
  );
};

PaginationItem.propTypes = {
  isCurrentPage: PropTypes.bool,
  page: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default PaginationItem;
