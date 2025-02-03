import React from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/checkout/Content';

const Checkout = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>VR-Fashion | Checkout</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <div style={{backgroundColor:'white'}}>
            <Header/>
            <Breadcrumb breadcrumb={{ pagename: 'Checkout' }}/>
            <Content/>
            {/* <Instafeeds/>
            <Footer/> */}
            </div>
        </React.Fragment>
    );
};

export default Checkout;
