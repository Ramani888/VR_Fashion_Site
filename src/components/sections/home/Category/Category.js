import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../../../Api/ApiService";
import Api from "../../../Api/EndPoint";
import "./Category.css";
import Preloader from "../../../layouts/Preloader";

const Category = () => {
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  // ==================================== Api ================================== //

  const getCategory = async () => {
    try {
      setLoading(true);
      const category = await apiGet(Api.get_category, "");
      setCategoryData(category?.data || []);
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==================================== End ================================== //

  return (
    <div className="categories-box-layout">
      {loading && <Preloader />}
      <div className="container">
        <div className="categories-box-layout-inner">
          <div className="row">
            {categoryData.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                {/* <Link to="/shop-right" className="categories-box">
                  <span className="icon">
                    <img
                      src={item?.imagePath}
                      alt={item?.name}
                      className="category-image" 
                    />
                  </span>
                  <h5 className="title">{item?.name}</h5>
                  <p>{item.numberofproduct} Products</p>
                  <span className="overlay-icon">
                    <i className={item.icon} />
                  </span>
                </Link> */}
                <Link
                  to={{
                    pathname: "/shop-right",
                    state: { category: item },
                  }}
                  className="categories-box"
                >
                  <span className="icon">
                    <img
                      src={item?.imagePath}
                      alt={item?.name}
                      className="category-image"
                    />
                  </span>
                  <h5 className="title">{item?.name}</h5>
                  <p>{item.numberofproduct} Products</p>
                  <span className="overlay-icon">
                    <i className={item.icon} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
