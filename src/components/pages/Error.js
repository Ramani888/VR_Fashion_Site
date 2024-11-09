import React, { Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../sections/error/Content';

const Error = () => {
    useEffect(() => {
        // Mimicking componentDidMount for setting up side effects
        return () => {
            // Mimicking componentWillUnmount for cleanup
        };
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <title>VR-Fashion | Error</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Content/>
        </Fragment>
    );
}

export default Error;
