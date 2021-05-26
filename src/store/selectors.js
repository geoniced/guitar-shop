import {createSelector} from "reselect";
import {GuitarSorting} from "../const";

export const getGuitars = (state) => state.GUITARS_DATA.guitars;
export const getOriginalGuitars = (state) => state.GUITARS_DATA.originalGuitars;
export const getCurrentPage = (state) => state.GUITARS_DATA.currentPage;

export const getCurrentSortingType = (state) => state.SORTING.currentSortingType;
export const getCurrentSortingOrder = (state) => state.SORTING.currentSortingOrder;

export const getPriceFrom = (state) => state.FILTERS.priceFrom;
export const getPriceTo = (state) => state.FILTERS.priceTo;
export const getCurrentFilterGuitarTypes = (state) => state.FILTERS.currentFilterGuitarTypes;
export const getCurrentFilterGuitarStrings = (state) => state.FILTERS.currentFilterGuitarStrings;

export const getIsAddToCartPopupOpened = (state) => state.POPUPS.isAddToCartPopupOpened;
export const getIsItemAddedToCartPopupOpened = (state) => state.POPUPS.isItemAddedToCartPopupOpened;
export const getAddToCartShownGuitar = (state) => state.POPUPS.addToCartShownGuitar;

export const getCartGuitars = (state) => state.CART.cartGuitars;
export const getCartItemsCount = (state) => state.CART.cartGuitars.length;

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

      const isEmptyGuitarTypes = Object.keys(guitarTypes).length > 0;
      const isEmptyGuitarStrings = Object.keys(guitarStrings).length > 0;

      filteredGuitars = filteredGuitars.filter((guitar) => {
        const criterias = [
          guitar.price >= priceFrom && guitar.price <= priceTo,
          isEmptyGuitarTypes ? guitar.type in guitarTypes : true, // Behavior when no filter option is checked
          isEmptyGuitarStrings ? guitar.strings in guitarStrings : true, // Behavior when no filter option is checked
        ];

        return criterias.every((criteria) => criteria);
      });

      let sortedGuitars = filteredGuitars.slice();

      if (sortingType) {
        sortedGuitars = GuitarSorting[sortingType](sortedGuitars, sortingOrder);
      }

      return sortedGuitars;
    }
);
