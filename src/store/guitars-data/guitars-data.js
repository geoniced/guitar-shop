import {GUITARS} from "../../guitars";
import {ActionType} from "../actions";
import {extend} from "../../utils";
import {DEFAULT_PAGE} from "../../const";

const initialState = {
  originalGuitars: GUITARS,
  guitars: GUITARS,
  currentPage: DEFAULT_PAGE,
};

const guitarsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_PAGE:
      return extend(state, {
        currentPage: action.payload,
      });
  }

  return state;
};

export {guitarsData};
