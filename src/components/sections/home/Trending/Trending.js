import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../Api/EndPoint";
import { apiGet } from "../../../Api/ApiService";
import "./Trending.css";
import Preloader from "../../../layouts/Preloader";

const Trending = () => {
  const [loading, setLoading] = useState(false);
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    getTrendingData();
  }, []);

  // ==================================== Api ================================== //

  const getTrendingData = async () => {
    try {
      setLoading(true);
      const promotion = await apiGet(Api.promotion, "");
      setTrendingData(promotion?.data || []);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==================================== End ================================== //

  return (
    <section className="pt-115 pb-115 bg-white">
      {loading && <Preloader />}
      <div className="container">
        <div className="section-title text-center mb-30">
          <div className="section-title-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <path
                d="M369.853,250.251l-100-241C267.53,3.65,262.062,0,255.999,0s-11.531,3.65-13.854,9.251l-100,241    c-1.527,3.681-1.527,7.817,0,11.498l100,241c2.323,5.601,7.791,9.251,13.854,9.251s11.531-3.65,13.854-9.251l100-241    C371.381,258.068,371.381,253.932,369.853,250.251z M255.999,457.861L172.239,256l83.76-201.861L339.759,256L255.999,457.861z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-1"
                d="M139.606,118.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C145.465,133.748,145.465,124.25,139.606,118.393z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-2"
                d="M456.607,55.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394l63-63C462.465,70.748,462.465,61.25,456.607,55.393z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-3"
                d="M139.606,372.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    C58.322,459.535,62.16,461,65.999,461s7.678-1.465,10.607-4.394l63-63C145.465,387.748,145.465,378.25,139.606,372.393z"
                fill="#ffffff"
              />
              <path
                className="diamond-spark spark-4"
                d="M456.607,435.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C462.465,450.748,462.465,441.25,456.607,435.393z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <span className="title-tag"> avail our offer </span>
          <h2>Trending Collection</h2>
        </div>
        {/* <div className="text-center mb-20">
          <Link to="#">
            View more
            <i className="fal fa-arrow-right ml-2" />
          </Link>
        </div> */}
        <div className="row">
          {trendingData.map((item, i) => {
            console.log("item?.image[0]?.path", item?.image[0]?.path);
            const percentageOff = ((1 - item?.price / item?.mrp) * 100).toFixed(
              0
            );

            return (
              <div key={i} className="col-lg-3 col-md-6">
                {item?.image[0]?.path && (
                  <div className="apartment-box">
                    {/* <div className="thumb">
                      <Link
                        to={{
                          pathname: "/shop-detail",
                          state: { product: item },
                        }}
                        className="d-block"
                      >
                        <img src={item?.image[0]?.path} alt="img" />
                      </Link>
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
                    </div> */}
                    <div className="image-box">
                      <Link
                        to={{
                          pathname: "/shop-detail",
                          state: { product: item },
                        }}
                        className="d-block"
                      >
                        <img src={item?.image[0]?.path} alt="img" />
                      </Link>
                    </div>
                    <div className="content-box-2">
                      <h3 className="title">
                        <Link
                          to={{
                            pathname: "/shop-detail",
                            state: { product: item },
                          }}
                        >
                          {item?.name}
                        </Link>
                      </h3>
                      <p>{item.text}</p>
                      <div style={{ flexDirection: "row" }}>
                        <span className="price" style={{ marginRight: "10px" }}>
                          ₹{item?.price}
                        </span>
                        <span
                          className="price"
                          style={{
                            textDecorationLine: "line-through",
                            marginRight: "10px",
                            color: "white",
                            fontWeight: "normal",
                          }}
                        >
                          {item?.mrp}
                        </span>
                        <span
                          className="price"
                          style={{ color: "white", fontWeight: "normal" }}
                        >
                          {percentageOff}% off
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
