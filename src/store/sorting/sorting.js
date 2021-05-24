import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  currentSortingType: null,
  currentSortingOrder: null,
};

const sorting = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        currentSortingType: action.payload,
      });
    case ActionType.CHANGE_SORTING_ORDER:
      return extend(state, {
        currentSortingOrder: action.payload,
      });
  }

  return state;
};

export {sorting};
