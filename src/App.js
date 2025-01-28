import React from "react";
import { Routes, Route } from "react-router-dom";

// Preloader
import Preloader from "./components/layouts/Preloader";
// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
// import BlogDetail from "./components/pages/Blogdetail";
// import BlogGrid from "./components/pages/Bloggrid";
// import BlogGridSidebar from "./components/pages/Bloggridsidebar";
// import BlogList from "./components/pages/Bloglist";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Classification from "./components/pages/Classification";
import ComingSoon from "./components/pages/Comingsoon";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import Gallery from "./components/pages/Gallery";
import GalleryTwo from "./components/pages/Gallerytwo";
import Legal from "./components/pages/Legal";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ShopDetail from "./components/pages/Shopdetail";
import ShopLeft from "./components/pages/Shopleft";
import ShopLeftTwo from "./components/pages/Shoplefttwo";
import ShopRight from "./components/pages/Shopright";
import ShopRightTwo from "./components/pages/Shoprighttwo";
import Team from "./components/pages/Team";
import Typography from "./components/pages/Typography";
import Wishlist from "./components/pages/Wishlist";
import ErrorPage from "./components/pages/Error";

const App = () => {
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        {/* <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-grid-sidebar" element={<BlogGridSidebar />} />
        <Route path="/blog-list" element={<BlogList />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-two" element={<GalleryTwo />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/shop-left" element={<ShopLeft />} />
        <Route path="/shop-left-two" element={<ShopLeftTwo />} />
        <Route path="/shop-right" element={<ShopRight />} />
        <Route path="/shop-right-two" element={<ShopRightTwo />} />
        <Route path="/team" element={<Team />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
