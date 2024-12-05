import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ReactWOW from "react-wow";
import Cursor from "../../layouts/Cursor";

import img1 from "../../../assets/img/banner/01.jpg";
import img2 from "../../../assets/img/banner/02.jpg";
import { apiGet } from "../../Api/ApiService";
import Api from "../../Api/EndPoint";
import Preloader from "../../layouts/Preloader";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBanner();
  }, []);
  // ==================================== Api ================================== //

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

  // ==================================== Api ================================== //

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
  };

  return (
    <section className="banner-area banner-style-one position-relative">
      {loading && <Preloader />}
      <Cursor />
      <ReactWOW animation="fadeIn" data-delay=".3s">
        <div className="d-none d-md-block vertical-text">
          <ul>
            <li>
              <Link to="#">
                {" "}
                <i className="fab fa-facebook" /> Facebook{" "}
              </Link>
            </li>
            <li>
              <Link to="#">
                {" "}
                <i className="fab fa-instagram" /> Instagram{" "}
              </Link>
            </li>
            {/* <li>
              <Link to="#">
                {" "}
                <i className="fab fa-twitter" /> Twitter{" "}
              </Link>
            </li> */}
          </ul>
        </div>
      </ReactWOW>
      <ReactWOW animation="fadeIn" data-delay=".3s">
        <div className="d-none d-md-block vertical-text right">
          <span>Call us on: </span>
          <span>8141851456</span>
        </div>
      </ReactWOW>
      <div
        className="container container-custom-two"
        style={{ marginTop: "-100px" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="banner-content">
              <ReactWOW animation="fadeInDown" data-delay=".3s">
                <span className="promo-tag">Jewelry Design With Love</span>
              </ReactWOW>
              <ReactWOW animation="fadeInLeft" data-delay=".5s">
                <h1 className="title">
                  High-End <br />
                  Jewelry Items
                </h1>
              </ReactWOW>
              <ul>
                <li>
                  <ReactWOW animation="fadeInUp" data-delay=".7s">
                    <Link className="main-btn btn-filled">
                      Buy Now{" "}
                    </Link>
                  </ReactWOW>
                </li>
                <li>
                  <ReactWOW animation="fadeInUp" data-delay=".9s">
                    <Link className="main-btn btn-border">
                      Explore Now
                    </Link>
                  </ReactWOW>
                </li>
              </ul>
            </div>
          </div>
          <ReactWOW animation="fadeInRight" data-delay="0.5s">
            <div className="col-lg-6 col-md-6">
              <div className="banner-thumb d-none d-md-block">
                <Slider className="carousel hero-slider-one" {...settings}>
                  {bannerData.map((item, i) => (
                    <div key={i} className="single-thumb">
                      <img
                        src={item.imagePath}
                        alt="images"
                        style={{
                          height: "710px",
                          width: "669px",
                          objectFit: "contain",
                          marginTop: "-60px",
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    </section>
  );
};

export default Banner;
