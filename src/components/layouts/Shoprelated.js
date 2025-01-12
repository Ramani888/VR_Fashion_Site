import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import img1 from "../../assets/img/shop/01.jpg";
import img2 from "../../assets/img/shop/02.jpg";
import img3 from "../../assets/img/shop/03.jpg";
import img4 from "../../assets/img/shop/04.jpg";
import useShopDetail from "../sections/shopdetail/useShopDetail";

const relatedshopposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img4, discount: 25, title: "Moon Necklace", price: 500 },
];

const Shoprelated = ({ product }) => {
  const {
    categoryProductData,
    handleNavigation,
    handleCartRelated
  } = useShopDetail(product)
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="restaurant-tab-area bg-black pt-40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-sm-7">
            <div className="section-title">
              <span className="title-tag">Shop</span>
              <h2>Related Products</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-5 d-none d-sm-block">
            <div className="shop-post-arrow arrow-style text-right">
              <div className="slick-arrow prev-arrow" onClick={previous}>
                <i className="fal fa-arrow-left" />
              </div>
              <div className="slick-arrow next-arrow" onClick={next}>
                <i className="fal fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <Slider
          className="row related-product-slider mt-40"
          ref={sliderRef}
          {...settings}
        >
          {categoryProductData?.map((item, i) => {
            const percentageDiscount = Math.round(100 - Number(Number(item?.price * 100) / Number(item?.mrp)));
            return (
              <div key={i} className="col-12">
                <div className="food-box shop-box">
                  <div className="thumb">
                    <div style={{height: '400px', width: '100%'}}>
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
                      <Link>
                        <i className={item?.isWishlist ? 'fas fa-heart' : 'far fa-heart'} />
                      </Link>
                      {/* <Link to="#">
                        <i className="far fa-sync-alt" />
                      </Link> */}
                      <Link onClick={() => handleCartRelated(item)}>
                        <i className={item?.isCart ? 'fas fa-shopping-cart' : "far fa-shopping-cart"} />
                      </Link>
                      <Link onClick={() => handleNavigation('/shop-detail', item)}>
                        <i className="far fa-eye" />
                      </Link>
                    </div>
                  </div>
                  <div className="desc">
                    <h4>
                      <Link onClick={() => handleNavigation('/shop-detail', item)}>{item?.name}</Link>
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
                    <Link onClick={() => handleNavigation('/shop-detail', item)} className="link">
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Shoprelated;
