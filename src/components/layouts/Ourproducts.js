// import React from "react";
// import { Link } from "react-router-dom";
// import useHome from "../sections/home/useHome";
// import Preloader from "../layouts/Preloader";

// const Ourproducts = () => {
//   const { pramotionProductData, loading, handleWishlist, handleCart } =
//     useHome();
//   return (
//     <section
//       className="restaurant-tab-area pb-10 mt-20"
//       style={{ backgroundColor: "white" }}
//     >
//       {loading && <Preloader />}
//       <div className="container-fluid">
//         <div className="row">
//           {pramotionProductData?.map((item, i) => {
//             const percentageDiscount = Math.round(
//               100 - Number(Number(item?.price * 100) / Number(item?.mrp))
//             );
//             return (
//               <div key={i} className="col-lg-3 col-6">
//                 <div className="food-box shop-box">
//                   <div className="thumb">
//                     <div className="product-img">
//                       <img
//                         src={item?.image[0]?.path}
//                         alt="images"
//                         style={{
//                           height: "100%",
//                           width: "100%",
//                           objectFit: "fill",
//                         }}
//                       />
//                     </div>
//                     {item?.discount && (
//                       <div className="badges">
//                         {item?.discount > 0 || item?.discount !== "" ? (
//                           <span className="price">Sale</span>
//                         ) : (
//                           ""
//                         )}
//                         {item.discount > 0 || item.discount !== "" ? (
//                           <span className="price discounted">
//                             -{item?.discount}%
//                           </span>
//                         ) : (
//                           ""
//                         )}
//                       </div>
//                     )}
//                     <div className="button-group">
//                       <a
//                         onClick={() => handleWishlist(item)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         <i
//                           className={
//                             item?.isWishlist ? "fas fa-heart" : "far fa-heart"
//                           }
//                         />
//                       </a>
//                       <a
//                         onClick={() => handleCart(item)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         <i
//                           className={
//                             item?.isCart
//                               ? "fas fa-shopping-cart"
//                               : "far fa-shopping-cart"
//                           }
//                         />
//                       </a>
//                       <Link to="shop-detail" state={{ product: item }}>
//                         <i className="far fa-eye" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="desc" style={{ backgroundColor: "#f2f2f2" }}>
//                     <h4 className="product-name">
//                       <Link
//                         to="/shop-detail"
//                         state={{ product: item }}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         {item?.name}
//                       </Link>
//                     </h4>
//                     <span className="price" style={{ color: "black" }}>
//                       ₹{item?.price}
//                       <span>₹{item?.mrp}</span>
//                     </span>
//                     <span className="price" style={{ color: "black" }}>
//                       {percentageDiscount}% off
//                     </span>
//                     <Link
//                       to="/shop-detail"
//                       state={{ product: item }}
//                       className="link"
//                     >
//                       <i
//                         className="fal fa-arrow-right"
//                         style={{ color: "black" }}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Ourproducts;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import useHome from "../sections/home/useHome";
import Preloader from "../layouts/Preloader";

const Ourproducts = () => {
  const { pramotionProductData, loading, handleWishlist, handleCart } =
    useHome();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const ITEMS_PER_LOAD = 5; // Number of items to load per scroll
  const [count, setCount] = useState(ITEMS_PER_LOAD);
  const observer = useRef(null);
  const lastItemRef = useRef(null);

  useEffect(() => {
    setVisibleProducts(pramotionProductData?.slice(0, count) || []);
  }, [pramotionProductData, count]);

  // Load more items
  const loadMore = () => {
    setCount((prev) => prev + ITEMS_PER_LOAD);
  };

  // Intersection Observer to detect when the last item is visible
  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <section
      className="restaurant-tab-area pb-10 mt-20"
      style={{ backgroundColor: "white" }}
    >
      {loading && <Preloader />}
      <div className="container-fluid">
        <div className="row">
          {visibleProducts.map((item, i) => {
            const percentageDiscount = Math.round(
              100 - (item?.price * 100) / item?.mrp
            );
            return (
              <div
                key={i}
                className="col-lg-3 col-6"
                ref={i === visibleProducts.length - 1 ? lastProductRef : null} // Set ref on last item
              >
                <div className="food-box shop-box">
                  <div className="thumb">
                    <div className="product-img">
                      <img
                        src={item?.image[0]?.path}
                        alt="images"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "fill",
                        }}
                      />
                    </div>
                    {item?.discount && (
                      <div className="badges">
                        {item?.discount > 0 ? (
                          <span className="price">Sale</span>
                        ) : (
                          ""
                        )}
                        {item?.discount > 0 ? (
                          <span className="price discounted">
                            -{item?.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    <div className="button-group">
                      <a
                        onClick={() => handleWishlist(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={
                            item?.isWishlist ? "fas fa-heart" : "far fa-heart"
                          }
                        />
                      </a>
                      <a
                        onClick={() => handleCart(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={
                            item?.isCart
                              ? "fas fa-shopping-cart"
                              : "far fa-shopping-cart"
                          }
                        />
                      </a>
                      <Link to="shop-detail" state={{ product: item }}>
                        <i className="far fa-eye" />
                      </Link>
                    </div>
                  </div>
                  <div className="desc" style={{ backgroundColor: "#f2f2f2" }}>
                    <h4 className="product-name">
                      <Link
                        to="/shop-detail"
                        state={{ product: item }}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {item?.name}
                      </Link>
                    </h4>
                    <span className="price" style={{ color: "black" }}>
                      ₹{item?.price} <span>₹{item?.mrp}</span>
                    </span>
                    <span className="price" style={{ color: "black" }}>
                      {percentageDiscount}% off
                    </span>
                    <Link
                      to="/shop-detail"
                      state={{ product: item }}
                      className="link"
                    >
                      <i
                        className="fal fa-arrow-right"
                        style={{ color: "black" }}
                      />
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

export default Ourproducts;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import useHome from "../sections/home/useHome";
// import Preloader from "../layouts/Preloader";

// const Ourproducts = () => {
//   const { pramotionProductData, loading, handleWishlist, handleCart } =
//     useHome();
//   const [visibleProducts, setVisibleProducts] = useState([]);

//   const ITEMS_PER_LOAD = 4; // Number of items per load
//   const [count, setCount] = useState(ITEMS_PER_LOAD);

//   useEffect(() => {
//     setVisibleProducts(pramotionProductData?.slice(0, count) || []);
//   }, [pramotionProductData, count]);

//   const loadMore = () => {
//     setCount((prev) => prev + ITEMS_PER_LOAD);
//   };

//   return (
//     <section
//       className="restaurant-tab-area pb-10 mt-20"
//       style={{ backgroundColor: "white" }}
//     >
//       {loading && <Preloader />}
//       <div className="container-fluid">
//         <div className="row">
//           {visibleProducts.map((item, i) => {
//             const percentageDiscount = Math.round(
//               100 - (item?.price * 100) / item?.mrp
//             );
//             return (
//               <div key={i} className="col-lg-3 col-6">
//                 <div className="food-box shop-box">
//                   <div className="thumb">
//                     <div className="product-img">
//                       <img
//                         src={item?.image[0]?.path}
//                         alt="images"
//                         style={{
//                           height: "100%",
//                           width: "100%",
//                           objectFit: "fill",
//                         }}
//                       />
//                     </div>
//                     {item?.discount && (
//                       <div className="badges">
//                         {item?.discount > 0 ? (
//                           <span className="price">Sale</span>
//                         ) : (
//                           ""
//                         )}
//                         {item?.discount > 0 ? (
//                           <span className="price discounted">
//                             -{item?.discount}%
//                           </span>
//                         ) : (
//                           ""
//                         )}
//                       </div>
//                     )}
//                     <div className="button-group">
//                       <a
//                         onClick={() => handleWishlist(item)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         <i
//                           className={
//                             item?.isWishlist ? "fas fa-heart" : "far fa-heart"
//                           }
//                         />
//                       </a>
//                       <a
//                         onClick={() => handleCart(item)}
//                         style={{ cursor: "pointer" }}
//                       >
//                         <i
//                           className={
//                             item?.isCart
//                               ? "fas fa-shopping-cart"
//                               : "far fa-shopping-cart"
//                           }
//                         />
//                       </a>
//                       <Link to="shop-detail" state={{ product: item }}>
//                         <i className="far fa-eye" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="desc" style={{ backgroundColor: "#f2f2f2" }}>
//                     <h4 className="product-name">
//                       <Link
//                         to="/shop-detail"
//                         state={{ product: item }}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         {item?.name}
//                       </Link>
//                     </h4>
//                     <span className="price" style={{ color: "black" }}>
//                       ₹{item?.price} <span>₹{item?.mrp}</span>
//                     </span>
//                     <span className="price" style={{ color: "black" }}>
//                       {percentageDiscount}% off
//                     </span>
//                     <Link
//                       to="/shop-detail"
//                       state={{ product: item }}
//                       className="link"
//                     >
//                       <i
//                         className="fal fa-arrow-right"
//                         style={{ color: "black" }}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {visibleProducts.length < pramotionProductData?.length && (
//           <div className="text-center mt-3">
//             <button onClick={loadMore} className="btn btn-primary">
//               Load More
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Ourproducts;
