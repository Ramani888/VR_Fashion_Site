import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Content from '../sections/contact/Content';
import Footer from '../sections/footer/Footer';

const Contact = () => {

    return (
        <Fragment>
            <MetaTags>
                <title>VR Fashion | Contact Us</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Contact Us'}}/>
            <Content/>
            <Footer />
        </Fragment>
    );
};

export default Contact;
