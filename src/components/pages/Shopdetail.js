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
  const {product} = location.state;

  console.log('product', product)

  return (
    <Fragment>
      <MetaTags>
        <title>VR-Fashion | {product?.name}</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      {/* <Breadcrumb breadcrumb={{ pagename: product?.name }} /> */}
      <Content product={product}/>
      {/* <Instafeeds /> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Shopdetail;
