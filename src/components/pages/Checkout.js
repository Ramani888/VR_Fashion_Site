import React from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Content from '../sections/checkout/Content';
import Footer from '../sections/footer/Footer';

const Checkout = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>VR Fashion | Checkout</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <div style={{backgroundColor:'white'}}>
            <Header/>
            <Breadcrumb breadcrumb={{ pagename: 'Checkout' }}/>
            <Content/>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Checkout;
