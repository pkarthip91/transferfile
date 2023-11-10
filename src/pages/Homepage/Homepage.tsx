import React from "react";
import MainPost from "../../components/Main/MainPost";
import TopBar from "../../components/TopBar/TopBar";
import HowItWorks from "../../components/Main/HowItWorks";
import AppFooter from "../../components/Footer/AppFooter";
import LatestNews from "../../components/Main/LatestNews";

const Homepages = () => {
  return (
    <div>
      <TopBar />
      <div className="main banner-main">
      {/* <div className="stars">
        <div className="animation stars-small"></div>
        <div className="animation stars-large"></div>
      </div> */}
        <MainPost />
      </div>
      <HowItWorks />
      <LatestNews/>
      <AppFooter />
    </div>
  );
};

export default Homepages;
