import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/cart/Content';
import Footer from '../sections/footer/Footer';

const Cart = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Cart</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <div style={{backgroundColor:'white'}}>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Cart'}}/>
            <Content/>
            {/* <Instafeeds/>
            <Footer/> */}
            </div>
            <Footer />
        </Fragment>
    );
}

export default Cart;
