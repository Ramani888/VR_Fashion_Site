import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/gallerytwo/Content';

const Gallerytwo = () => {
    useEffect(() => {
        // componentDidMount logic can go here if needed
        return () => {
            // componentWillUnmount logic can go here if needed
        };
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <title>VR Fashion | Gallery</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Gallery'}}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
}

export default Gallerytwo;
