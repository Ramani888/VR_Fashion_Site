import React, { useRef } from "react";
import Slider from "react-slick";
import useHome from "../sections/home/useHome";
import Preloader from './Preloader';

const Latestproducts = () => {
  const {
    adsPosterData,
    loading
  } = useHome();
  
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
    <section className="restaurant-tab-area mb-50" style={{ backgroundColor: "white" }}>
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
