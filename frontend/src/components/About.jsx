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
            
              <h2 className="heading"><b>Welcome to McDoughnut..</b></h2>
              <h1>Your Sweetest Destination!</h1>
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
            <img src="reservation.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
