import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tab, Nav } from "react-bootstrap";
import useShopDetail from "./useShopDetail";

const Shopinfo = ({ product }) => {
  const {
    productData,
    categoryData,
    handleCart,
    handleChange,
    IncrementItem,
    DecreaseItem,
    clicks
  } = useShopDetail(product)
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  // const [clicks, setClicks] = useState(1);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: false,
  };


    const settings2 = {
        slidesToShow: Math.min(productData?.image?.length || 1, 5),
        slidesToScroll: 1,
        fade: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: Math.min(productData?.image?.length || 1, 4),
            },
        }],
    };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="Shop-section pt-120 pb-20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="shop-detail-image">
              <Slider
                // className="detail-slider-1"
                {...settings}
                asNavFor={nav2}
                ref={slider1}
              >
                {productData?.image?.map((item, i) => (
                  <div key={i} className="slide-item">
                    <div className="image-box" style={{ height: '500px' }}>
                      <Link>
                        <img src={item?.path} className="img-fluid" alt="img" />
                      </Link>
                      {/* <span className="price">{item.tag}</span> */}
                    </div>
                  </div>
                ))}
              </Slider>
              <Slider
                // className="detail-slider-2"
                {...settings2}
                asNavFor={nav1}
                ref={slider2}
              >
                {productData?.image?.map((item, i) => (
                  <div key={i} className="slide-item" style={{display:'inline-block'}}>
                    <div className="image-box" style={{ height: '100px' }}>
                      <img src={item?.path} className="img-fluid" alt="img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="shop-detail-content">
              <h3 className="product-title mb-10">
                {productData?.name}
              </h3>
              <div className="desc mb-10 pb-10 border-bottom">
                <span className="price">
                  ₹{productData?.price}{" "}
                  <span>₹{productData?.mrp}</span>
                </span>
              </div>
              <div className="mt-10 mb-20">
                <div className="d-inline-block other-info">
                  <h6>
                    Availability:
                    <span className="text-success ml-2">In Stock</span>
                  </h6>
                </div>
              </div>
              <div className="short-descr mb-10">
                <p>{productData?.description}</p>
              </div>
              {productData?.productColorCode && (
                <div className="color-sec mb-10">
                  <label>Color</label>
                  <div className="color-box">
                    <label className="m-0">
                      <input 
                        type="radio" 
                        name="color" 
                        value={productData.productColorCode} 
                      />
                      <span 
                        className={`choose-color ${productData.productColorCode}`} 
                        style={{ backgroundColor: productData.productColorCode }} 
                      />
                    </label>
                  </div>
                </div>
              )}
              {productData?.productColorName && (
                <div className="color-sec mb-10">
                  <label>Material</label>
                  <div className="color-box">
                    <label className="m-0">
                      <input type="radio" name="material" value={productData?.productColorName} defaultChecked />
                      <span className="choose-material">{productData?.productColorName}</span>
                    </label>
                  </div>
                </div>
              )}
              <div className="quantity-cart d-block d-sm-flex">
                <div className="quantity-box">
                  <button
                    type="button"
                    className="minus-btn"
                    onClick={DecreaseItem}
                  >
                    <i className="fal fa-minus" />
                  </button>
                  <input
                    type="text"
                    className="input-qty"
                    name="name"
                    value={clicks}
                    onChange={handleChange}
                    readOnly
                  />
                  <button
                    type="button"
                    className="plus-btn"
                    onClick={IncrementItem}
                  >
                    <i className="fal fa-plus" />
                  </button>
                </div>
                <div className="cart-btn pl-40">
                  <Link onClick={() => handleCart(productData)} className="main-btn btn-border">
                    {productData?.isCart ? 'View in Cart' : 'Add to Cart'}
                  </Link>
                </div>
              </div>
              <div className="other-info flex mt-20">
                <h6>Category:</h6>
                <ul>
                  <li className="list-inline-item mr-2">
                    <Link to="#" className="grey">
                      {categoryData?.name}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="other-info flex mt-20">
                <h6>Code:</h6>
                <ul>
                  <li className="list-inline-item mr-2">
                    <Link to="#" className="grey">
                      {productData?.code}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="product-description mt-40">
              <Tab.Container defaultActiveKey="addinfo">
                <div className="tabs">
                  <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                      <Nav.Link eventKey="description">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="addinfo">Additional Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="description">
                      <p>
                        {productData?.description}
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="addinfo" className="additional-info">
                      <div>
                        <h3 className="text-white mb-20">
                          Additional Information
                        </h3>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Attributes</th>
                              <th>Values</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <b>Base Metal</b>
                              </td>
                              <td className="value">{productData?.productBaseMetalName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Brand</b>
                              </td>
                              <td className="value">{productData?.productBrandName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Color Code</b>
                              </td>
                              <td className="value">{productData?.productColorCode}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Color Name</b>
                              </td>
                              <td className="value">{productData?.productColorName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Occasion</b>
                              </td>
                              <td className="value">{productData?.productOccasionName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Plating</b>
                              </td>
                              <td className="value">{productData?.productPlatingName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Stone Type</b>
                              </td>
                              <td className="value">{productData?.productStoneTypeName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Trend</b>
                              </td>
                              <td className="value">{productData?.productTrendName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Weight</b>
                              </td>
                              <td className="value">{productData?.weight}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopinfo;