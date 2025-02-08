import React from "react";
import useHome from "./useHome";
import { useNavigate } from "react-router-dom";
import Preloader from '../../layouts/Preloader';

const Ourcategory = () => {
  const {
    categoryData,
    loading
  } = useHome();

  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path, category) => {
    navigate(path, {state: { category: category }}); // Use history.push() for navigation
  };

  return (
    <section className="restaurant-tab-area mb-50" style={{ backgroundColor: "white" }}>
      {loading && <Preloader />}
      <div className="container-fluid">
        <div className="section-title mb-10">
          <span className="title-tag" style={{color:'black'}}> Categories </span>
          {/* <h2>Our Categories</h2> */}
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
             backgroundColor: "white"
          }}
          className="no-scrollbar"
        >
          {categoryData?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: '0 10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleNavigation("/classification", item)}
              >
                <div 
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginBottom: '10px',
                  }}
                >
                  <img
                    src={item?.imagePath}
                    alt={item?.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover', // Ensures the image is properly cropped
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <span style={{width: '100%', overflow: 'hidden', whiteSpace: 'wrap', textAlign: 'center',color:'black'}} className="title">{item?.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
};

export default Ourcategory;
