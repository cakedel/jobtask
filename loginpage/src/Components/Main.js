import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";

const Main = () => {
  return (
    <div className="main section">
      <Header />
      <Contents/>
      <Footer />
    </div>
  );
};

export default Main;
