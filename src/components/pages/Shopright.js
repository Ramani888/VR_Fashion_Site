import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumbs";
import Instafeeds from "../layouts/Instafeeds";
import Footer from "../layouts/Footerthree";
import Content from "../sections/shopright/Content";
import { useLocation } from 'react-router-dom';

const Shopright = () => {
  const location = useLocation();
  const category = location.state?.category;

  return (
    <Fragment>
      <MetaTags>
        <title>VR-Fashion | Shop Right</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Shop" }} />
      <Content category={category}/>
      <Instafeeds />
      <Footer />
    </Fragment>
  );
};

export default Shopright;
