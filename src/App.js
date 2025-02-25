import React from "react";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/layouts/Preloader";
import Home from "./components/pages/Home";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Classification from "./components/pages/Classification";
import ComingSoon from "./components/pages/Comingsoon";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ShopDetail from "./components/pages/Shopdetail";
import ShopLeft from "./components/pages/Shopleft";
import Wishlist from "./components/pages/Wishlist";
import ErrorPage from "./components/pages/Error";
import { useDialog } from "./components/Dialog/DialogContext";
import LoginDialog from "./components/Dialog/LoginDialog";
import Category from "./components/pages/Category";

const App = () => {
  const { open, closeDialog, openDialog } = useDialog();
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/shop-left" element={<ShopLeft />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {open && (
        <LoginDialog
          open={open}
          closeDialog={closeDialog}
          openDialog={openDialog}
        />
      )}
    </>
  );
};

export default App;
