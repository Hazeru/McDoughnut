import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
            
            <img src="/words/welcome.png" alt="Donut" className="reservation-text" style={{ marginTop:"100px", marginLeft:"10px", height: "100px", width: "700px" }}/>
            <img src="/words/yoursweetest.png" alt="Donut" className="reservation-text" style={{marginLeft:"30px", height: "80px", width: "500px" }}/>
              </div>
            <p className="mid">
                At McDoughnut, we’re passionate about creating the most delicious, mouthwatering donuts you’ve ever tasted. 
                Our freshly baked donuts are made with the finest ingredients, ensuring every bite is a perfect blend of sweetness and fluffiness.
                Whether you're craving classic glazed donuts or looking to indulge in our unique, seasonal flavors, we’ve got something for everyone!
                From breakfast treats to delightful desserts, McDoughnut brings joy to your taste buds. 
                Explore our menu, discover your favorites, and let us make your day a little sweeter.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="dhouse.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
