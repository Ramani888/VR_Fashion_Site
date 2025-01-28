import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";

const Category = () => {
  const navigate = useNavigate();
  const categoryposts = [
    { icon: 'flaticon-bracelet', name: 'Under 200', numberofproduct: '12', tag: 2 },
    { icon: 'flaticon-ring', name: 'Under 300', numberofproduct: '27', tag: 3 },
    { icon: 'flaticon-necklace', name: 'Under 500', numberofproduct: '18', tag: 5 },
    { icon: 'flaticon-earrings', name: 'Under 1000', numberofproduct: '23', tag: 10 },
  ];

  const handleNavigation = (path, category) => {
    navigate(path, category);
  }

  return (
    <section className="restaurant-tab-area">
      <div className="container">
        <Tab.Container defaultActiveKey="earrings">
          <Nav
            variant="pills"
            className="restaurant-rood-list row justify-content-center mb-30"
          >
            {categoryposts?.map((item) => {
              return (
                <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6" onClick={() => handleNavigation("/classification", item)}>
                  <Nav.Link eventKey={item?.name}>
                    <i className={item?.icon} />
                    <span className="title">{item?.name}</span>
                  </Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Tab.Container>
      </div>
    </section>
  )
};

export default Category;
