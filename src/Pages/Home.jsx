import React from "react";
import Navbar from "../components/Navbar";
import CaseStudyCards from "../components/CaseStudyCards";
import Footer from "../components/Footer";
import HomeShopify from "../components/HomeShopify";
import HomeMarque from "../components/HomeMarque";
import HomeStun from "../components/HomeStun";
import HomeSlider from "../components/HomeSlider";
import HomeEnhance from "../components/HomeEnhance";
import GetStartedSection from "../components/HomeGet";

function Home() {
  return (
    <>
      <Navbar />
      <HomeShopify />
      <HomeMarque />
      <HomeStun />
      <HomeSlider />
      <HomeEnhance />
      <CaseStudyCards />
      <GetStartedSection />
      <Footer />
    </>
  );
}

export default Home;
