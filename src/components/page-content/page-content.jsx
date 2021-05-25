import React from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {AppRoute} from "../../const";
import {getIsAddToCartPopupOpened} from "../../store/selectors";
import AddToCartPopup from "../add-to-cart-popup/add-to-cart-popup";
import CartPage from "../cart-page/cart-page";
import GuitarCatalogPage from "../guitar-catalog-page/guitar-catalog-page";

const PageContent = (props) => {
  const {isAddToCartPopupOpened} = props;

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
    </>
  );
};

const mapStateToProps = (state) => ({
  isAddToCartPopupOpened: getIsAddToCartPopupOpened(state),
});

export default connect(mapStateToProps)(PageContent);
