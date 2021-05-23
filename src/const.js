import {ReactComponent as IconArrowUp} from "./assets/img/icon-arrow-up.svg";
import {ReactComponent as IconArrowDown} from "./assets/img/icon-arrow-down.svg";

export const AppRoute = {
  ROOT: `/`,
  CART: `/cart`,
};

export const GuitarType = {
  ELECTRO: `ELECTRO`,
  UKULELE: `UKULELE`,
  ACOUSTIC: `ACOUSTIC`,
};

export const GuitarTypeName = {
  [GuitarType.ELECTRO]: `электрогитара`,
  [GuitarType.UKULELE]: `укулеле`,
  [GuitarType.ACOUSTIC]: `акустическая гитара`,
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
