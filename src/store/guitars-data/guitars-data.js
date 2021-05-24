import {GUITARS} from "../../guitars";

const initialState = {
  originalGuitars: GUITARS,
  guitars: GUITARS,
};

const guitarsData = (state = initialState, action) => {
  return state;
};

export {guitarsData};
