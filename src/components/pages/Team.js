import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/team/Content';

const Team = () => {
    useEffect(() => {
        // componentDidMount logic here
        return () => {
            // componentWillUnmount logic here
        };
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <title>VR Fashion | Team</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header/>
            <Breadcrumb breadcrumb={{pagename:'Team'}}/>
            <Content/>
            <Instafeeds/>
            <Footer/>
        </Fragment>
    );
};

export default Team;
