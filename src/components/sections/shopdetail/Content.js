import React, { Fragment } from "react";
import Shopinfo from "./Shopinfo";
import Shoprelated from "../../layouts/Shoprelated";
import useShopDetail from "./useShopDetail";
import Preloader from '../../layouts/Preloader';

const Content = ({ product }) => {
  const {
    loading
  } = useShopDetail();
  return (
    <Fragment>
      {loading && <Preloader />}
      {product && (
        <>
          <Shopinfo product={product} />
          <Shoprelated product={product} />
        </>
      )}
    </Fragment>
  );
};

export default Content;
