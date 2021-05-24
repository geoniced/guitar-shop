export const ActionType = {
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  CHANGE_SORTING_ORDER: `CHANGE_SORTING_ORDER`,
  CHANGE_FILTER_GUITAR_TYPE: `CHANGE_FILTER_GUITAR_TYPE`,
  CHANGE_FILTER_GUITAR_STRINGS: `CHANGE_FILTER_GUITAR_STRINGS`,
};

export const changeSortingType = (newType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: newType,
});

export const changeSortingOrder = (newOrder) => ({
  type: ActionType.CHANGE_SORTING_ORDER,
  payload: newOrder,
});

export const changeFilterGuitarType = (value) => ({
  type: ActionType.CHANGE_FILTER_GUITAR_TYPE,
  payload: value,
});

export const changeFilterGuitarStrings = (value) => ({
  type: ActionType.CHANGE_FILTER_GUITAR_STRINGS,
  payload: value,
});
