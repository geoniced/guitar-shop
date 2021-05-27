import {getMaximumPrice, getMinimumPrice} from "../../const";
import {GUITARS} from "../../guitars";
import {extend} from "../../utils";
import {ActionType} from "../actions";

const minPrice = getMinimumPrice(GUITARS);
const maxPrice = getMaximumPrice(GUITARS);

const initialState = {
  priceFrom: minPrice,
  priceTo: maxPrice,
  priceBoundaries: {
    MAX: maxPrice,
    MIN: minPrice,
  },
  currentFilterGuitarTypes: {},
  currentFilterGuitarStrings: {},
};

const filters = (state = initialState, action) => {
  switch (action.type) {
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

export {filters};
