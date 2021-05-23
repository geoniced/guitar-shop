export const ActionType = {
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  CHANGE_SORTING_ORDER: `CHANGE_SORTING_ORDER`,
};

export const changeSortingType = (newType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: newType,
});

export const changeSortingOrder = (newOrder) => ({
  type: ActionType.CHANGE_SORTING_ORDER,
  payload: newOrder,
});
