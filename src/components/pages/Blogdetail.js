import React from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/blogdetail/Content';

const Blogdetail = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>VR-Fashion | Blog Detail</title>
                <meta name="description" content="#" />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Blog Detail' }} />
            <Content />
            <Instafeeds />
            <Footer />
        </React.Fragment>
    );
};

export default Blogdetail;
