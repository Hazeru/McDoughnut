import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
        <hr></hr>
        <br></br>


          <h1 className="heading"><b>WHO WE ARE</b></h1>
          <p>On June 15, 2023, McDoughnut was established with a passion for creating the most delicious, high-quality donuts in the market. Founded in Makati, Philippines,
          McDoughnut began as a small family-owned business with a commitment to crafting delightful, freshly made donuts that bring joy to every bite.
          Since then, McDoughnut has expanded its presence through local partnerships and delivery services, earning a reputation for its innovative flavors and commitment to customer satisfaction.
          Today, McDoughnut operates multiple outlets and continues to grow, offering a wide range of sweet and savory donut varieties across the region.</p>
          <br></br>
          <hr></hr>

          <h1 className="heading"><b>OUR MISSION</b></h1>
          <p>
          At McDoughnuts, we believe that a donut is more than just a sweet treat; it's an experience that brings joy, fosters connections, and celebrates the simple pleasures of life. 
          Our mission is to create the finest donuts that not only satisfy cravings but also elevate moments of happiness for our customers, our community, and beyond. 
          We are committed to crafting delicious, innovative, and beautifully presented donuts that embody quality and creativity while maintaining our roots in tradition.
          </p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Quality Ingredients, Exceptional Donuts</b></h1>
          <p>Our dedication to quality begins with the ingredients we choose. We source only the freshest, highest-quality ingredients to ensure that every donut we produce is a testament to our commitment to excellence. Our flour is locally milled, our eggs are farm-fresh, and we use real fruit and premium chocolate to create flavors that are not only delightful but also wholesome. By prioritizing quality, we ensure that each bite of a McDoughnut is an indulgence that transports our customers to a world of flavor and satisfaction.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Innovative Flavors and Unique Creation</b></h1>
          <p>Innovation is at the heart of McDoughnuts. We constantly explore new flavor combinations and techniques to surprise and delight our customers. Our team of skilled bakers and culinary artists collaborates to develop unique seasonal offerings and limited-edition flavors that inspire excitement and curiosity. Whether it’s our signature Maple Bacon Bliss or a dreamy Pistachio Rose Delight, our donuts are crafted with creativity and passion. We invite our customers to join us on a flavor journey, where each visit reveals something new and exciting.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Creating Memorable Experiences</b></h1>
          <p>At McDoughnuts, we understand that the experience of enjoying a donut goes beyond the product itself. Our stores are designed to be warm, inviting spaces where customers can relax, connect, and enjoy their treats with friends and family. We foster a community atmosphere where everyone feels welcome and valued. From friendly staff who greet you with a smile to cozy seating areas perfect for sharing stories over coffee and donuts, we strive to create memorable experiences that resonate long after you leave our shop.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Community Engagement and Support</b></h1>
          <p>We are proud to be a part of our local community, and we take our role seriously. At McDoughnuts, we actively engage in community initiatives and support local causes. We believe in giving back, whether it’s through charitable donations, sponsoring local events, or partnering with schools and organizations. Our mission extends beyond our storefront; we aim to uplift our community by promoting local artisans, hosting workshops, and participating in events that celebrate the spirit of togetherness. When you choose McDoughnuts, you’re not just enjoying a delicious treat; you’re supporting a business that cares about making a positive impact.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Sustainability and Environmental Responsibility</b></h1>
          <p>In an ever-changing world, we recognize our responsibility to protect the environment. McDoughnuts is committed to sustainable practices that minimize our ecological footprint. From sourcing ingredients from local farms to reducing waste through eco-friendly packaging, we aim to create a sustainable business model that reflects our values. We believe that by making conscious choices, we can inspire our customers and fellow businesses to join us in the journey towards a healthier planet. Our commitment to sustainability ensures that the enjoyment of our donuts today does not compromise the well-being of future generations.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Education and Transparency</b></h1>
          <p>Transparency is essential to building trust with our customers. We believe that our customers have the right to know what goes into their food. At McDoughnuts, we provide clear information about our ingredients and production processes, so our customers can make informed choices. Additionally, we are passionate about educating our team members and customers about the art of donut-making, from understanding the fermentation process to the importance of flavor pairings. We host workshops and tasting events to share our knowledge and passion for donuts, creating a culture of appreciation and understanding.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Customer-Centric Approach</b></h1>
          <p>Our customers are at the center of everything we do. We listen to their feedback, celebrate their preferences, and continuously strive to improve our offerings and services. At McDoughnuts, we believe that every customer deserves a personalized experience. Whether you’re ordering a custom cake for a special occasion or seeking recommendations for your next favorite flavor, our dedicated team is here to provide exceptional service. We value the relationships we build with our customers and consider them part of the McDoughnuts family.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>Building a Legacy of Joy and Connection</b></h1>
          <p>Ultimately, our mission at McDoughnuts is to build a legacy of joy and connection through the simple act of enjoying donuts. We aim to create a brand that resonates with people of all ages, backgrounds, and cultures. Our vision is to become a beloved destination where families gather, friends celebrate, and individuals find moments of solace in the delightful experience of indulging in a donut. We aspire to be more than just a bakery; we aim to be a hub of happiness, creativity, and community spirit.</p>
          <h1 className="heading1" style={{ textAlign: 'left' }}><b>A Commitment to Continuous Improvement</b></h1>
         <p>As we look to the future, we remain committed to continuous improvement and innovation. We embrace change, welcome new ideas, and strive to exceed expectations in everything we do. Our mission is not static; it evolves as we learn and grow, incorporating feedback from our customers, team members, and community. We believe in the power of resilience and adaptability, allowing us to navigate challenges while remaining true to our core values.</p>
          <br></br>


          <hr></hr>
          <br></br>
          <h1 className="heading"><b>Meet the McDoughnuts Team</b></h1><br></br>
          <p>At McDoughnuts, we’re more than just a donut shop; we’re a passionate team dedicated to bringing joy through delicious treats.<br></br>
          Our diverse group of individuals shares a common love for baking and creativity, ensuring that every donut is crafted with care and precision.</p>

        </div>

        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
        </div>
    </section>
  );
};

export default Team;
