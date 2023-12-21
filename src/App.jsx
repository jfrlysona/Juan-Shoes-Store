import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import BlogPage from "./Pages/BlogPage";
import DetailsPage from "./Pages/DetailsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details/:blogId" element={<BlogDetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
