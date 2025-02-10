import React, { Fragment } from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import Ourcategory from './Ourcategory';
import Ourproducts from '../../layouts/Ourproducts';
import Latestproducts from '../../layouts/Latestproducts';
import Preloader from '../../layouts/Preloader';
import useHome from './useHome';

const Content = () => {
    const {
        loading
    } = useHome();
    return (
        <Fragment>
            {loading && <Preloader />}
            <Banner/>
            <Ourcategory/>
            <Latestproducts />
            <Category/>
            <Ourproducts />
        </Fragment>
    );
}

export default Content;
