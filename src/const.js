import {ReactComponent as IconArrowUp} from "./assets/img/icon-arrow-up.svg";
import {ReactComponent as IconArrowDown} from "./assets/img/icon-arrow-down.svg";
import {createSortingByPopularity, createSortingByPrice} from "./utils";

export const AppRoute = {
  ROOT: `/`,
  CART: `/cart`,
};

export const GuitarType = {
  ACOUSTIC: `ACOUSTIC`,
  UKULELE: `UKULELE`,
  ELECTRO: `ELECTRO`,
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

export const SHOWN_GUITARS_COUNT = 9;


export const GuitarSorting = {
  [SortingType.PRICE]: (guitars, order) => guitars.sort(createSortingByPrice(order)),
  [SortingType.POPULARITY]: (guitars, order) => guitars.sort(createSortingByPopularity(order)),
};


export const DefaultPrice = {
  FROM: 1000,
  TO: 30000,
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
