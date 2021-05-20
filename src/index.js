import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import App from "./components/app/app";
import "./scss/style.scss";
import droidSans from "./assets/fonts/droid-sans.woff2";

ReactDOM.render(
  <>
    <Helmet>
      <link rel="preload" href={droidSans} as="font" type="font/woff2" crossOrigin/>
    </Helmet>
    <App />
  </>,
  document.getElementById(`root`)
);
