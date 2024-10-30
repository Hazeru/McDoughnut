import React, { useState } from "react";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <footer>
      <div className="container">
        <div className="footer-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img 
            src="/astro1.png" 
            alt="Donut" 
            className="donut-img" 
            style={{ width: '250px', height: '200px', marginRight: '20px' }} 
          />
          <div className="contact-info">
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/svg/call.svg" alt="Call Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              +639178896148
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/svg/mail.svg" alt="Mail Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              order@mcdoughnut.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/svg/maps.svg" alt="Location Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Makati, Metro Manila, Philippines
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/svg/open.svg" alt="Open Time Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Open Time: 08:00 AM - 8:00 PM
            </p>
          </div>

          <div className="social-media" style={{ textAlign: 'center', flexGrow: 1 }}>
            <p className="social-title">FOLLOW US ON OUR <br /> OFFICIAL SOCIAL MEDIA ACCOUNTS:</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/svg/youtube.svg" alt="YouTube Icon" style={{ width: '40px', height: '40px' }} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/svg/facebook.svg" alt="Facebook Icon" style={{ width: '40px', height: '40px' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/svg/instagram.svg" alt="Instagram Icon" style={{ width: '35px', height: '35px' }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="/svg/twitter.svg" alt="Twitter Icon" style={{ width: '35px', height: '35px' }} />
              </a>
            </div>
          </div>

          <div className="back-to-top" style={{ display: 'flex', alignItems: 'center', marginRight:'100px' }}>
            <a 
              href="#top"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                borderRadius: '30px',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: isHovered ? 'black' : 'white', 
                backgroundColor: isHovered ? '#FFC512' : 'black',
                padding: '10px 20px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.3s ease', 
              }}
            >
              {isHovered ? 'GOING UP!' : 'BACK TO TOP'} 
              <img 
                src={isHovered ? "astro-fly.png" : "astro-steady.png"} 
                alt="Back to Top"
                style={{ width: '130px', height: '130px', marginTop: '10px' }}
              />
            </a>
          </div>
        </div>

        <div className="banner" style={{ padding: '0 20px', backgroundColor: '#FFC512', width: '100vw', height: '50px', boxShadow: '0px 4px 2px -2px gray', display: 'flex', justifyContent: 'space-between' }}>
          <div className="left">
            <p style={{ color: 'black' }}>© MCDOUGHNUTS 2024. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
