import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../helper/UserHelper";
import profileImg from '../../assets/img/profile_img.png'
import { useDialog } from "../Dialog/DialogContext";
import GetAppButton from "./GetAppButton";

const Mobilemenu = () => {
  const { openDialog } = useDialog();
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const getNextSibling = (elem, selector) => {
    let sibling = elem.nextElementSibling;
    if (!selector) return sibling;
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };

  const triggerChild = (e) => {
    let subMenu = getNextSibling(e.target, ".sub-menu");
    if (subMenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  const user = getUserData();

  const handleNavigation = (route) => {
    const userData = getUserData();
    if (userData) {
      navigate(route);
    } else {
      if (route === '/cart' || route === '/wishlist') {
        openDialog();
      } else {
        navigate(route);
      }
    }
  }

  const navigationmenu = [
    { id: 5, linkText: "Home", link: "/" },
    { id: 6, linkText: "Shop", link: "/shop-left" },
    { id: 6, linkText: "Wishlist", link: "/wishlist" },
    { id: 7, linkText: "Cart", link: "/cart" },
    { id: 7, linkText: "Contact", link: "/contact" },
    ...(user ? [{ id: 8, linkText: "Account", link: "/account" }] : []), // Conditionally add "Account"
  ];

  return (
    <div className="mobilemenu-container" style={{ position: 'relative', height: '100vh' }}>
      {/* User Info Section */}
      <div
        // className="bg-black"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "20px",
          borderBottom: "1px solid #ddd",
          background: '#987e3c'
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#ddd",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src={user?.profileImg || profileImg}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <p
          className="text-white"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {user?.name || "Guest"}
        </p>
      </div>

      <ul className="sigma-main-menu">
        {navigationmenu.map((item, i) => (
          <li
            key={i}
            className={`menu-item ${item.child ? "menu-item-has-children" : ""}`}
            onClick={triggerChild}
          >
            {item.child ? (
              <Link onClick={(e) => e.preventDefault()} to="/" style={{ textDecoration: 'none' }}>
                {" "}
                {item.linkText}{" "}
              </Link>
            ) : (
              <a onClick={() => handleNavigation(item?.link)} style={{ textDecoration: 'none' }}> {item.linkText} </a>
            )}
            {item.child && (
              <ul className={submenuOpen ? "sub-menu d-block" : "sub-menu"}>
                {item.submenu.map((sub_item, j) => (
                  <li
                    key={j}
                    className={`menu-item ${
                      sub_item.child ? "menu-item-has-children" : ""
                    }`}
                  >
                    {sub_item.child ? (
                      <Link onClick={(e) => e.preventDefault()} to="/" style={{textDecoration: 'none'}}>
                        {" "}
                        {sub_item.linkText}{" "}
                      </Link>
                    ) : (
                      <Link to={sub_item.link} style={{textDecoration: 'none'}}> {sub_item.linkText} </Link>
                    )}
                    {sub_item.submenu && (
                      <ul className="sub-menu">
                        {sub_item.submenu.map((third_item, k) => (
                          <li className="menu-item" key={k}>
                            <Link to={third_item.link} style={{textDecoration: 'none'}}>
                              {third_item.linkText}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '50px' }}>
        <GetAppButton />
      </div>
    </div>
  );
};

export default Mobilemenu;
