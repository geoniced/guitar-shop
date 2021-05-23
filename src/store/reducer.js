import {GUITARS} from "../guitars";
import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  guitars: GUITARS,
  currentSortingType: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        currentSortingType: action.payload,
      });
  }

  return state;
};

export {reducer};
