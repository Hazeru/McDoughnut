import React, { useState } from "react";

const WhoAreWe = () => {
  const [activeIndex, setActiveIndex] = useState(null); 


  return (
    <section className="whoarewe" id="whoarewe" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="whoarewe">
        <div className="container">
          <img src="/words/whoarewe.png" alt="Who Are We" className="menu-text" style={{ height: "130px", width: "650px", zIndex: 2, marginTop: '300px' }} />

          <div className="paragraphs"> 
             <p style={{ fontSize: '16px', letterSpacing: '2px', backgroundColor: '#FFC512', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px 0',}}>
                Founded with a love for baking and a dedication to excellence, McDoughnuts isn’t just a donut shop—it’s an experience. Each donut tells a story, crafted with care, creativity, and a sprinkle of joy. Our mission is to make every bite memorable, to bring communities together over our shared love for deliciously fresh treats, and to be a place that feels as warm and inviting as our ovens.
            </p>
            
            <p style={{ fontSize: '16px', letterSpacing: '2px', backgroundColor: '#FFC512', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px 0', }}>
            What You Can Expect
            When you step into McDoughnuts, you can expect more than just a sweet treat. You’ll be greeted by friendly faces, the comforting smell of freshly baked dough, and a menu filled with options that cater to all tastes and dietary preferences. We have options for everyone, including vegan and gluten-free choices, so that no one has to miss out on the joy of a great donut.            </p>
            
            <p style={{ fontSize: '16px', letterSpacing: '2px', backgroundColor: '#FFC512', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px 0', }}>
            At McDoughnuts, we believe that doughnuts are not merely sweets; they are small circles of happiness. Our creations are baked fresh daily, with carefully chosen ingredients and a meticulous eye for detail, ensuring each doughnut is the perfect balance of flavor, texture, and aroma. From classic favorites to innovative new flavors, we offer a range of doughnuts that caters to every taste and craving. Our menu is designed with a combination of traditional recipes and unique twists, reflecting the diversity of our customers' palates and the creative spirit that drives our team.</p>

            <p style={{ fontSize: '16px', letterSpacing: '2px', backgroundColor: '#FFC512', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px 0', }}>
            Our dedication to quality begins with our ingredients. We partner with local suppliers to source the finest and freshest ingredients, supporting our local economy and ensuring that each bite of a McDoughnuts treat delivers authentic and wholesome flavors. Our bakers take pride in their craft, paying attention to every detail, from the flour we use to the spices in our seasonal specialties. This commitment to quality is what sets us apart and defines our approach to baking – a respect for ingredients, a passion for innovation, and a desire to create something exceptional.</p>            
            
            <p style={{ fontSize: '16px', letterSpacing: '2px', backgroundColor: '#FFC512', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px 0', }}>
            Beyond our storefront, McDoughnuts actively participates in community events, partnerships, and charitable causes, recognizing the importance of giving back to the community that has welcomed us so warmly. Whether it's a fundraiser for a local cause or a neighborhood event, we are proud to play an active role in making our community stronger and more connected.</p>

        </div>
          </div>
          </div>
    </section>
  );
};

export default WhoAreWe;
