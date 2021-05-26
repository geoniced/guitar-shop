export const ActionType = {
  CHANGE_PAGE: `CHANGE_PAGE`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  CHANGE_SORTING_ORDER: `CHANGE_SORTING_ORDER`,
  CHANGE_FILTER_GUITAR_TYPE: `CHANGE_FILTER_GUITAR_TYPE`,
  CHANGE_FILTER_GUITAR_STRINGS: `CHANGE_FILTER_GUITAR_STRINGS`,
  CHANGE_FILTER_PRICE_FROM: `CHANGE_FILTER_PRICE_FROM`,
  CHANGE_FILTER_PRICE_TO: `CHANGE_FILTER_PRICE_TO`,
  OPEN_ADD_TO_CART_POPUP: `OPEN_ADD_TO_CART_POPUP`,
  CLOSE_ADD_TO_CART_POPUP: `CLOSE_ADD_TO_CART_POPUP`,
  OPEN_ITEM_ADDED_TO_CART_POPUP: `OPEN_ITEM_ADDED_TO_CART_POPUP`,
  CLOSE_ITEM_ADDED_TO_CART_POPUP: `CLOSE_ITEM_ADDED_TO_CART_POPUP`,
  OPEN_DELETE_FROM_CART_POPUP: `OPEN_DELETE_FROM_CART_POPUP`,
  CLOSE_DELETE_FROM_CART_POPUP: `CLOSE_DELETE_FROM_CART_POPUP`,
  CHANGE_ADD_TO_CART_POPUP_SHOWN_GUITAR: `CHANGE_ADD_TO_CART_GUITAR`,
  CHANGE_DELETE_FROM_CART_POPUP_SHOWN_GUITAR: `CHANGE_DELETE_FROM_CART_POPUP_SHOWN_GUITAR`,
  ADD_GUITAR_TO_CART: `ADD_GUITAR_TO_CART`,
  DELETE_GUITAR_FROM_CART: `DELETE_GUITAR_FROM_CART`,
  CHANGE_AMOUNT: `CHANGE_AMOUNT`,
};

export const changePage = (value) => ({
  type: ActionType.CHANGE_PAGE,
  payload: value,
});


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

export const changeFilterPriceFrom = (value) => ({
  type: ActionType.CHANGE_FILTER_PRICE_FROM,
  payload: value,
});

export const changeFilterPriceTo = (value) => ({
  type: ActionType.CHANGE_FILTER_PRICE_TO,
  payload: value,
});


export const openAddToCartPopup = () => ({
  type: ActionType.OPEN_ADD_TO_CART_POPUP,
});

export const closeAddToCartPopup = () => ({
  type: ActionType.CLOSE_ADD_TO_CART_POPUP,
});

export const openItemAddedToCartPopup = () => ({
  type: ActionType.OPEN_ITEM_ADDED_TO_CART_POPUP,
});

export const closeItemAddedToCartPopup = () => ({
  type: ActionType.CLOSE_ITEM_ADDED_TO_CART_POPUP,
});

export const openDeleteFromCartPopup = () => ({
  type: ActionType.OPEN_DELETE_FROM_CART_POPUP,
});

export const closeDeleteFromCartPopup = () => ({
  type: ActionType.CLOSE_DELETE_FROM_CART_POPUP,
});

export const changeAddToCartPopupShownGuitar = (guitar) => ({
  type: ActionType.CHANGE_ADD_TO_CART_POPUP_SHOWN_GUITAR,
  payload: guitar,
});

export const changeDeleteFromCartPopupShownGuitar = (guitar) => ({
  type: ActionType.CHANGE_DELETE_FROM_CART_POPUP_SHOWN_GUITAR,
  payload: guitar,
});


export const addGuitarToCart = (guitar) => ({
  type: ActionType.ADD_GUITAR_TO_CART,
  payload: guitar,
});

export const deleteGuitarFromCart = (guitarId) => ({
  type: ActionType.DELETE_GUITAR_FROM_CART,
  payload: guitarId,
});

export const changeAmount = (guitarId, newAmount) => ({
  type: ActionType.CHANGE_AMOUNT,
  payload: {
    guitarId,
    newAmount,
  },
});
