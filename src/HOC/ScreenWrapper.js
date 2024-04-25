import React from "react";
import Header from "../Components/UI/Header";
import Footer from "../Components/UI/Footer";

const ScreenWrapper = (Screen) => {
  return () => {
    return (
      <>
        {" "}
        <Header />
        <Screen />
        <Footer />
      </>
    );
  };
};

export default ScreenWrapper;
