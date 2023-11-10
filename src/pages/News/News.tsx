import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import AppFooter from "../../components/Footer/AppFooter";
import NewsMain from "../../components/News/NewsMain";
import NewsContent from "../../components/News/NewsContent";

const News = () => {
  return (
    <div>
      <TopBar />
      <div className="main">
        <NewsMain />
      </div>
      <NewsContent />
      <AppFooter />
    </div>
  );
};

export default News;
