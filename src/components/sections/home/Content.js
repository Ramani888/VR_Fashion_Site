import React, { Fragment } from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import Habout from '../../layouts/Habout';
import Trending from './Trending/Trending';
import Condos from './Condos';
import Cta from './Cta';
import Bestselling from './Bestselling';
import Ourcategory from './Ourcategory';
import Handpick from './Handpick';
import Ourproducts from '../../layouts/Ourproducts';
import Saleproducts from './Saleproducts';
import Counter from './Counter';
import Onsale from './Onsale';
import Video from './Video';
import Latestproducts from '../../layouts/Latestproducts';
import Blog from './Blog';
import useHome from './useHome';
import Newsletter from '../../layouts/Newsletter';
import CustomeLoginPopup from '../../Custome/LoginPopup/CustomeLoginPopup';

const Content = () => {
    return (
        <Fragment>
            <Banner/>
            <Ourcategory/>
            {/* <Bestselling /> */}
            <Latestproducts />
            <Category/>
            <Ourproducts />
            {/* <Habout/> */}
            {/* <Trending/> */}
            {/* <Condos/>
            <Cta/>
            <Bestselling/>
            <Ourcategory/>
            <Handpick/>
            <Ourproducts/>
            <Saleproducts/>
            <Counter/>
            <Onsale/>
            <Video/>
            <Latestproducts/>
            <Blog/> */}
        </Fragment>
    );
}

export default Content;
