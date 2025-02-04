import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Preloader from '../../layouts/Preloader';
import useHome from '../home/useHome';

const Content = () => {
    const {
        categoryData,
        loading
    } = useHome();
    const navigate = useNavigate();
    const handleNavigation = (path, category) => {
        navigate(path, {state: { category: category }}); // Use history.push() for navigation
    };
    return (
        <section className="restaurant-tab-area pt-70">
            {loading && <Preloader />}
            <div className="container">
                <Tab.Container defaultActiveKey="earrings">
                    <Nav variant="pills" className="restaurant-rood-list row justify-content-center mb-10">
                        {categoryData?.map((item) => {
                            return (
                                <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                    <Nav.Link eventKey={item?.name} onClick={() => handleNavigation("/classification", item)}>
                                        <img src={item?.imagePath} height={130} width={150}></img>
                                        <span className="title">Rings</span>
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Tab.Container>
            </div>
        </section>
    )
}

export default Content