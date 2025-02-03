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
                <div className="row">
                    {productData?.map((item, i) => {
                        const percentageDiscount = Math.round(100 - Number(Number(item?.price * 100) / Number(item?.mrp)));
                        return (
                            <div key={i} className="col-lg-3 col-6">
                                <div className="food-box shop-box">
                                    <div className="thumb">
                                        <div className="product-img">
                                            <img src={item?.image[0]?.path} alt="images" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
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
                                            <a onClick={() => handleWishlist(item)} style={{ cursor: 'pointer' }}>
                                                <i className={item?.isWishlist ? 'fas fa-heart' : 'far fa-heart'} />
                                            </a>
                                            <a onClick={() => handleCart(item)} style={{ cursor: 'pointer' }}>
                                                <i className={item?.isCart ? 'fas fa-shopping-cart' : "far fa-shopping-cart"} />
                                            </a>
                                            <Link to='/shop-detail' state={{ product: item }}>
                                                <i className="far fa-eye" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="desc" style={{ backgroundColor: '#f2f2f2' }}>
                                        <h4 className="product-name">
                                            <Link to='/shop-detail' state={{ product: item }} style={{ textDecoration: 'none', color: 'black' }}>{item?.name}</Link>
                                        </h4>
                                        <span className="price" style={{ color: 'black' }}>
                                            ₹{item?.price}
                                            <span style={{ color: 'black' }}>
                                                ₹{item?.mrp}
                                            </span>
                                        </span>
                                        <span className="price" style={{ color: 'black' }}>
                                            {percentageDiscount}% off
                                        </span>
                                        <Link to="/shop-detail" state={{ product: item }} className="link">
                                            <i className="fal fa-arrow-right" style={{color:'black'}}/>
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
