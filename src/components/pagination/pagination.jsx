import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCurrentPage, getGuitarsSorted} from "../../store/selectors";
import {GUITARS_PER_PAGE, PropTypesValidation} from "../../const";
import {changePage} from "../../store/actions";

// const Dots = () => (
//   <li className="pagination__item">
//     <a className="pagination__link pagination__link--dots">...</a>
//   </li>
// );

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

  return (
    <ul className="guitar-catalog__pagination pagination">
      {new Array(pagesCount).fill(``).map((_, i) => {
        const page = i + 1;

        return (
          <li
            onClick={onPageClick}
            data-page={page}
            key={`page-${page}`}
            className="pagination__item"
          >
            <a href="#" className={`pagination__link ${page === currentPage ? `pagination__link--active` : ``}`}>{page}</a>
          </li>
        );
      })}
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
