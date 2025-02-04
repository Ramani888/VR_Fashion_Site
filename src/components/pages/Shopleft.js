import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/shopleft/Content';
import Footer from '../sections/footer/Footer';

const Shopleft = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Shopping</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Shopping' }} />
            <Content />
            <Footer />
            {/* <Instafeeds /> */}
            {/* <Footer /> */}
        </Fragment>
    );
}

export default Shopleft;
