import React from "react";
import ReactDOM from "react-dom/client";
("redux-persist/integration/react");
import "modern-normalize/modern-normalize.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);