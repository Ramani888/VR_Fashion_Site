import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/img/shop/01.jpg";
import img2 from "../../assets/img/shop/02.jpg";
import img3 from "../../assets/img/shop/03.jpg";
import img4 from "../../assets/img/shop/04.jpg";
import useHome from "../sections/home/useHome";
import Pagination from "./Pagination";
import Preloader from '../layouts/Preloader';

const featureposts = [
    { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
    { img: img2, discount: "", title: "Stud Earrings", price: 290 },
    { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
    { img: img4, discount: 25, title: "Moon Necklace", price: 500 },
];

const Ourproducts = () => {
    const {
        pramotionProductData,
        handlePageChange,
        currentPage,
        totalPages,
        currentPramotionProductData,
        handleNavigation,
        loading,
        handleWishlist,
        handleCart
    } = useHome();
    return (
        <section className="restaurant-tab-area pb-10 mt-20" style={{ backgroundColor: "white" }}>
            {loading && <Preloader />}
            <div className="container-fluid">
                <div className="row">
                    {pramotionProductData?.map((item, i) => {
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
                                            <Link to='shop-detail' state={{ product: item }}>
                                                <i className="far fa-eye" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="desc" style={{backgroundColor: '#f2f2f2'}}>
                                        <h4 className="product-name">
                                            <Link to='/shop-detail' state={{ product: item }} style={{ textDecoration: 'none',color:'black' }}>{item?.name}</Link>
                                        </h4>
                                        <span className="price" style={{color:'black' }}>
                                            ₹{item?.price}
                                            <span>
                                                ₹{item?.mrp}
                                            </span>
                                        </span>
                                        <span className="price" style={{color:'black' }}>
                                            {percentageDiscount}% off
                                        </span>
                                        <Link to='/shop-detail' state={{ product: item }} className="link">
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

export default Ourproducts;
