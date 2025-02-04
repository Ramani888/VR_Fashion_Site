import React from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
// import Footer from '../layouts/Footerthree';
import Content from '../sections/account/Content';
import Footer from '../sections/footer/Footer';

const Account = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>VR-Fashion | My Account</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'My Account'}} />
            <Content/>
            {/* <Instafeeds/> */}
            <Footer/>
        </React.Fragment>
    );
}

export default Account;
