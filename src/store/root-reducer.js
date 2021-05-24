import {combineReducers} from "redux";
import {guitarsData} from "./guitars-data/guitars-data";
import {filters} from "./filters/filters";
import {sorting} from "./sorting/sorting";

export const NameSpace = {
  FILTERS: `FILTERS`,
  GUITARS_DATA: `GUITARS_DATA`,
  SORTING: `SORTING`,
};

export default combineReducers({
  [NameSpace.GUITARS_DATA]: guitarsData,
  [NameSpace.FILTERS]: filters,
  [NameSpace.SORTING]: sorting,
});
