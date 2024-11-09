import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/legal/Content';

const Legal = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Legal</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Legal' }} />
            <Content />
            <Instafeeds />
            <Footer />
        </Fragment>
    );
};

export default Legal;
