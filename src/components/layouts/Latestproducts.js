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
};

export default Latestproducts;
