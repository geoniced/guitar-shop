import {extend} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  cartGuitars: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CART_GUITARS:
      return extend(state, {
        cartGuitars: action.payload,
      });
  }

  return state;
};

export {cart};
