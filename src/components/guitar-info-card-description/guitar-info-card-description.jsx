import React from "react";
import {GuitarTypeName} from "../../const";
import {capitalizeFirstLetter, formatDecimalWithRublesChar, getGuitarStringsText} from "../../utils";

const GuitarInfoCardDescription = (props) => {
  const {guitar} = props;

  const {
    name,
    price,
    vendorCode,
    strings,
    image,
    type,
  } = guitar;

  const typeText = capitalizeFirstLetter(GuitarTypeName[type]);
  const stringsText = getGuitarStringsText(strings);

  return (
    <div className="guitar-info-card__description-column">
      <div className="guitar-info-card__characteristics">
        <h3 className="guitar-info-card__title">Гитара {name}</h3>
        <p className="guitar-info-card__vendor-code">Артикул: {vendorCode}</p>
        <p className="guitar-info-card__guitar-info">
          <span className="guitar-info-card__guitar-info-text--type">{typeText}, </span>
          <span className="guitar-info-card__guitar-info-text--strings">{stringsText}</span>
        </p>
        <p className="guitar-info-card__guitar-price">Цена: {formatDecimalWithRublesChar(price)}</p>
      </div>

      <img className="guitar-info-card__image" src={image} alt={`${typeText} ${name}`} width="56" height="128" />
    </div>
  );
};
export default GuitarInfoCardDescription;
