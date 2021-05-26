import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  isAddToCartPopupOpened: false,
  isItemAddedToCartPopupOpened: false,
  addToCartShownGuitar: null,
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
    case ActionType.OPEN_ITEM_ADDED_TO_CART_POPUP:
      return extend(state, {
        isItemAddedToCartPopupOpened: true,
      });
    case ActionType.CLOSE_ITEM_ADDED_TO_CART_POPUP:
      return extend(state, {
        isItemAddedToCartPopupOpened: false,
      });
    case ActionType.CHANGE_ADD_TO_CART_POPUP_SHOWN_GUITAR:
      return extend(state, {
        addToCartShownGuitar: action.payload,
      });
  }

  return state;
};

export {popups};
