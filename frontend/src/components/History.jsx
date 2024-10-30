import React, { useState } from "react";

const History = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track which paragraph is active

  const historyData = [
    {
      heading: "The Start of McDoughnuts Journey Begins",
      image: "/history/img1.png",
      content: "The journey of McDoughnut began with a simple but ambitious dream: to transform the way people enjoy donuts. Founded by a small team of passionate bakers, food enthusiasts, and dreamers, McDoughnuts was born out of a deep-rooted love for delicious, handcrafted donuts and a desire to bring smiles to our community through sweet, unique flavors. The idea was sparked in a cozy kitchen, where our founders experimented with recipes, flavors, and techniques, determined to craft something different—donuts that weren’t just a treat, but an experience."
    },
    {
      heading: "Founding Year: Our First Shop Opens",
      image: "/history/img2.png",
      content: "On June 15, 2016: McDoughnuts officially opens its first shop in Manila, marking the beginning of a flavorful journey. The founder, passionate about baking and innovation, designs a menu featuring a unique selection of handcrafted donuts. The shop quickly becomes a local favorite, renowned for its fresh ingredients and creative flavor combinations. Opening day attracts a crowd, with lines wrapping around the block as excited customers come to taste the newly launched offerings. The warm atmosphere and inviting decor create a sense of community, setting the stage for McDoughnuts to become more than just a donut shop."
    },
    {
      heading: "New Flavors Added to Menu Selection",
      image: "/history/img3.png",
      content: "On March 1, 2018: In response to customer feedback and growing demand, McDoughnuts expands its menu to include seasonal flavors and vegan options. This strategic move not only caters to diverse dietary preferences but also reflects the brand's commitment to inclusivity and creativity. The addition of innovative flavors, such as lavender-infused and matcha-glazed donuts, captures the attention of food enthusiasts. The company also begins to offer specialty coffee pairings, enhancing the customer experience. As word spreads about the delicious new offerings, McDoughnuts sees a significant increase in foot traffic, solidifying its reputation as a must-visit destination for donut lovers."
    },
    {
      heading: "Team Expansion: Welcoming New Members Together",
      image: "/history/img4.png",
      content: "On October 10, 2019: As McDoughnuts gains popularity, the team expands to include 15 dedicated members. This growth reflects the increasing demand for high-quality products and excellent customer service. The founder emphasizes a collaborative and inclusive workplace culture, fostering creativity and teamwork among the staff. New hires include talented bakers, customer service representatives, and marketing specialists who share a passion for the brand. This diverse team is instrumental in developing new products, organizing community events, and ensuring that each customer leaves with a smile. The expanded team strengthens the brand's identity and enhances the overall customer experience."
    },
    {
      heading: "Franchise Opportunities Launched",
      image: "/history/img5.png",
      content: "On August 5, 2021: After years of building a loyal customer base, McDoughnuts announces franchise opportunities to aspiring entrepreneurs. This strategic decision aims to expand the brand’s footprint nationwide, allowing other passionate individuals to share in the McDoughnuts experience. The company hosts informational sessions and provides comprehensive training to franchisees, ensuring they uphold the brand’s values and standards. The response is overwhelming, with numerous inquiries from potential franchise partners excited about bringing McDoughnuts to their communities. This expansion marks a new chapter in the company’s journey, paving the way for further growth and increased brand recognition across the country."
    },
    {
      heading: "The Present Time: 1000th Location Opened",
      image: "/history/img6.png",
      content: "Today, in 2024, McDoughnuts proudly celebrates the opening of its 100th location in Pasig City, Philippines, a significant milestone reflecting its growth and success. This achievement underscores the brand's dedication to quality, community engagement, and innovative offerings. The grand opening event draws crowds eager to experience the delightful flavors and warm atmosphere that McDoughnuts is known for. To commemorate the occasion, the company introduces a limited-edition donut flavor inspired by customer favorites over the years. This celebration not only marks the expansion of McDoughnuts but also highlights the brand's journey from a single shop to a beloved nationwide chain."
    }
  ];

  return (
    <section className="history" id="history" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="history">
        <div className="container">
          <img src="/words/mchistory.png" alt="History" className="menu-text" style={{ height: "160px", width: "850px", zIndex: 2, marginTop: '50px' }} />

          <div className="paragraphs" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', marginTop: '50px', marginBottom: '150px' }}>
            {historyData.map((item, index) => (
              <div key={index} style={{ flex: '0 1 200px', minWidth: '200px', maxWidth: '200px' }}>
                <img
                  src={item.image} 
                  alt={`Image for ${item.heading}`} 
                  style={{ 
                    width: '100%',  
                    height: 'auto', 
                    borderRadius: '10px', 
                    marginBottom: '10px',
                    maxWidth: '200px',
                    maxHeight: '180px',
                    objectFit: 'cover'
                  }}
                />
                <h2
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)} 
                  style={{
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: 'black',
                    padding: '10px',
                    backgroundColor: '#FFC512',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}
                >
                  {item.heading}
                </h2>
                {activeIndex === index && (
                  <p style={{
                    fontSize: '16px',
                    letterSpacing: '2px',
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '20px',
                    borderRadius: '10px',
                    margin: '10px 0',
                    height: '100%',
                    overflow: 'auto'
                  }}>
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
    </section>
  );
};

export default History;
