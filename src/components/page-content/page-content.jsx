import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { AppRoute } from "../../const";
import GuitarCatalogPage from "../guitar-catalog-page/guitar-catalog-page";

const PageContent = () => {
  return (
    <Router>
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
    </Router>
  )
};

export default PageContent;
