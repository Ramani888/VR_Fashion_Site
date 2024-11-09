import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumbs";
import Instafeeds from "../layouts/Instafeeds";
import Footer from "../layouts/Footerthree";
import Content from "../sections/shopdetail/Content";
import { useLocation } from "react-router-dom";

const Shopdetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <Fragment>
      <MetaTags>
        <title>VR-Fashion | Shop Detail</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Shop Detail" }} />
      <Content product={product}/>
      <Instafeeds />
      <Footer />
    </Fragment>
  );
};

export default Shopdetail;
