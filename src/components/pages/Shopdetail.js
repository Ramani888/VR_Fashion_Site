import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Content from "../sections/shopdetail/Content";
import { useLocation } from "react-router-dom";
import Footer from "../sections/footer/Footer";

const Shopdetail = () => {
  const location = useLocation();
  const { product } = location?.state;

  return (
    <Fragment>
      <MetaTags>
        <title>VR-Fashion | {product?.name}</title>
        <meta name="description" content="#" />
      </MetaTags>
      <div style={{backgroundColor:'white'}}>
        <Header />
        <Content product={product}/>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Shopdetail;
