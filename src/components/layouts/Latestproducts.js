import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import img1 from "../../assets/img/shop/01.jpg";
import img2 from "../../assets/img/shop/02.jpg";
import img3 from "../../assets/img/shop/03.jpg";
import img4 from "../../assets/img/shop/04.jpg";
import useHome from "../sections/home/useHome";
import Preloader from './Preloader';

const shoplatestposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img4, discount: 25, title: "Moon Necklace", price: 500 },
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img4, discount: 25, title: "Moon Necklace", price: 500 },
];

const Latestproducts = () => {
  const {
    adsPosterData,
    loading
  } = useHome();
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // const settings = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   fade: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="restaurant-tab-area mb-50">
      {loading && <Preloader />}
      <div className="slider-container">
          <Slider {...settings}>
            {adsPosterData?.map((item, index) => {
              return (
                <img
                  key={index} // Always add a unique key for list items
                  src={item?.imagePath}
                  alt="images"
                  style={{
                    objectFit: "cover",
                    height: '100%'
                  }}
                  />
              );
            })}
          </Slider>
      </div>
    </section>
  )

  // return (
  //   <section className="restaurant-tab-area bg-black pt-115 pb-85">
  //     <div className="container">
  //       <div className="row align-items-center">
  //         <div className="col-lg-6 col-md-8 col-sm-7">
  //           <div className="section-title">
  //             <span className="title-tag">Shop</span>
  //             <h2>Latest Products</h2>
  //           </div>
  //         </div>
  //         <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
  //           <div className="shop-post-arrow arrow-style text-right">
  //             <div className="slick-arrow prev-arrow" onClick={previous}>
  //               <i className="fal fa-arrow-left" />
  //             </div>
  //             <div className="slick-arrow next-arrow" onClick={next}>
  //               <i className="fal fa-arrow-right" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <Slider
  //         className="row shop-post-slider mt-80"
  //         ref={sliderRef}
  //         {...settings}
  //       >
  //         {shoplatestposts.map((item, i) => (
  //           <div key={i} className="col-12">
  //             <div className="food-box shop-box">
  //               <div className="thumb">
  //                 <img src={item.img} alt="images" />
  //                 <div className="badges">
  //                   {item.discount > 0 || item.discount !== "" ? (
  //                     <span className="price">Sale</span>
  //                   ) : (
  //                     ""
  //                   )}
  //                   {item.discount > 0 || item.discount !== "" ? (
  //                     <span className="price discounted">
  //                       -{item.discount}%
  //                     </span>
  //                   ) : (
  //                     ""
  //                   )}
  //                 </div>
  //                 <div className="button-group">
  //                   <Link to="#">
  //                     <i className="far fa-heart" />
  //                   </Link>
  //                   <Link to="#">
  //                     <i className="far fa-sync-alt" />
  //                   </Link>
  //                   <Link to="#">
  //                     <i className="far fa-eye" />
  //                   </Link>
  //                 </div>
  //               </div>
  //               <div className="desc">
  //                 <h4>
  //                   <Link to="/shop-detail">{item.title}</Link>
  //                 </h4>
  //                 <span className="price">
  //                   ${item.price}{" "}
  //                   {item.discount > 0 || item.discount !== "" ? (
  //                     <span>
  //                       ${Math.ceil(item.price * (item.discount / 100))}
  //                     </span>
  //                   ) : (
  //                     ""
  //                   )}
  //                 </span>
  //                 <Link to="/shop-detail" className="link">
  //                   <i className="fal fa-arrow-right" />
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </Slider>
  //     </div>
  //   </section>
  // );
};

export default Latestproducts;
