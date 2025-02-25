// import React from "react";
// import { Link } from "react-router-dom";
// import Preloader from '../../layouts/Preloader';
// import useWishlist from "./useWishlist";

// const Content = () => {
//     const {
//         wishListData,
//         loading,
//         handleRemoveWishlist,
//         handleCart
//     } = useWishlist();
//     return (
//         <section className="restaurant-tab-area mt-60">
//             {loading && <Preloader />}
//             <div className="container">
//                 <div className="row">
//                     {wishListData?.map((item, i) => {
//                         const percentageDiscount = Math.round(100 - Number(Number(item?.product?.price * 100) / Number(item?.product?.mrp)));
//                         return (
//                             <div key={i} className="col-lg-3 col-6">
//                                 <div className="food-box shop-box">
//                                     <div className="thumb">
//                                         <div className="product-img">
//                                             <img src={item?.product?.image[0]?.path} alt="images" style={{ height: '100%', width: '100%', objectFit: 'fill' }} />
//                                         </div>
//                                         {item?.product?.discount && (
//                                             <div className="badges">
//                                                 {item?.product?.discount > 0 || item?.product?.discount !== "" ? (
//                                                     <span className="price">Sale</span>
//                                                 ) : (
//                                                     ""
//                                                 )}
//                                                 {item?.product?.discount > 0 || item?.product?.discount !== "" ? (
//                                                     <span className="price discounted">
//                                                         -{item?.product?.discount}%
//                                                     </span>
//                                                 ) : (
//                                                     ""
//                                                 )}
//                                             </div>
//                                         )}
//                                         <div className="button-group">
//                                             <Link onClick={() => handleRemoveWishlist(item?.product?._id)}>
//                                                 <i className={item?.product?.isWishlist ? 'fas fa-heart' : 'far fa-heart'} />
//                                             </Link>
//                                             <Link onClick={() => handleCart(item?.product)}>
//                                                 <i className={item?.product?.isCart ? 'fas fa-shopping-cart' : "far fa-shopping-cart"} />
//                                             </Link>
//                                             <Link to='/shop-detail' state={{ product: item?.product }}>
//                                                 <i className="far fa-eye" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <div className="desc" style={{ backgroundColor: '#f2f2f2' }}>
//                                         <h4 className="product-name">
//                                             <Link to='/shop-detail' state={{ product: item?.product }} style={{ textDecoration: 'none', color: 'black' }}>{item?.product?.name}</Link>
//                                         </h4>
//                                         <span className="price" style={{ color: 'black' }}>
//                                             ₹{item?.product?.price}
//                                             <span style={{ color: 'black' }}>
//                                                 ₹{item?.product?.mrp}
//                                             </span>
//                                         </span>
//                                         <span className="price" style={{ color: 'black' }}>
//                                             {percentageDiscount}% off
//                                         </span>
//                                         <Link to='/shop-detail' state={{ product: item?.product }} className="link">
//                                             <i className="fal fa-arrow-right" style={{color:'black'}}/>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Content;

import React from "react";
import { Link } from "react-router-dom";
import Preloader from "../../layouts/Preloader";
import useWishlist from "./useWishlist";

const Content = () => {
  const { wishListData, loading, handleRemoveWishlist, handleCart } =
    useWishlist();

  return (
    <section className="restaurant-tab-area mt-60">
      {loading && <Preloader />}
      <div className="container">
        <div className="row">
          {wishListData?.map((item, i) => {
            const product = item?.product;
            if (!product) return null;

            const percentageDiscount = product?.mrp
              ? Math.round(100 - (product.price * 100) / product.mrp)
              : 0;

            return (
              <div key={i} className="col-lg-3 col-6">
                <div className="food-box shop-box">
                  <div className="thumb">
                    <div className="product-img">
                      <img
                        src={product?.image?.[0]?.path || "/placeholder.jpg"}
                        alt="product"
                        className="img-fluid"
                      />
                    </div>

                    {product.discount > 0 && (
                      <div className="badges">
                        <span className="price">Sale</span>
                        <span className="price discounted">
                          -{product.discount}%
                        </span>
                      </div>
                    )}

                    <div className="button-group">
                      <Link onClick={() => handleRemoveWishlist(product._id)}>
                        <i
                          className={
                            product.isWishlist ? "fas fa-heart" : "far fa-heart"
                          }
                        />
                      </Link>
                      <Link onClick={() => handleCart(product)}>
                        <i
                          className={
                            product.isCart
                              ? "fas fa-shopping-cart"
                              : "far fa-shopping-cart"
                          }
                        />
                      </Link>
                      <Link to="/shop-detail" state={{ product }}>
                        <i className="far fa-eye" />
                      </Link>
                    </div>
                  </div>

                  <div className="desc bg-light p-3">
                    <h4 className="product-name">
                      <Link
                        to="/shop-detail"
                        state={{ product }}
                        className="text-dark text-decoration-none"
                      >
                        {product.name}
                      </Link>
                    </h4>

                    <span className="price text-dark">
                      ₹{product.price}{" "}
                      <del className="text-muted">₹{product.mrp}</del>
                    </span>

                    <span className="price text-danger">
                      {percentageDiscount}% off
                    </span>

                    <Link
                      to="/shop-detail"
                      state={{ product }}
                      className="link"
                    >
                      <i className="fal fa-arrow-right text-dark" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
