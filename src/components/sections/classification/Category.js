import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/shop/01.jpg";
import img2 from "../../../assets/img/shop/02.jpg";
import img3 from "../../../assets/img/shop/03.jpg";
import useClassification from "./useClassification";
import Prelader from '../../layouts/Preloader';

const ringsposts = [
  {
    img: img3,
    tag2: "-10%",
    title: "Diamond Ring.",
    price1: "$890",
    price2: "$900",
  },
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Stud Earrings ",
    price1: "$580",
    price2: "$630",
  },
  {
    img: img2,
    tag1: "Sale",
    tag2: "-40%",
    title: "Ankle Bracelet",
    price1: "$290",
    price2: "$300",
  },
  {
    img: img3,
    tag2: "-10%",
    title: "Diamond Ring.",
    price1: "$890",
    price2: "$920",
  },
];

const earingposts = [
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Ankle Bracelet",
    price1: "$390",
    price2: "$480",
  },
  {
    img: img2,
    tag1: "New",
    title: "Stud Earrings",
    price1: "$290",
    price2: "$300",
  },
  {
    img: img3,
    tag1: "New",
    tag2: "-10%",
    title: "Crumpled Ring",
    price1: "$450",
    price2: "$510",
  },
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Golden Pendant",
    price1: "$780",
    price2: "$800",
  },
];

const necklessposts = [
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Ankle Bracelet",
    price1: "$390",
    price2: "$480",
  },
  {
    img: img2,
    tag1: "New",
    title: "Stud Earrings",
    price1: "$290",
    price2: "$300",
  },
  {
    img: img3,
    tag1: "New",
    tag2: "-10%",
    title: "Crumpled Ring",
    price1: "$450",
    price2: "$510",
  },
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Golden Pendant",
    price1: "$780",
    price2: "$800",
  },
];

const braceletposts = [
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Ankle Bracelet",
    price1: "$390",
    price2: "$480",
  },
  {
    img: img2,
    tag1: "New",
    title: "Stud Earrings",
    price1: "$290",
    price2: "$300",
  },
  {
    img: img3,
    tag1: "New",
    tag2: "-10%",
    title: "Crumpled Ring",
    price1: "$450",
    price2: "$510",
  },
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Golden Pendant",
    price1: "$780",
    price2: "$800",
  },
];

const armletsposts = [
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Ankle Bracelet",
    price1: "$390",
    price2: "$480",
  },
  {
    img: img2,
    tag1: "New",
    title: "Stud Earrings",
    price1: "$290",
    price2: "$300",
  },
  {
    img: img3,
    tag1: "New",
    tag2: "-10%",
    title: "Crumpled Ring",
    price1: "$450",
    price2: "$510",
  },
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Golden Pendant",
    price1: "$780",
    price2: "$800",
  },
];

const ankletsposts = [
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Ankle Bracelet",
    price1: "$390",
    price2: "$480",
  },
  {
    img: img2,
    tag1: "New",
    title: "Stud Earrings",
    price1: "$290",
    price2: "$300",
  },
  {
    img: img3,
    tag1: "New",
    tag2: "-10%",
    title: "Crumpled Ring",
    price1: "$450",
    price2: "$510",
  },
  {
    img: img1,
    tag1: "Sale",
    tag2: "-15%",
    title: "Golden Pendant",
    price1: "$780",
    price2: "$800",
  },
];

const Category = ({category}) => {
  const {
    productData,
    handleNavigation,
    loading,
    handleWishlist,
    handleCart
  } = useClassification(category)

  return (
    <section className="restaurant-tab-area pt-120">
      {loading && <Prelader />}
      <div className="container-fluid">
        <Tab.Container defaultActiveKey={category?.name}>
          <Tab.Content>
            <Tab.Pane eventKey={category?.name}>
              <div className="row">
                {productData?.map((item, i) => {
                  const percentageDiscount = Math.round(100 - Number(Number(item?.price * 100) / Number(item?.mrp)));
                  return (
                    <div key={i} className="col-lg-3 col-6">
                      <div className="food-box shop-box">
                        <div className="thumb">
                          <div className="product-img">
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
                            <a onClick={() => handleWishlist(item)} style={{ cursor: 'pointer' }}>
                              <i className={item?.isWishlist ? 'fas fa-heart' : 'far fa-heart'} />
                            </a>
                            {/* <Link to="#">
                              <i className="far fa-sync-alt" />
                            </Link> */}
                            <a onClick={() => handleCart(item)} style={{ cursor: 'pointer' }}>
                              <i className={item?.isCart ? 'fas fa-shopping-cart' : "far fa-shopping-cart"} />
                            </a>
                            <Link onClick={() => handleNavigation("/shop-detail", item)}>
                              <i className="far fa-eye" />
                            </Link>
                          </div>
                        </div>
                        <div className="desc" style={{backgroundColor:'#f2f2f2'}}>
                          <h4 className="product-name">
                            <Link onClick={() => handleNavigation("/shop-detail", item)} style={{ textDecoration: 'none',color:'black',lineHeight: '30px' }}>{item?.name}</Link>
                          </h4>
                          <span className="price" style={{color:'black'}}>
                          ₹{item?.price} <span style={{color:'black'}}>₹{item?.mrp}</span>
                          </span>
                          <span className="price" style={{color:'black'}}>
                            {percentageDiscount}% off
                          </span>
                          <Link onClick={() => handleNavigation("/shop-detail", item)} className="link">
                            <i className="fal fa-arrow-right" style={{color:'black'}}/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Tab.Pane>
            {/* <Tab.Pane eventKey="earrings">
              <div className="row">
                {earingposts.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="food-box shop-box">
                      <div className="thumb">
                        <img src={item.img} alt="images" />
                        <div className="badges">
                          <span className="price">{item.tag1}</span>
                          <span className="price discounted">{item.tag2}</span>
                        </div>
                        <div className="button-group">
                          <Link to="#">
                            <i className="far fa-heart" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-sync-alt" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-eye" />
                          </Link>
                        </div>
                      </div>
                      <div className="desc">
                        <h4>
                          <Link to="/shop-detail">{item.title}</Link>
                        </h4>
                        <span className="price">
                          {item.price1} <span>{item.price2}</span>
                        </span>
                        <Link to="/shop-detail" className="link">
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="necklaces">
              <div className="row">
                {necklessposts.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="food-box shop-box">
                      <div className="thumb">
                        <img src={item.img} alt="images" />
                        <div className="badges">
                          <span className="price">{item.tag1}</span>
                          <span className="price discounted">{item.tag2}</span>
                        </div>
                        <div className="button-group">
                          <Link to="#">
                            <i className="far fa-heart" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-sync-alt" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-eye" />
                          </Link>
                        </div>
                      </div>
                      <div className="desc">
                        <h4>
                          <Link to="/shop-detail">{item.title}</Link>
                        </h4>
                        <span className="price">
                          {item.price1} <span>{item.price2}</span>
                        </span>
                        <Link to="/shop-detail" className="link">
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bracelets">
              <div className="row">
                {braceletposts.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="food-box shop-box">
                      <div className="thumb">
                        <img src={item.img} alt="images" />
                        <div className="badges">
                          <span className="price">{item.tag1}</span>
                          <span className="price discounted">{item.tag2}</span>
                        </div>
                        <div className="button-group">
                          <Link to="#">
                            <i className="far fa-heart" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-sync-alt" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-eye" />
                          </Link>
                        </div>
                      </div>
                      <div className="desc">
                        <h4>
                          <Link to="/shop-detail">{item.title}</Link>
                        </h4>
                        <span className="price">
                          {item.price1} <span>{item.price2}</span>
                        </span>
                        <Link to="/shop-detail" className="link">
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="armlets">
              <div className="row">
                {armletsposts.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="food-box shop-box">
                      <div className="thumb">
                        <img src={item.img} alt="images" />
                        <div className="badges">
                          <span className="price">{item.tag1}</span>
                          <span className="price discounted">{item.tag2}</span>
                        </div>
                        <div className="button-group">
                          <Link to="#">
                            <i className="far fa-heart" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-sync-alt" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-eye" />
                          </Link>
                        </div>
                      </div>
                      <div className="desc">
                        <h4>
                          <Link to="/shop-detail">{item.title}</Link>
                        </h4>
                        <span className="price">
                          {item.price1} <span>{item.price2}</span>
                        </span>
                        <Link to="/shop-detail" className="link">
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="anklets">
              <div className="row">
                {ankletsposts.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="food-box shop-box">
                      <div className="thumb">
                        <img src={item.img} alt="images" />
                        <div className="badges">
                          <span className="price">{item.tag1}</span>
                          <span className="price discounted">{item.tag2}</span>
                        </div>
                        <div className="button-group">
                          <Link to="#">
                            <i className="far fa-heart" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-sync-alt" />
                          </Link>
                          <Link to="#">
                            <i className="far fa-eye" />
                          </Link>
                        </div>
                      </div>
                      <div className="desc">
                        <h4>
                          <Link to="/shop-detail">{item.title}</Link>
                        </h4>
                        <span className="price">
                          {item.price1} <span>{item.price2}</span>
                        </span>
                        <Link to="/shop-detail" className="link">
                          <i className="fal fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane> */}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Category;
