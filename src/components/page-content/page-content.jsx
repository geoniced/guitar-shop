import React from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {AppRoute} from "../../const";
import {getIsAddToCartPopupOpened, getIsDeleteFromCartPopupOpened, getIsItemAddedToCartPopupOpened} from "../../store/selectors";
import AddToCartPopup from "../add-to-cart-popup/add-to-cart-popup";
import CartPage from "../cart-page/cart-page";
import DeleteFromCartPopup from "../delete-from-cart-popup/delete-from-cart-popup";
import GuitarCatalogPage from "../guitar-catalog-page/guitar-catalog-page";
import ItemAddedToCartPopup from "../item-added-to-cart-popup/item-added-to-cart-popup";

const PageContent = (props) => {
  const {
    isAddToCartPopupOpened,
    isItemAddedToCartPopupOpened,
    isDeleteFromCartPopupOpened,
  } = props;

  return (
    <>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
        >
          <GuitarCatalogPage />
        </Route>
        <Route
          exact
          path={AppRoute.CART}
        >
          <CartPage />
        </Route>
      </Switch>
      {isAddToCartPopupOpened && <AddToCartPopup />}
      {isItemAddedToCartPopupOpened && <ItemAddedToCartPopup />}
      {isDeleteFromCartPopupOpened && <DeleteFromCartPopup />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAddToCartPopupOpened: getIsAddToCartPopupOpened(state),
  isItemAddedToCartPopupOpened: getIsItemAddedToCartPopupOpened(state),
  isDeleteFromCartPopupOpened: getIsDeleteFromCartPopupOpened(state),
});

export default connect(mapStateToProps)(PageContent);
