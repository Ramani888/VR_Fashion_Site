import React from "react";
import { Link } from "react-router-dom";

import breadcrumbimg from "../../assets/img/bg/04.jpg";

const Breadcrumbs = (props) => {
  return (
    <section
      className="breadcrumb-area bg-red"
      style={{ backgroundImage: `https://www.colorbook.io/imagecreator.php?hex=f2f2f2&width=1920&height=1080&text=%201920x1080`,backgroundColor:'#f2f2f2' }}
    >
      <div className="container">
        <div className="breadcrumb-text">
          <span>DESIGNER JEWELRY</span>
          <h2 className="page-title">{props.breadcrumb.pagename}</h2>
          <ul className="breadcrumb-nav">
            <li>
              <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li className="active">{props.breadcrumb.pagename}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
