import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/classification/Content';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const Classification = () => {
    const location = useLocation();
    const category = location?.state;
    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | {category?.name}</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename: category?.name}}/>
            <Content category={category}/>
            {/* <Instafeeds/> */}
            {/* <Footer/> */}
        </Fragment>
    );
}

export default Classification;
