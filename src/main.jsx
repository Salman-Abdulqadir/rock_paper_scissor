import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// global styles
import GlobalStyles from "./globalStyles";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
