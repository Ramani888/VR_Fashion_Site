import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../layouts/Pagination";
import Sidebar from "../../layouts/Shopsidebar";
import { apiGet } from "../../Api/ApiService";
import Api from "../../Api/EndPoint";
import Preloader from "../../layouts/Preloader";
import CustomeLoginPopup from '../../Custome/LoginPopup/CustomeLoginPopup'

const imageStyles = {
  width: "100%",
  height: "250px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
};

const Content = ({ category }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginPopup = () => setIsLoginOpen(true);
  const closeLoginPopup = () => setIsLoginOpen(false);

  useEffect(() => {
    getProductData();
  }, []);

  // =================================== Api ================================== //

  const getProductData = async () => {
    try {
      setLoading(true);
      const response = await apiGet(
        `${Api.Category_Wise_Product}?categoryId=${category?._id}`
      );
      setProductData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // =================================== End ================================== //

  return (
    <section className="Shop-section pt-120 pb-120">
      {loading && <Preloader />}
      <div className="container">
        <div className="row justify-content-center column-reverse">
          <div className="col-lg-8 col-md-10">
            <div className="shop-products-wrapper">
              <div className="shop-product-top">
                <p>Showing 1 To 9 Of 60 results</p>
                <div className="sorting-box">
                  <select name="guests" id="guests" className="nice-select">
                    <option value={0}>Default Sorting</option>
                    <option value={1}>Sort By Popularity</option>
                    <option value={2}>Sort By Latest</option>
                    <option value={4}>Sort By Rating</option>
                    <option value={8}>Sort By Price:Low to High</option>
                    <option value={8}>Sort By Price:High to Low</option>
                  </select>
                </div>
              </div>
              <div className="product-wrapper restaurant-tab-area">
                <div className="row">
                  {productData.map((item, i) => {
                    const percentageOff = (
                      (1 - item?.price / item?.mrp) *
                      100
                    ).toFixed(0);
                    return (
                      <div key={i} className="col-lg-4 col-md-6">
                        <div className="food-box shop-box">
                          <div className="thumb">
                            <img
                              src={item?.image[0]?.path}
                              alt={item?.name}
                              style={imageStyles}
                            />
                            <div className="badges">
                              {item.discount > 0 || item.discount !== "" ? (
                                <span className="price">Sale</span>
                              ) : (
                                ""
                              )}
                              {item.discount > 0 || item.discount !== "" ? (
                                <span className="price discounted">
                                  -{item.discount}%
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="button-group">
                            <div>
                               <Link to="#" onClick={(e) => {
                                 e.preventDefault(); 
                                 openLoginPopup();
                               }}>
                                 <i className="far fa-heart" />
                               </Link>
                               <CustomeLoginPopup isOpen={isLoginOpen} onClose={closeLoginPopup} />
                             </div>
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
                              <Link to="/shop-detail">{item?.name}</Link>
                            </h4>
                            <div
                              style={{ flexDirection: "row", width: "100%" }}
                            >
                              <span
                                className="price"
                                style={{
                                  marginRight: "10px",
                                  fontSize: "12px",
                                }}
                              >
                                ₹{item?.price}
                              </span>
                              <span
                                className="price"
                                style={{
                                  textDecorationLine: "line-through",
                                  marginRight: "10px",
                                  color: "white",
                                  fontWeight: "normal",
                                  fontSize: "12px",
                                }}
                              >
                                {item?.mrp}
                              </span>
                              {/* <span
                                className="price"
                                style={{
                                  color: "white",
                                  fontWeight: "normal",
                                  fontSize: "12px",
                                }}
                              >
                                {percentageOff}% off
                              </span> */}
                            </div>
                            {/* <span className="price">
                              ${item.price}
                              {percentageOff > 0 || percentageOff !== "" ? (
                                <span>
                                  {" "}
                                  $
                                  {Math.ceil(
                                    item?.price * (percentageOff / 100)
                                  )}{" "}
                                </span>
                              ) : (
                                ""
                              )}
                            </span> */}
                            <Link
                              to={{
                                pathname: "/shop-detail",
                                state: { product: item },
                              }}
                              className="link"
                            >
                              <i className="fal fa-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="pagination-wrap">
              <Pagination />
            </div>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
