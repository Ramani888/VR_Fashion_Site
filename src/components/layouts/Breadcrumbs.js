import React from "react";
import { Link } from "react-router-dom";

import breadcrumbimg from "../../assets/img/bg/04.jpg";

const Breadcrumbs = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `https://firebasestorage.googleapis.com/v0/b/vr-fashion-8ec02.appspot.com/o/images%2Ftt5.jpg-1724996019139?alt=media&token=fe531696-bffa-431e-bd9c-a18c4bbbbe73` }}
    >
      <div className="container">
        <div className="breadcrumb-text">
          <span>DESIGNER JEWELRY</span>
          <h2 className="page-title">{props.breadcrumb.pagename}</h2>
          <ul className="breadcrumb-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">{props.breadcrumb.pagename}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
