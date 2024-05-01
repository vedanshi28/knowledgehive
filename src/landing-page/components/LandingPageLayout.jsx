import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPageLayout = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPageLayout;
