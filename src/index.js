import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Helmet from "react-helmet";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import "./scss/style.scss";
import droidSans from "./assets/fonts/droid-sans.woff2";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <Helmet>
        <link rel="preload" href={droidSans} as="font" type="font/woff2" crossOrigin/>
      </Helmet>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
