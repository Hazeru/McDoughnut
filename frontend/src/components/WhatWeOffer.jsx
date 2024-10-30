import React, { useState, useEffect } from "react";

const WhatWeOffer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="wwo" id="wwo">
      <div className="container">
      <img src="/words/whatweoffer.png" alt="Donut" className="wwo-text" style={{  marginTop: '10px',  height: "130px", width: "650px"}}/>

        <div className="heading_section" style={{ flex: '1', marginTop: '20px', marginBottom: '100px', marginRight: '10px', backgroundColor: '#EB8317', fontWeight: 'bold', color: '#6A5ACD', padding: '20px', borderRadius: '50px' }}>

          <div style={{ position: 'relative', textAlign: 'center' }}>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px', marginBottom: '10px', marginLeft: '50px', marginRight: '50px' }}>
            {[
              { title: 'Quality Ingredients, Exceptional Donuts', content: 'Our dedication to quality begins with the ingredients we choose. We source only the freshest, highest-quality ingredients to ensure that every donut we produce is a testament to our commitment to excellence. Our flour is locally milled, our eggs are farm-fresh, and we use real fruit and premium chocolate to create flavors that are not only delightful but also wholesome. By prioritizing quality, we ensure that each bite of a McDoughnut is an indulgence that transports our customers to a world of flavor and satisfaction.' },
              { title: 'Innovative Flavors and Unique Creation', content: 'Innovation is at the heart of McDoughnuts. We constantly explore new flavor combinations and techniques to surprise and delight our customers. Our team of skilled bakers and culinary artists collaborates to develop unique seasonal offerings and limited-edition flavors that inspire excitement and curiosity. Whether it’s our signature Maple Bacon Bliss or a dreamy Pistachio Rose Delight, our donuts are crafted with creativity and passion. We invite our customers to join us on a flavor journey, where each visit reveals something new and exciting.' },
              { title: 'Creating Memorable Experiences With You', content: 'At McDoughnuts, we understand that the experience of enjoying a donut goes beyond the product itself. Our stores are designed to be warm, inviting spaces where customers can relax, connect, and enjoy their treats with friends and family. We foster a community atmosphere where everyone feels welcome and valued. From friendly staff who greet you with a smile to cozy seating areas perfect for sharing stories over coffee and donuts, we strive to create memorable experiences that resonate long after you leave our shop.' },
              { title: 'Community Engagement and Support', content: 'We are proud to be a part of our local community, and we take our role seriously. At McDoughnuts, we actively engage in community initiatives and support local causes. We believe in giving back, whether it’s through charitable donations, sponsoring local events, or partnering with schools and organizations. Our mission extends beyond our storefront; we aim to uplift our community by promoting local artisans, hosting workshops, and participating in events that celebrate the spirit of togetherness. When you choose McDoughnuts, you’re not just enjoying a delicious treat; you’re supporting a business that cares about making a positive impact.' },
              { title: 'Sustainability and Environmental Responsibility', content: 'In an ever-changing world, we recognize our responsibility to protect the environment. McDoughnuts is committed to sustainable practices that minimize our ecological footprint. From sourcing ingredients from local farms to reducing waste through eco-friendly packaging, we aim to create a sustainable business model that reflects our values. We believe that by making conscious choices, we can inspire our customers and fellow businesses to join us in the journey towards a healthier planet. Our commitment to sustainability ensures that the enjoyment of our donuts today does not compromise the well-being of future generations.' },
              { title: 'Embracing Our Future with Quality and Innovation', content: 'As we look ahead, McDoughnuts remains committed to our core values of quality, innovation, and community engagement. We strive to expand our product offerings while maintaining the standards our customers have come to love. Our journey is just beginning, and we invite everyone to join us as we explore new flavors, strengthen our community ties, and work towards a sustainable future. Together, we can create lasting memories, one donut at a time.' },
            
            ].map((section, index) => (

              <div
                key={index}
                className="dropdown"
                style={{
                  flex: '1 1 calc(33% - 20px)',
                  backgroundColor: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  maxHeight: openSection === `section${index}` ? '500px' : '160px',
                  overflow: 'hidden',
                }}>

                <div
                  onClick={() => toggleSection(`section${index}`)}
                  className="dropdown-heading-box"
                  style={{
                    backgroundColor: '#e7f3fe',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}>

                  <h2>{section.title}</h2>
                </div>
                {openSection === `section${index}` && (
                  <div
                    className="dropdown-content"
                    style={{
                      backgroundColor: '#f0f0f0',
                      padding: '10px',
                      borderRadius: '5px',
                      marginTop: '10px',
                    }}>

                    <p>{section.content}</p>
                  </div>
                )}
              </div>
            ))}
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
