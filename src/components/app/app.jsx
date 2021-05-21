import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import PageHeader from "../page-header/page-header";
import PageContent from "../page-content/page-content";
import PageFooter from "../page-footer/page-footer";


const App = () => {
  return (
    <Router>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </Router>
  )
};

export default App;
