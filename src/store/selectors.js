import {createSelector} from "reselect";
import {GuitarSorting} from "../const";

export const getGuitars = (state) => state.GUITARS_DATA.guitars;
export const getOriginalGuitars = (state) => state.GUITARS_DATA.originalGuitars;
export const getCurrentSortingType = (state) => state.SORTING.currentSortingType;
export const getCurrentSortingOrder = (state) => state.SORTING.currentSortingOrder;
export const getPriceFrom = (state) => state.FILTERS.priceFrom;
export const getPriceTo = (state) => state.FILTERS.priceTo;
export const getCurrentFilterGuitarTypes = (state) => state.FILTERS.currentFilterGuitarTypes;
export const getCurrentFilterGuitarStrings = (state) => state.FILTERS.currentFilterGuitarStrings;

export const getGuitarsSorted = createSelector(
    getOriginalGuitars,
    getCurrentSortingType,
    getCurrentSortingOrder,
    (guitars, sortingType, sortingOrder) => {
      let sortedGuitars = guitars.slice();

      if (sortingType) {
        sortedGuitars = GuitarSorting[sortingType](sortedGuitars, sortingOrder);
      }

      return sortedGuitars;
    }
);
