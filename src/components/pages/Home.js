import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Content from '../sections/home/Content';

const Home = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Homepage</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Content/>
            <Footer/>
        </Fragment>
    );
}

export default Home;
