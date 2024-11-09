import React, { Fragment } from "react";
import Shopinfo from "./Shopinfo";
import Shoprelated from "../../layouts/Shoprelated";

const Content = ({ product }) => {
  // You can use useState here if you need local state

  return (
    <Fragment>
      <Shopinfo product={product} />
      {/* <Shoprelated /> */}
    </Fragment>
  );
};

export default Content;
