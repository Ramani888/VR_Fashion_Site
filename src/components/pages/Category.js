import React, { Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Footer from '../sections/footer/Footer';
import Content from '../sections/category/Content';

const Category = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>VR Fashion | Category</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Category' }} />
            <Content />
            <Footer />
        </Fragment>
    );
}

export default Category;
