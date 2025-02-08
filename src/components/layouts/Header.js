import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import $ from "jquery";

import Canvas from "./Canvas";
import Mobilemenu from "./Mobilemenu";

import img1 from "../../assets/img/cart/1.jpg";
import img2 from "../../assets/img/cart/2.jpg";
import img3 from "../../assets/img/cart/3.jpg";
import img4 from "../../assets/img/cart/4.jpg";
import { serverGetCategory } from "../../services/serverApi";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../helper/UserHelper";
import CustomeLoginPopup from "../Custome/LoginPopup/CustomeLoginPopup";
import Newsletter from "./Newsletter";
import { useCartContext } from "../../hooks/CartContext";
import { useDialog } from "../Dialog/DialogContext";
import GetAppButton from "./GetAppButton";

// Cart loop
const cartposts = [
  { img: img1, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
  { img: img2, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
  { img: img3, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
  { img: img4, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
];

const Header = () => {
  const { cartCount } = useCartContext();
  const { open, openDialog, closeDialog  } = useDialog();
  const navigate = useNavigate();
  const [classMethod, setClassMethod] = useState(false);
  const [toggleMethod, setToggleMethod] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const addClass = () => setClassMethod(true);
  const removeClass = () => setClassMethod(false);
  const toggleClass = () => setToggleMethod(!toggleMethod);
  const toggleCartm = () => setToggleCart(!toggleCart);

  const getCategoryData = async () => {
    try {
      setLoading(true);
      const res = await serverGetCategory();
      setCategoryData(res?.data)
    } catch (err) {
      console.log(err);
      setLoading(false);
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoryData();
  }, []);

  const stickyheader = isTop ? "sticky-active" : "";

  const handleAccountNavigate = () => {
    const user = localStorage.getItem('user');
    const userData = JSON.parse(user);
    if (userData) {
      navigate('/account')
    } else {
      navigate('/login')
    }
  }

  const handleWishlistNavigate = () => {
    const userData = getUserData();
    if (userData) {
      navigate('/wishlist')
    } else {
      openDialog();
    }
  }

  const handleCartNavigate = () => {
    const userData = getUserData();
    if (userData) {
      navigate('/cart')
    } else {
      openDialog();
    }
  }


  return (
    <Fragment>
      <header
        className={`header-three header-absolute sticky-header sigma-header ${stickyheader}`}
        id="header"
      >
        <div className="main-menu-area sticky-header" >
            <div className="nav-container d-flex align-items-center justify-content-between" style={{backgroundColor:'#1e1e20'}}>
              <div className="site-logo site-logo-text">
                <img onClick={() => navigate('/')} alt="sample" src="vr logo-Photoroom (1)-Photoroom.png" style={{height: '100px', width: '100%', cursor: 'pointer'}} />
              </div>
              <div className="nav-menu d-lg-flex align-items-center justify-content-between">
                <div className="navbar-close">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                <div className="sigma-header-nav">
                  <div className="container">
                    <div className="sigma-header-nav-inner">
                      <nav>
                        <ul className="sigma-main-menu">
                          <li className="menu-item menu-item-has-children">
                            <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>Home</Link>
                            <ul className="sub-menu">
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <Link to="/shop-left" style={{ textDecoration: 'none', cursor: 'pointer' }}>Shop</Link>
                            <ul className="sub-menu">
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a onClick={() => handleWishlistNavigate()} style={{ textDecoration: 'none', cursor: 'pointer' }}>Wishlist</a>
                          </li>
                          <li className="menu-item">
                            <Link to="/contact" style={{ textDecoration: 'none', cursor: 'pointer' }}>Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GetAppButton />
                <div className="menu-right-buttons">
                  <div className="login-btn" style={{ cursor: 'pointer' }}>
                    <a onClick={() => handleAccountNavigate()} id="loginBtn">
                      <i className="fal fa-user" />
                    </a>
                  </div>
                  <div className="toggle dropdown-btn" style={{ cursor: 'pointer' }}>
                    <span className="sigma-notification">{cartCount}</span>
                    <a onClick={() => handleCartNavigate()}>
                      <i className="fal fa-shopping-bag" />
                    </a>
                    
                  </div>
                  <div className="navbar-toggler">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="sigma-mobile-header">
          <div className="container">
            <div className="sigma-mobile-header-inner">
              <div className="site-logo site-logo-text">
                <img onClick={() => navigate('/')} alt="sample" src="vr logo-Photoroom (1)-Photoroom.png" style={{height: '60px', cursor: 'pointer'}} />
              </div>
              <div className="sigma-hamburger-menu" onClick={toggleClass}>
                <div
                  className={classNames("sigma-menu-btn", {
                    active: toggleMethod,
                  })}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside
          className={classNames("sigma-mobile-menu", { active: toggleMethod })}
        >
          <Mobilemenu />
        </aside>
      </header>

      {showLoginPopup && (
        <Newsletter />
      )}

      <div
        className={classNames("offcanvas-wrapper", {
          "show-offcanvas": classMethod,
        })}
      >
        <div
          className={classNames("offcanvas-overly", {
            "show-overly": classMethod,
          })}
          onClick={removeClass}
        />
        <div className="offcanvas-widget">
          <Link to="#" className="offcanvas-close" onClick={removeClass}>
            <i className="fal fa-times" />
          </Link>
          <Canvas />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
