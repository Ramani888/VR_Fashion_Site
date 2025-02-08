import React, { Fragment } from 'react';
import Category from './Category';
import Trending from './Trending';

const Content = ({ category }) => (
    <Fragment>
        <Category category={category}/>
    </Fragment>
);

export default Content;
