import {combineReducers} from "redux";
import {guitarsData} from "./guitars-data/guitars-data";
import {filters} from "./filters/filters";
import {sorting} from "./sorting/sorting";
import {popups} from "./popups/popups";
import {cart} from "./cart/cart";

export const NameSpace = {
  FILTERS: `FILTERS`,
  GUITARS_DATA: `GUITARS_DATA`,
  SORTING: `SORTING`,
  POPUPS: `POPUPS`,
  CART: `CART`,
};

export default combineReducers({
  [NameSpace.GUITARS_DATA]: guitarsData,
  [NameSpace.FILTERS]: filters,
  [NameSpace.SORTING]: sorting,
  [NameSpace.POPUPS]: popups,
  [NameSpace.CART]: cart,
});
