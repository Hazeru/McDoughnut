import React, { useState, useEffect } from "react";

const Venue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/venue/ai5.png',
    '/venue/ai2.png',
    '/venue/ai3.png', 
    '/venue/ai4.png', 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section>
        <div className="venue">

      <img
        src="/words/venue.png"
        alt="Venue"
        className="menu-text"
        style={{
          height: "130px",
          width: "650px",
          marginTop: '100px',
          marginBottom: '50px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '100%' }}>
        <div style={{ flex: '1', fontSize: '16px', letterSpacing: '2px', backgroundColor: '#FFC512', color: 'black', padding: '20px', borderRadius: '10px', margin: '10px 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          Step inside our vibrant shop and experience the cozy atmosphere where deliciousness meets creativity! Our photo gallery showcases the inviting interiors of McDoughnuts, featuring our comfortable seating areas, colorful decor, and the heartwarming charm that makes us a favorite spot for donut lovers.
          On the outside, you’ll find our distinctive storefront that beckons passersby with its eye-catching design and cheerful vibe. Explore the pictures that capture the essence of our shop—whether it’s the mouthwatering display of our handcrafted donuts or the welcoming smiles of our staff.
          Join us for a visual tour of McDoughnuts, where every image tells a story of flavor, community, and joy. We can’t wait to see you!<br />
          McDoughnuts isn’t just about great doughnuts; it’s about creating a space that feels like home. We’re located in the heart of the community, a place where people come together to celebrate big moments, take a breather from busy days, or simply enjoy a quiet cup of coffee with a favorite pastry. Our shop is designed to be a welcoming environment for everyone, with cozy seating, warm lighting, and a touch of nostalgia that reminds visitors of simpler times. Whether you're coming in for a morning coffee, an afternoon treat, or a box of doughnuts to share with friends, McDoughnuts is the perfect spot to enjoy the little pleasures in life.
        </div>

        <div style={{ flex: '1', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src={images[currentIndex]} alt="Slideshow" className="bordered-image" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }} />

          <button onClick={prevImage} style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1
          }}>
            &#10094;
          </button>

          <button onClick={nextImage} style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1
          }}>
            &#10095;
          </button>

          {/* Dot indicators */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            display: 'flex',
            gap: '5px',
            justifyContent: 'center',
            width: '100%'
          }}>
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? '#FF5733' : '#B3B3B3',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Venue;
