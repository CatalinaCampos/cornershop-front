import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";
import Home from "./screens/Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  rootElement
);
