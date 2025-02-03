import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useShopDetail from "../sections/shopdetail/useShopDetail";

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
    <section className="restaurant-tab-area  pt-40" >
      <div className="container" >
        <div className="row align-items-center">
          <div className="col-md-8 col-sm-7">
            <div className="section-title">
              <span className="title-tag">Shop</span>
              <h2 style={{color: 'black'}}>Related Products</h2>
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
              <div key={i} className="col-12 mh-100">
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
                      <Link to='/shop-detail' state={{ product: item }}>
                        <i className="far fa-eye" />
                      </Link>
                    </div>
                  </div>
                  <div className="desc" style={{backgroundColor:'#f2f2f2'}}>
                    <h4>
                      <Link to='/shop-detail' state={{ product: item }} style={{ textDecoration: 'none',color:'black' }}>{item?.name}</Link>
                    </h4>
                    <span className="price" style={{color:'black'}}>
                    ₹{item?.price}
                          <span  style={{color:'grey'}}>
                          ₹{item?.mrp}
                          </span>
                    </span>
                    <span className="price"  style={{color:'black'}}>
                      {percentageDiscount}% off
                    </span>
                    <Link to='/shop-detail' state={{ product: item }} className="link">
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
