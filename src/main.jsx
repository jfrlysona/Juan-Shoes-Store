import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { HelmetProvider } from "react-helmet-async";
import CartProvider from "./context/CartProvider/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </HelmetProvider>
  </React.StrictMode>
);
