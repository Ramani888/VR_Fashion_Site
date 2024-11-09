import React from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/about/Content';

const About = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>VR-Fashion | About Us</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{ pagename: 'About Us' }} />
            <Content/>
            <Instafeeds/>
            <Footer/>
        </React.Fragment>
    );
};

export default About;
