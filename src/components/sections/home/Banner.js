import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { apiGet } from "../../Api/ApiService";
import Api from "../../Api/EndPoint";
import Preloader from "../../layouts/Preloader";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      setLoading(true);
      const banner = await apiGet(Api.get_banner, "");
      setBannerData(banner?.data || []);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    } finally {
      setLoading(false);
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
    <section className="banner-style-one position-relative mb-50 mt-80" >
      {loading && <Preloader />}
      <div className="slider-container" style={{ backgroundColor: "white" }}>
        <Slider {...settings}>
          {bannerData?.map((item) => {
            return (
              <img
                src={item?.imagePath}
                alt="images"
                style={{
                  objectFit: "contain",
                  height: "100%"
                }}
              />
            )
          })}
        </Slider>
      </div>
    </section>
  )
};

export default Banner;
