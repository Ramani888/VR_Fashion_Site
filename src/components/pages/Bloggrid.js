import React from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/bloggrid/Content';

const Bloggrid = () => {
    return (
        <>
            <MetaTags>
                <title>VR-Fashion | Blog Grid</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Blog Grid' }} />
            <Content />
            <Instafeeds />
            <Footer />
        </>
    );
}

export default Bloggrid;
