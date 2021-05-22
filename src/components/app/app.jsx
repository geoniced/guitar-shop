import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import PageHeader from "../page-header/page-header";
import PageContent from "../page-content/page-content";
import PageFooter from "../page-footer/page-footer";
// import AddToCartPopup from "../add-to-cart-popup/add-to-cart-popup";
// import ItemAddedToCartPopup from "../item-added-to-cart-popup/item-added-to-cart-popup";
// import DeleteFromCartPopup from "../delete-from-cart-popup/delete-from-cart-popup";


const App = () => {
  return (
    <Router>
      <PageHeader />
      <PageContent />

      {/* TODO: Popup section for testing */}
      {/* <AddToCartPopup />
      <ItemAddedToCartPopup />
      <DeleteFromCartPopup /> */}

      <PageFooter />
    </Router>
  )
};

export default App;
