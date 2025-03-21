import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/classification/Content";
import { useLocation } from "react-router-dom";
import Footer from "../sections/footer/Footer";

const Classification = () => {
  const location = useLocation();
  const { category } = location.state || {};
  return (
    <Fragment>
      <MetaTags>
        <title>VR Fashion | {category?.name}</title>
        <meta name="description" content="#" />
      </MetaTags>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: category?.name }} />
        <Content category={category} />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Classification;
