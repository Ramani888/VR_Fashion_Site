import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../sections/comingsoon/Content';

const Comingsoon = () => {
    useEffect(() => {
        // componentDidMount logic can go here if needed
        return () => {
            // componentWillUnmount logic can go here if needed
        };
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Coming Soon</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Content />
        </Fragment>
    );
}

export default Comingsoon;
