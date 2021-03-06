import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ReactComponent as IconStar} from "../../assets/img/icon-star-whole.svg";
import {ReactComponent as IconStarHalf} from "../../assets/img/icon-star-half.svg";
import {formatDecimalWithRublesChar} from "../../utils";
import {AppRoute, GuitarTypeName, PropTypesValidation} from "../../const";


const GuitarCard = (props) => {
  const {
    guitar,
    addToCartClickHandler,
    isInCart,
  } = props;

  const {
    name,
    price,
    image,
    type,
    reviewsCount,
  } = guitar;

  const onAddToCartClick = (evt) => {
    evt.preventDefault();

    addToCartClickHandler(guitar);
  };

  return (
    <li className="guitar-catalog__guitar-item">
      <article className="guitar-catalog__guitar guitar-card">
        <div className="guitar-card__title-with-price-wrapper">
          <h3 className="guitar-card__title">{name}</h3>
          <p className="guitar-card__price">{formatDecimalWithRublesChar(price)}</p>
        </div>

        <img src={image} alt={`${GuitarTypeName[type]} ${name}`} className="guitar-card__image" width="68" height="190" />

        <div className="guitar-card__review-stars-wrapper">
          <ul className="guitar-card__stars">
            <li className="guitar-card__stars-item"><IconStar /></li>
            <li className="guitar-card__stars-item"><IconStar /></li>
            <li className="guitar-card__stars-item"><IconStar /></li>
            <li className="guitar-card__stars-item"><IconStar /></li>
            <li className="guitar-card__stars-item"><IconStarHalf /></li>
          </ul>
          <p className="guitar-card__reviews-count">{reviewsCount}</p>
        </div>

        <div className="guitar-card__buttons-wrapper">
          <a href="#" className="guitar-card__more button">Подробнее</a>

          {isInCart
            ? (
              <Link
                to={AppRoute.CART}
                className="guitar-card__to-cart button"
              >
                В корзину
              </Link>
            )
            : (
              <a
                onClick={onAddToCartClick}
                href="#"
                className="guitar-card__buy button button--orange"
              >
                Купить
              </a>
            )
          }
        </div>

      </article>
    </li>
  );
};

GuitarCard.propTypes = {
  guitar: PropTypesValidation.guitar,
  addToCartClickHandler: PropTypes.func.isRequired,
  isInCart: PropTypes.bool,
};

export default GuitarCard;
