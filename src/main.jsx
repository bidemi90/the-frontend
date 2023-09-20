import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Store } from "./components/Redux/Store.jsx";
import { Provider } from 'react-redux'




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
     <Provider store={Store}>
    <App />
  </Provider>
  </BrowserRouter>
);
