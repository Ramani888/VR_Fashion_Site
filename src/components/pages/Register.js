import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/register/Content';
import Footer from '../sections/footer/Footer';

const Register = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR Fashion | Register</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Register' }} />
            <Content />
            {/* <Instafeeds /> */}
            <Footer />
        </Fragment>
    );
}

export default Register;
