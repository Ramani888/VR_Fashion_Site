import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/login/Content';
import { getUserData } from '../../helper/UserHelper';
import { useNavigate } from 'react-router-dom';
import Footer from '../sections/footer/Footer';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "VR-Fashion | Login";

        const userData = getUserData();

        if (userData) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <Fragment>
            <MetaTags>
                <title>VR Fashion | Login</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Login'}}/>
            <Content/>
            {/* <Instafeeds/> */}
            <Footer/>
        </Fragment>
    );
};

export default Login;
