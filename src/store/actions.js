export const ActionType = {
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
};

export const changeSortingType = (newType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: newType,
});
