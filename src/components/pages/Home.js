import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Content from "../sections/home/Content";
import Footer from "../sections/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>VR-Fashion | Home</title>
        <meta name="description" content="#" />
      </MetaTags>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Header />
        <Content />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
