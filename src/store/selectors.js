/* eslint-disable no-console */
import {createSelector} from "reselect";
import {GuitarSorting} from "../const";

export const getGuitars = (state) => state.guitars;
export const getOriginalGuitars = (state) => state.originalGuitars;
export const getCurrentSortingType = (state) => state.currentSortingType;
export const getCurrentSortingOrder = (state) => state.currentSortingOrder;

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
