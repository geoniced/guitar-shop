import PropTypes from "prop-types";
import {ReactComponent as IconArrowUp} from "./assets/img/icon-arrow-up.svg";
import {ReactComponent as IconArrowDown} from "./assets/img/icon-arrow-down.svg";
import {createSortingByPopularity, createSortingByPrice} from "./utils";

export const PREVENT_SCROLL_CLASS = `prevent-scroll`;

export const AppRoute = {
  ROOT: `/`,
  CART: `/cart`,
};

export const GuitarType = {
  ACOUSTIC: `ACOUSTIC`,
  ELECTRO: `ELECTRO`,
  UKULELE: `UKULELE`,
};

export const GuitarTypeName = {
  [GuitarType.ELECTRO]: `электрогитара`,
  [GuitarType.UKULELE]: `укулеле`,
  [GuitarType.ACOUSTIC]: `акустическая гитара`,
};

export const GuitarTypeFilterTitle = {
  [GuitarType.ELECTRO]: `Электрогитары`,
  [GuitarType.UKULELE]: `Укулеле`,
  [GuitarType.ACOUSTIC]: `Акустические гитары`,
};

export const SortingType = {
  PRICE: `PRICE`,
  POPULARITY: `POPULARITY`,
};

export const SortingTypeData = {
  [SortingType.PRICE]: `по цене`,
  [SortingType.POPULARITY]: `по популярности`,
};

export const SortingOrder = {
  ASC: `ASC`,
  DESC: `DESC`,
};

export const SortingOrderData = {
  [SortingOrder.ASC]: {icon: IconArrowUp, text: `От меньшего к большему`},
  [SortingOrder.DESC]: {icon: IconArrowDown, text: `От большего к меньшему`},
};

export const GUITARS_PER_PAGE = 9;
export const DEFAULT_PAGE = 1;

export const GuitarSorting = {
  [SortingType.PRICE]: (guitars, order) => guitars.sort(createSortingByPrice(order)),
  [SortingType.POPULARITY]: (guitars, order) => guitars.sort(createSortingByPopularity(order)),
};


export const getMinimumPrice = (guitars) => {
  return guitars.reduce((minValue, guitar) => {
    return guitar.price < minValue ? guitar.price : minValue;
  }, guitars[0].price);
};

export const getMaximumPrice = (guitars) => {
  return guitars.reduce((maxValue, guitar) => {
    return guitar.price > maxValue ? guitar.price : maxValue;
  }, 0);
};

export const DefaultPrice = {
  FROM: 1000,
  TO: 30000,
};

export const Amount = {
  DEFAULT: 1,
  MIN: 1,
  MAX: 99,
};

export const StringsCount = {
  FOUR: `FOUR`,
  SIX: `SIX`,
  SEVEN: `SEVEN`,
  TWELVE: `TWELVE`,
};

export const StringsPerGuitar = {
  [GuitarType.UKULELE]: [StringsCount.FOUR],
  [GuitarType.ACOUSTIC]: [StringsCount.SIX, StringsCount.SEVEN, StringsCount.TWELVE],
  [GuitarType.ELECTRO]: [StringsCount.FOUR, StringsCount.SIX, StringsCount.SEVEN],
};

// TODO: Think about it. Maybe we can store numbers in StringsCount
// and use number as a key later
export const StringTextNumberMap = {
  [StringsCount.FOUR]: 4,
  [StringsCount.SIX]: 6,
  [StringsCount.SEVEN]: 7,
  [StringsCount.TWELVE]: 12,
};

export const FilterOperation = {
  DELETE: `DELETE`,
  ADD: `ADD`,
};


export const PromoCode = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`,
};

const TEN_PERCENT = 0.1;
const SUPERGITARA_DISCOUNT_RUBLES = 700;
const GITARA2020_DISCOUNT_RUBLES = 3500;
const GITARA2020_MAX_PERCENT = 0.3;

export const PromoCodeDiscount = {
  [PromoCode.GITARAHIT]: (currentValue) => {
    return Math.floor(currentValue - (currentValue * TEN_PERCENT));
  },
  [PromoCode.SUPERGITARA]: (currentValue) => {
    return currentValue - SUPERGITARA_DISCOUNT_RUBLES;
  },
  [PromoCode.GITARA2020]: (currentValue) => {
    const priceWithRublesDiscount = currentValue - GITARA2020_DISCOUNT_RUBLES;

    const totalPrice = GITARA2020_DISCOUNT_RUBLES / currentValue > GITARA2020_MAX_PERCENT
      ? currentValue - (currentValue * GITARA2020_MAX_PERCENT)
      : priceWithRublesDiscount;

    return Math.floor(totalPrice);
  },
};

export const PROMOCODE_IS_NOT_AVAILABLE_MESSAGE = `Промокод не действителен`;

export const PaginationInfo = {
  PAGE_NEIGHBORS: 1,
  DOTS: `DOTS`,
};


export const PropTypesValidation = {
  guitar: PropTypes.shape({
    vendorCode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([...Object.values(GuitarType)]).isRequired,
    reviewsCount: PropTypes.number.isRequired,
    strings: PropTypes.oneOf([...Object.values(StringsCount)]).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    amount: PropTypes.number,
  }),
  sortingType: PropTypes.oneOf([...Object.values(SortingType)]),
  sortingOrder: PropTypes.oneOf([...Object.values(SortingOrder)]),
};
