import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />

      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="banner" style={{ flex: 1 }}>
        </div>

        <div className="banner" style={{ flex: 1}}>
        <div className="rightSide">
          <div className="top">
          <img src="/words/hero1.png" alt="Donut" className="herosection-text" style={{ marginLeft:"0px", height: "150px", width: "100%" }}/>
          </div>
          
          <div className="mid">
          <p>
              Step into a world of sweet possibilities with our bakeshop franchise! We offer a proven and unique business model that sets you apart in the baking industry, coupled with exceptional training that empowers you with essential skills. 
              Our ongoing support is like a sprinkle of magic, guiding you every step of the way as you whip up delicious creations and build a thriving business. 
              Join us today and rise to success—where your passion for baking meets limitless potential!
          </p>

      </div>
      </div>
      </div>
      </div>

    </section>
  );
}

export default HeroSection;
