import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigationmenu = [
  {
    id: 1,
    linkText: "Home",
    child: true,
    submenu: [
      {
        id: 11,
        link: "/",
        linkText: "Home 1",
      },
      {
        id: 12,
        link: "/home-two",
        linkText: "Home 2",
      },
      {
        id: 13,
        link: "/home-three",
        linkText: "Home 3",
      },
      {
        id: 14,
        link: "/home-four",
        linkText: "Home 4",
      },
    ],
  },
  {
    id: 2,
    linkText: "Shop",
    child: true,
    submenu: [
      {
        id: 21,
        link: "/shop-left",
        linkText: "Shop Left Sidebar",
      },
      {
        id: 22,
        link: "/shop-left-two",
        linkText: "Shop Left Sidebar v2",
      },
      {
        id: 23,
        link: "/shop-right",
        linkText: "Shop Right Sidebar",
      },
      {
        id: 24,
        link: "/shop-right-two",
        linkText: "Shop Right Sidebar v2",
      },
      {
        id: 25,
        link: "/shop-detail",
        linkText: "Product Details",
      },
      {
        id: 26,
        link: "/account",
        linkText: "My Account",
      },
      {
        id: 27,
        link: "/checkout",
        linkText: "Checkout",
      },
      {
        id: 28,
        link: "/wishlist",
        linkText: "Wishlist",
      },
      {
        id: 29,
        link: "/cart",
        linkText: "Cart",
      },
      {
        id: 210,
        link: "/login",
        linkText: "Login",
      },
    ],
  },
  {
    id: 3,
    linkText: "Blog",
    child: true,
    submenu: [
      {
        id: 31,
        link: "/blog-grid-sidebar",
        linkText: "Blog Grid Sidebar",
      },
      {
        id: 32,
        link: "/blog-detail",
        linkText: "Blog Details",
      },
      {
        id: 33,
        link: "/blog-grid",
        linkText: "Blog Grid",
      },
      {
        id: 34,
        link: "/blog-list",
        linkText: "Blog List",
      },
    ],
  },
  {
    id: 4,
    linkText: "Pages",
    child: true,
    submenu: [
      {
        id: 41,
        link: "/classification",
        linkText: "Classification",
      },
      {
        id: 42,
        link: "/account",
        linkText: "Account",
      },
      {
        id: 43,
        link: "/gallery",
        linkText: "Gallery",
      },
      {
        id: 44,
        link: "/team",
        linkText: "Team",
      },
      {
        id: 45,
        link: "/error",
        linkText: "Error 404",
      },
      {
        id: 46,
        link: "/coming-soon",
        linkText: "Coming Soon",
      },
      {
        id: 47,
        link: "/typography",
        linkText: "Typography",
      },
    ],
  },
  {
    id: 5,
    linkText: "About",
    link: "/about",
  },
  {
    id: 6,
    linkText: "Contact",
    link: "/contact",
  },
  {
    id: 7,
    linkText: "Diamond",
    link: "/shop-left",
  },
  {
    id: 8,
    linkText: "Accessories",
    link: "/shop-left",
  },
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

  return (
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
  );
};

export default Mobilemenu;
