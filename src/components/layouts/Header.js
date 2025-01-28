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

// Cart loop
const cartposts = [
  { img: img1, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
  { img: img2, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
  { img: img3, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
  { img: img4, title: "Oak Wood Cutting Board", price: "2x 10,000$" },
];

const Header = () => {
  const { cartCount } = useCartContext();
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
      return (<CustomeLoginPopup isOpen={true} onClose={() => {}} />)
    }
  }

  const handleWishlistNavigate = () => {
    const userData = getUserData();
    if (userData) {
      navigate('/wishlist')
    } else {
      navigate('/login')
      // window.location.reload();
      // setShowLoginPopup(true);
    }
  }

  const handleCartNavigate = () => {
    const userData = getUserData();
    if (userData) {
      navigate('/cart')
    } else {
      navigate('/login')
    }
  }


  return (
    <Fragment>
      <header
        className={`header-three header-absolute sticky-header sigma-header ${stickyheader}`}
        id="header"
      >
        <div className="main-menu-area sticky-header">
          {/* <div className="container-fluid container-custom-three"> */}
            <div className="nav-container d-flex align-items-center justify-content-between">
              {/* Site Logo */}
              <div className="site-logo site-logo-text">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M369.853,250.251l-100-241C267.53,3.65,262.062,0,255.999,0s-11.531,3.65-13.854,9.251l-100,241    c-1.527,3.681-1.527,7.817,0,11.498l100,241c2.323,5.601,7.791,9.251,13.854,9.251s11.531-3.65,13.854-9.251l100-241    C371.381,258.068,371.381,253.932,369.853,250.251z M255.999,457.861L172.239,256l83.76-201.861L339.759,256L255.999,457.861z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-1"
                      d="M139.606,118.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C145.465,133.748,145.465,124.25,139.606,118.393z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-2"
                      d="M456.607,55.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394l63-63C462.465,70.748,462.465,61.25,456.607,55.393z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-3"
                      d="M139.606,372.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    C58.322,459.535,62.16,461,65.999,461s7.678-1.465,10.607-4.394l63-63C145.465,387.748,145.465,378.25,139.606,372.393z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-4"
                      d="M456.607,435.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C462.465,450.748,462.465,441.25,456.607,435.393z"
                      fill="#ffffff"
                    />
                  </svg>
                  <div className="site-logo-text">
                    <h3>VR Fashion</h3>
                    {/* <h6>Luxury Pieces</h6> */}
                  </div>
                </Link>
              </div>
              {/* Main Menu */}
              <div className="nav-menu d-lg-flex align-items-center justify-content-between">
                {/* Navbar Close Icon */}
                <div className="navbar-close">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Menu Items */}
                <div className="sigma-header-nav">
                  <div className="container">
                    <div className="sigma-header-nav-inner">
                      <nav>
                        <ul className="sigma-main-menu">
                          <li className="menu-item menu-item-has-children">
                            <Link to="/">Home</Link>
                            <ul className="sub-menu">
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <Link to="/shop-left">Shop</Link>
                            <ul className="sub-menu">
                            </ul>
                          </li>
                          <li className="menu-item">
                            <Link onClick={() => handleWishlistNavigate()}>Wishlist</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              {/* navbar right content */}
              <div className="menu-right-buttons">
                {/* Log in icon */}
                <div className="login-btn">
                  <Link onClick={() => handleAccountNavigate()} id="loginBtn">
                    <i className="fal fa-user" />
                  </Link>
                </div>
                <div className="toggle dropdown-btn">
                  <span className="sigma-notification">{cartCount}</span>
                  <Link onClick={() => handleCartNavigate()}>
                    <i className="fal fa-shopping-bag" />
                  </Link>
                  
                </div>
                {/* Navbar Toggler */}
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        {/* Mobile Header Start */}
        <div className="sigma-mobile-header">
          <div className="container">
            <div className="sigma-mobile-header-inner">
              {/* Site Logo */}
              <div className="site-logo site-logo-text">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M369.853,250.251l-100-241C267.53,3.65,262.062,0,255.999,0s-11.531,3.65-13.854,9.251l-100,241    c-1.527,3.681-1.527,7.817,0,11.498l100,241c2.323,5.601,7.791,9.251,13.854,9.251s11.531-3.65,13.854-9.251l100-241    C371.381,258.068,371.381,253.932,369.853,250.251z M255.999,457.861L172.239,256l83.76-201.861L339.759,256L255.999,457.861z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-1"
                      d="M139.606,118.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C145.465,133.748,145.465,124.25,139.606,118.393z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-2"
                      d="M456.607,55.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394l63-63C462.465,70.748,462.465,61.25,456.607,55.393z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-3"
                      d="M139.606,372.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    C58.322,459.535,62.16,461,65.999,461s7.678-1.465,10.607-4.394l63-63C145.465,387.748,145.465,378.25,139.606,372.393z"
                      fill="#ffffff"
                    />
                    <path
                      className="diamond-spark spark-4"
                      d="M456.607,435.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C462.465,450.748,462.465,441.25,456.607,435.393z"
                      fill="#ffffff"
                    />
                  </svg>
                  <div className="site-logo-text">
                    <h3>VR Fashion</h3>
                    {/* <h6>Luxury Pieces</h6> */}
                  </div>
                </Link>
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
        {/* Mobile Header End */}
        {/* Mobile Menu Start */}
        <aside
          className={classNames("sigma-mobile-menu", { active: toggleMethod })}
        >
          <Mobilemenu />
        </aside>
        {/* Mobile Menu End */}
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
