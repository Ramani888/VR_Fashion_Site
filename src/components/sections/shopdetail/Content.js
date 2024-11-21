import React, { Fragment } from "react";
import Shopinfo from "./Shopinfo";
import Shoprelated from "../../layouts/Shoprelated";

const Content = ({ product }) => {
  console.log('product', product);
  // You can use useState here if you need local state

  return (
    <Fragment>
      <Shopinfo product={product} />
      <Shoprelated product={product} />
    </Fragment>
  );
};

export default Content;
