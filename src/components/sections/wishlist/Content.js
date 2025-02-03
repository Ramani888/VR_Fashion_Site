import React from "react";
import { Link } from "react-router-dom";
import Preloader from '../../layouts/Preloader';

import img1 from "../../../assets/img/shop/cart-1.png";
import img2 from "../../../assets/img/shop/cart-2.png";
import img3 from "../../../assets/img/shop/cart-3.png";
import img4 from "../../../assets/img/shop/cart-4.png";
import img5 from "../../../assets/img/shop/cart-5.png";
import useWishlist from "./useWishlist";

const wishlistposts = [
    {
        img: img1,
        name: "Product1",
        price: "109",
        instock: "In Stock",
        total: "320",
    },
    {
        img: img2,
        name: "Product2",
        price: "109",
        outstock: "Out Of Stock",
        total: "320",
    },
    {
        img: img3,
        name: "Product3",
        price: "109",
        outstock: "Out Of Stock",
        total: "320",
    },
    {
        img: img4,
        name: "Product4",
        price: "109",
        instock: "In Stock",
        total: "320",
    },
    {
        img: img5,
        name: "Product5",
        price: "109",
        instock: "In Stock",
        total: "320",
    },
];

const Content = () => {
    const {
        wishListData,
        handleNavigation,
        loading,
        handleRemoveWishlist,
        handleCart
    } = useWishlist();
    return (
        <section className="restaurant-tab-area pb-85 mt-100">
            {loading && <Preloader />}
            <div className="container">
                <div className="row">
                    {wishListData?.map((item, i) => {
                        const percentageDiscount = Math.round(100 - Number(Number(item?.product?.price * 100) / Number(item?.product?.mrp)));
                        return (
                            <div key={i} className="col-lg-3 col-6">
                                <div className="food-box shop-box">
                                    <div className="thumb">
                                        <div className="product-img">
                                            <img src={item?.product?.image[0]?.path} alt="images" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                        {item?.product?.discount && (
                                            <div className="badges">
                                                {item?.product?.discount > 0 || item?.product?.discount !== "" ? (
                                                    <span className="price">Sale</span>
                                                ) : (
                                                    ""
                                                )}
                                                {item?.product?.discount > 0 || item?.product?.discount !== "" ? (
                                                    <span className="price discounted">
                                                        -{item?.product?.discount}%
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        )}
                                        <div className="button-group">
                                            <Link onClick={() => handleRemoveWishlist(item?.product?._id)}>
                                                <i className={item?.product?.isWishlist ? 'fas fa-heart' : 'far fa-heart'} />
                                            </Link>
                                            <Link onClick={() => handleCart(item?.product)}>
                                                <i className={item?.product?.isCart ? 'fas fa-shopping-cart' : "far fa-shopping-cart"} />
                                            </Link>
                                            <Link to='/shop-detail' state={{ product: item?.product }}>
                                                <i className="far fa-eye" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="desc" style={{ backgroundColor: '#f2f2f2' }}>
                                        <h4 className="product-name">
                                            <Link to='/shop-detail' state={{ product: item?.product }} style={{ textDecoration: 'none', color: 'black' }}>{item?.product?.name}</Link>
                                        </h4>
                                        <span className="price" style={{ color: 'black' }}>
                                            ₹{item?.product?.price}
                                            <span style={{ color: 'black' }}>
                                                ₹{item?.product?.mrp}
                                            </span>
                                        </span>
                                        <span className="price" style={{ color: 'black' }}>
                                            {percentageDiscount}% off
                                        </span>
                                        <Link to='/shop-detail' state={{ product: item?.product }} className="link">
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
            </div>
        </section>
    );
};

export default Content;
