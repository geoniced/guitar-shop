import {DefaultPrice} from "../const";
import {GUITARS} from "../guitars";
import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  originalGuitars: GUITARS,
  guitars: GUITARS,
  currentSortingType: null,
  currentSortingOrder: null,
  priceFrom: DefaultPrice.FROM,
  priceTo: DefaultPrice.TO,
  currentFilterGuitarTypes: {},
  currentFilterGuitarStrings: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        currentSortingType: action.payload,
      });
    case ActionType.CHANGE_SORTING_ORDER:
      return extend(state, {
        currentSortingOrder: action.payload,
      });
    case ActionType.CHANGE_FILTER_PRICE_FROM:
      return extend(state, {
        priceFrom: action.payload,
      });
    case ActionType.CHANGE_FILTER_PRICE_TO:
      return extend(state, {
        priceTo: action.payload,
      });
    case ActionType.CHANGE_FILTER_GUITAR_TYPE:
      return extend(state, {
        currentFilterGuitarTypes: action.payload,
      });
    case ActionType.CHANGE_FILTER_GUITAR_STRINGS:
      return extend(state, {
        currentFilterGuitarStrings: action.payload,
      });
  }

  return state;
};

export {reducer};
