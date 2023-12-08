import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import CartProvider from "./context/CartProvider/index.jsx";
import "./index.scss";
import WishlistProvider from "./context/WIshlistProvider/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </HelmetProvider>
  </React.StrictMode>
);
