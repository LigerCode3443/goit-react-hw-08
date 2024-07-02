import React from "react";
import ReactDOM from "react-dom/client";
("redux-persist/integration/react");
import "modern-normalize/modern-normalize.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
