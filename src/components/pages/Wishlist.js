import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/wishlist/Content';
import Footer from '../sections/footer/Footer';

const Wishlist = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Wishlist</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Wishlist' }} />
            <Content />
            <Footer />
            {/* <Instafeeds />
            <Footer /> */}
        </Fragment>
    );
}

export default Wishlist;
