import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  isAddToCartPopupOpened: false,
};

const popups = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_ADD_TO_CART_POPUP:
      return extend(state, {
        isAddToCartPopupOpened: true,
      });
    case ActionType.CLOSE_ADD_TO_CART_POPUP:
      return extend(state, {
        isAddToCartPopupOpened: false,
      });
  }

  return state;
};

export {popups};
