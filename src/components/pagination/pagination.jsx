import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentPage, getGuitarsSorted} from "../../store/selectors";
import {GUITARS_PER_PAGE, PaginationInfo, PropTypesValidation} from "../../const";
import {changePage} from "../../store/actions";
import PaginationItem from "../pagination-item/pagination-item";
import {getPageNumbers} from "../../utils";
import PaginationDots from "../pagination-dots/pagination-dots";


const createPages = (pagesCount, currentPage, onPageClick) => {
  const pageNumbers = getPageNumbers(pagesCount, currentPage);

  const pages = pageNumbers.map((pageNumber, i) => {
    if (pageNumber === PaginationInfo.DOTS) {
      return (<PaginationDots key={`page-${i}`}/>);
    }

    return (
      <PaginationItem
        key={`page-${i}`}
        onPageClick={onPageClick}
        page={pageNumber}
        isCurrentPage={currentPage === pageNumber}
      />
    );
  });

  return pages;
};


const Pagination = (props) => {
  const {
    guitars,
    currentPage,
    changePageAction,
  } = props;

  const pagesCount = Math.ceil(guitars.length / GUITARS_PER_PAGE);

  const onPageClick = (evt) => {
    evt.preventDefault();
    const pageNumber = Number(evt.currentTarget.dataset.page);

    changePageAction(pageNumber);
  };

  const onNextPageClick = (evt) => {
    evt.preventDefault();

    const nextPage = currentPage + 1;
    if (currentPage !== pagesCount) {
      changePageAction(nextPage);
    }
  };

  const pageElements = createPages(pagesCount, currentPage, onPageClick);


  return (
    <ul className="guitar-catalog__pagination pagination">
      {pageElements}
      {pagesCount > 0 && (
        <li
          onClick={onNextPageClick}
          className="pagination__item"
        >
          <a
            href="#"
            className={`pagination__link pagination__link--next ${currentPage === pagesCount ? `pagination__link--disabled` : ``}`}
          >
            Далее
          </a>
        </li>
      )}
    </ul>
  );
};

Pagination.propTypes = {
  guitars: PropTypes.arrayOf(PropTypesValidation.guitar),
  currentPage: PropTypes.number.isRequired,
  changePageAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guitars: getGuitarsSorted(state),
  currentPage: getCurrentPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePageAction(page) {
    dispatch(changePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
