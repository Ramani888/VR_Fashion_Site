import React from "react";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import useClassification from "./useClassification";
import Prelader from '../../layouts/Preloader';

const Category = ({category}) => {
  const {
    productData,
    handleNavigation,
    loading,
    handleWishlist,
    handleCart
  } = useClassification(category)

  return (
    <section className="restaurant-tab-area pt-60">
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
                            <img src={item?.image[0]?.path} alt="images" style={{height: '100%', width: '100%', objectFit: 'fill'}} />
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
                            <Link to="/shop-detail" state={{ product: item }}>
                              <i className="far fa-eye" />
                            </Link>
                          </div>
                        </div>
                        <div className="desc" style={{backgroundColor:'#f2f2f2'}}>
                          <h4 className="product-name">
                            <Link to="/shop-detail" state={{ product: item }} style={{ textDecoration: 'none',color:'black',lineHeight: '30px' }}>{item?.name}</Link>
                          </h4>
                          <span className="price" style={{color:'black'}}>
                          ₹{item?.price} <span style={{color:'black'}}>₹{item?.mrp}</span>
                          </span>
                          <span className="price" style={{color:'black'}}>
                            {percentageDiscount}% off
                          </span>
                          <Link to="/shop-detail" state={{ product: item }} className="link">
                            <i className="fal fa-arrow-right" style={{color:'black'}}/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Category;
