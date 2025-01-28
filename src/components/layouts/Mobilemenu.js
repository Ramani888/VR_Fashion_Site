import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../../helper/UserHelper";
import profileImg from '../../assets/img/profile_img.png'

const navigationmenu = [
  {
    id: 5,
    linkText: "Home",
    link: "/",
  },
  {
    id: 6,
    linkText: "Shop",
    link: "/shop-left",
  },
  {
    id: 6,
    linkText: "Wishlist",
    link: "/wishlist",
  },
  {
    id: 7,
    linkText: "Cart",
    link: "/cart",
  },
  {
    id: 7,
    linkText: "Contact",
    link: "/contact",
  },
  // {
  //   id: 8,
  //   linkText: "Accessories",
  //   link: "/shop-left",
  // },
];

const Mobilemenu = () => {
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

  return (
    <div className="mobilemenu-container">
      {/* User Info Section */}
      <div
        className="bg-black"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "20px",
          borderBottom: "1px solid #ddd",
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
              <Link onClick={(e) => e.preventDefault()} to="/">
                {" "}
                {item.linkText}{" "}
              </Link>
            ) : (
              <Link to={item.link}> {item.linkText} </Link>
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
                      <Link onClick={(e) => e.preventDefault()} to="/">
                        {" "}
                        {sub_item.linkText}{" "}
                      </Link>
                    ) : (
                      <Link to={sub_item.link}> {sub_item.linkText} </Link>
                    )}
                    {sub_item.submenu && (
                      <ul className="sub-menu">
                        {sub_item.submenu.map((third_item, k) => (
                          <li className="menu-item" key={k}>
                            <Link to={third_item.link}>
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
    </div>
  );
};

export default Mobilemenu;
