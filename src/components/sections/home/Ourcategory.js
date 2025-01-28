import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/shop/01.jpg";
import img2 from "../../../assets/img/shop/02.jpg";
import img3 from "../../../assets/img/shop/03.jpg";
import useHome from "./useHome";
import { useNavigate } from "react-router-dom";
import Preloader from '../../layouts/Preloader';
import Slider from "react-slick";

const ringsposts = [
  { img: img3, discount: 10, title: "Diamond Ring.", price: 890 },
  { img: img1, discount: 15, title: "Stud Earrings ", price: 580 },
  { img: img2, discount: 40, title: "Ankle Bracelet", price: 290 },
  { img: img3, discount: 10, title: "Diamond Ring.", price: 890 },
];

const earingposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const necklessposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const braceletposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const armletsposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const ankletsposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const Ourcategory = () => {
  const {
    categoryData,
    adsPosterData,
    loading
  } = useHome();

  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path, category) => {
    navigate(path, category); // Use history.push() for navigation
  };

  return (
    <section className="restaurant-tab-area mb-50">
      {loading && <Preloader />}
      <div className="container-fluid">
        <div className="section-title mb-10">
          <span className="title-tag"> Categories </span>
          {/* <h2>Our Categories</h2> */}
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
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
                <span style={{width: '100%', overflow: 'hidden', whiteSpace: 'wrap', textAlign: 'center'}} className="title">{item?.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
};

export default Ourcategory;
