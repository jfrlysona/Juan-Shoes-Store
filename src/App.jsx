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
import CheckoutPage from "./Pages/CheckoutPage";
import NotFound from "./Pages/NotFound";
import AdminPanel from "./Pages/AdminPanel";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-details/:blogId" element={<BlogDetailsPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      {/* <Route path="/my-account">My Account</Route> */}
    </>
  );
}

export default App;
