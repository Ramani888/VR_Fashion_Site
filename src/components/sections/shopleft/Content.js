import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../../layouts/Pagination";
import Sidebar from "../../layouts/Shopsidebar";
import Preloader from '../../layouts/Preloader';

import img1 from "../../../assets/img/shop/01.jpg";
import img2 from "../../../assets/img/shop/02.jpg";
import img3 from "../../../assets/img/shop/03.jpg";
import useShopLeft from "./useShopLeft";

const shopgridpost = [
  { img: img1, title: "Ankle Bracelet", discount: 15, price: 390 },
  { img: img2, title: "Stud Earrings", discount: "", price: 290 },
  { img: img3, title: "Crumpled Ring", discount: 10, price: 450 },

  { img: img1, title: "Golden Pendant", discount: 15, price: 780 },
  { img: img2, title: "Silver Pendant.", discount: "", price: 290 },
  { img: img3, title: "Diamond Ring.", discount: 10, price: 890 },

  { img: img1, title: "Stud Earrings", discount: 15, price: 580 },
  { img: img2, title: "Ankle Bracelet", discount: 40, price: 290 },
  { img: img3, title: "Diamond Ring.", discount: 10, price: 800 },

  { img: img1, title: "Ankle Bracelet", discount: 15, price: 390 },
  { img: img2, title: "Stud Earrings", discount: "", price: 290 },
  { img: img3, title: "Crumpled Ring", discount: 10, price: 450 },
];

const Content = () => {
  const {
    productData,
    loading,
    handleNavigation,
    handleWishlist,
    handleCart
  } = useShopLeft();

  return (
    <section className="restaurant-tab-area pb-85 mt-100">
      {loading && <Preloader />}
      <div className="container-fluid">
        {/* <div className="section-title text-center mb-50">
          <div className="section-title-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path
                d="M369.853,250.251l-100-241C267.53,3.65,262.062,0,255.999,0s-11.531,3.65-13.854,9.251l-100,241    c-1.527,3.681-1.527,7.817,0,11.498l100,241c2.323,5.601,7.791,9.251,13.854,9.251s11.531-3.65,13.854-9.251l100-241    C371.381,258.068,371.381,253.932,369.853,250.251z M255.999,457.861L172.239,256l83.76-201.861L339.759,256L255.999,457.861z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-1"
                d="M139.606,118.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C145.465,133.748,145.465,124.25,139.606,118.393z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-2"
                d="M456.607,55.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394l63-63C462.465,70.748,462.465,61.25,456.607,55.393z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-3"
                d="M139.606,372.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    C58.322,459.535,62.16,461,65.999,461s7.678-1.465,10.607-4.394l63-63C145.465,387.748,145.465,378.25,139.606,372.393z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-4"
                d="M456.607,435.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C462.465,450.748,462.465,441.25,456.607,435.393z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <span className="title-tag"> Featured </span>
          <h2>Our Products</h2>
        </div> */}
        <div className="row">
          {productData?.map((item, i) => {
            const percentageDiscount = Math.round(100 - Number(Number(item?.price * 100) / Number(item?.mrp)));
            return (
              <div key={i} className="col-lg-3 col-6">
                <div className="food-box shop-box">
                  <div className="thumb">
                    <div className="product-img">
                      <img src={item?.image[0]?.path} alt="images" style={{height: '100%', width: '100%', objectFit: 'cover'}} />
                    </div>
                    {item?.discount && (
                      <div className="badges">
                        {item?.discount > 0 || item?.discount !== "" ? (
                          <span className="price">Sale</span>
                        ) : (
                          ""
                        )}
                        {item.discount > 0 || item.discount !== "" ? (
                          <span className="price discounted">
                            -{item?.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    <div className="button-group">
                      <Link onClick={() => handleWishlist(item)}>
                        <i className={item?.isWishlist ? 'fas fa-heart' : 'far fa-heart'} />
                      </Link>
                      <Link onClick={() => handleCart(item)}>
                        <i className={item?.isCart ? 'fas fa-shopping-cart' : "far fa-shopping-cart"} />
                      </Link>
                      <Link onClick={() => handleNavigation("/shop-detail", item)}>
                        <i className="far fa-eye" />
                      </Link>
                    </div>
                  </div>
                  <div className="desc">
                    <h4 className="product-name">
                      <Link onClick={() => handleNavigation("/shop-detail", item)}>{item?.name}</Link>
                    </h4>
                    <span className="price">
                    ₹{item?.price}
                        <span>
                        ₹{item?.mrp}
                        </span>
                    </span>
                    <span className="price">
                      {percentageDiscount}% off
                    </span>
                    <Link onClick={() => handleNavigation("/shop-detail", item)} className="link">
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
          {/* {pramotionProductData?.map((item, i) => (
          ))} */}
        </div>
        {/* <div className="pagination-wrap">
          <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
        </div> */}
      </div>
    </section>
  );
};

export default Content;
