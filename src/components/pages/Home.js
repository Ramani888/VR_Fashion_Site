import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
// import Footer from "../layouts/Footer";
import Newsletter from "../layouts/Newsletter";
import Content from "../sections/home/Content";
import Footerthree from "../layouts/Footerthree";
import Footer from "../sections/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>VR-Fashion | Homepage</title>
        <meta name="description" content="#" />
      </MetaTags>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Header />
        <Content />
        <Footer />
        {/* <Footer/> */}
        {/* <Footerthree /> */}
      </div>
    </Fragment>
  );
};

export default Home;
