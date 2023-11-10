import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import AppFooter from "../../components/Footer/AppFooter";
import ShowcaseMain from "../../components/Showcase/ShowcaseMain";
import ShowcaseContent from "../../components/Showcase/ShowcaseContent";

const Showcase = () => {
  return (
    <div>
      <TopBar />
      <div className="main">
        <ShowcaseMain />
      </div>
      <ShowcaseContent />
      <AppFooter />
    </div>
  );
};

export default Showcase;
