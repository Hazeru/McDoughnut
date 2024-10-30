import React, { useEffect, useRef } from "react";
import { data } from "../restApi.json";

const Team = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headingRef.current.style.transform = "translateY(0)";
            headingRef.current.style.opacity = "1";
            textRef.current.style.transform = "translateY(0)";
            textRef.current.style.opacity = "1";
          } else {
            headingRef.current.style.transform = "translateY(-20px)";
            headingRef.current.style.opacity = "0";
            textRef.current.style.transform = "translateY(-20px)";
            textRef.current.style.opacity = "0";
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(headingRef.current);
    observer.observe(textRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="team" id="team" style={{ padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
      <div 
        className="menu-section" 
        style={{ 
          backgroundImage: `url('ban2.png')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', 
          width: '100%',  
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: -1 
        }}
      ></div>
    
      <div className="container" style={{ zIndex: 1, textAlign: 'center', width: '90%', maxWidth: '1200px' }}>
        <div className="heading_section" 
          style={{ 
            backgroundColor: 'white', 
            fontWeight: 'bold', 
            color: '#6A5ACD', 
            padding: '20px', 
            borderRadius: '50px',
            marginBottom: '30px',
            display: 'inline-block',
          }}>
          <img src="/words/meet.png" alt="Donut" className="team-text" style={{ height: "150px", width: "auto" }}/>

          <div
            ref={headingRef}
            style={{
              backgroundColor: 'white',
              fontWeight: 'bold',
              color: '#6A5ACD',
              padding: '20px',
              borderRadius: '50px',
              transform: 'translateY(-20px)',
              opacity: '0',
              transition: 'all 0.6s ease-out',
            }}
          >
            <p
              ref={textRef}
              style={{
                color: 'black',
                marginBottom: '10px',
                transform: 'translateY(-20px)',
                opacity: '0',
                transition: 'all 0.6s ease-out 0.2s',
              }}>
              At McDoughnuts, we’re more than just a donut shop; we’re a passionate team dedicated to bringing joy through delicious treats.<br />
              Our diverse group of individuals shares a common love for baking and creativity, ensuring that every donut is crafted with care and precision.
            </p>
          </div>
        </div>

        <div 
          className="team_container" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '20px', 
          }}
        >
          {data[0].team.map((element) => {
            return (
              <div 
                className="card" 
                key={element.id} 
                style={{ 
                  flex: '0 1 calc(25% - 20px)', 
                  margin: '10px', 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',    
                  backgroundColor: '#FFC512', 
                  color: 'white',
                  maxWidth: '250px',
                  textAlign: 'center',
                }}
              >
                <img 
                  src={`/public/people/${element.image}`} 
                  alt={element.name} 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '10px' 
                  }} 
                />
                <h3 style={{ marginTop: '10px' }}>{element.name}</h3>
                <p style={{ color: '#555' }}>{element.designation}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Team;
