import React from "react";
import {Route, Switch} from "react-router-dom";
import {AppRoute} from "../../const";
import GuitarCatalogPage from "../guitar-catalog-page/guitar-catalog-page";

const PageContent = () => {
  return (
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
        <div>TODO</div>
      </Route>
    </Switch>
  )
};

export default PageContent;
