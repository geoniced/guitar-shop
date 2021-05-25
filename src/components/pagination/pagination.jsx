import React from "react";
import {connect} from "react-redux";
import {getGuitarsSorted} from "../../store/selectors";
import {GUITARS_PER_PAGE} from "../../const";

const Dots = () => (
  <li className="pagination__item">
    <a className="pagination__link pagination__link--dots">...</a>
  </li>
);

const Pagination = (props) => {
  const {guitars} = props;

  const pagesCount = Math.ceil(guitars.length / GUITARS_PER_PAGE);

  return (
    <ul className="guitar-catalog__pagination pagination">
      {new Array(pagesCount).fill(``).map((_, i) => (
        <li key={`page-${i}`} className="pagination__item">
          <a className={`pagination__link ${i === 0 ? `pagination__link--active` : ``}`}>{i + 1}</a>
        </li>
      ))}
      <li className="pagination__item">
        <a href="#" className="pagination__link pagination__link--next">Далее</a>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  guitars: getGuitarsSorted(state),
});

export default connect(mapStateToProps)(Pagination);
