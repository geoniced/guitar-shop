/* eslint-disable no-console */
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
    getPriceFrom,
    getPriceTo,
    getCurrentFilterGuitarTypes,
    getCurrentFilterGuitarStrings,
    getCurrentSortingType,
    getCurrentSortingOrder,
    (guitars, priceFrom, priceTo, guitarTypes, guitarStrings, sortingType, sortingOrder) => {
      let filteredGuitars = guitars.slice();

      filteredGuitars = filteredGuitars.filter((guitar) => guitar.price >= priceFrom && guitar.price <= priceTo);

      // Behavior when no filter option is checked
      if (Object.keys(guitarTypes).length > 0) {
        filteredGuitars = filteredGuitars.filter((guitar) => guitar.type in guitarTypes);
      }

      // Behavior when no filter option is checked
      if (Object.keys(guitarStrings).length > 0) {
        filteredGuitars = filteredGuitars.filter((guitar) => guitar.strings in guitarStrings);
      }

      let sortedGuitars = filteredGuitars.slice();

      if (sortingType) {
        sortedGuitars = GuitarSorting[sortingType](sortedGuitars, sortingOrder);
      }

      return sortedGuitars;
    }
);
