import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import AppFooter from "../../components/Footer/AppFooter";
import LearnMain from "../../components/Learn/LearnMain";
import LearnContent from "../../components/Learn/LearnContent";

const Learn = () => {
  return (
    <div>
      <TopBar />
      <div className="main">
        <LearnMain />
      </div>
      <LearnContent />
      <AppFooter />
    </div>
  );
};

export default Learn;
