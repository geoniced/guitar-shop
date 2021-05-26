import {extend, removeGuitar} from "../../utils";
import {ActionType} from "../actions";

const initialState = {
  cartGuitars: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_GUITAR_TO_CART:
      const newCardGuitars = state.cartGuitars.slice();
      newCardGuitars.push(action.payload);

      return extend(state, {
        cartGuitars: newCardGuitars,
      });
    case ActionType.DELETE_GUITAR_FROM_CART:
      const cartGuitarsWithoutGuitar = removeGuitar(state.cartGuitars, action.payload);

      return extend(state, {
        cartGuitars: cartGuitarsWithoutGuitar,
      });
  }

  return state;
};

export {cart};
