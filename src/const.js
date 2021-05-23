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

export const SHOWN_GUITARS_COUNT = 9;
