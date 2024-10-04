import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Donut Worry</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./1.png" alt="hero" />
            </div>
            
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Be Happy With</h1>
              </div>       
              <img className="logo" src="./3.png" alt="logo" />
              </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">McDoughnut!</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
