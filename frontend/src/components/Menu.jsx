import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu' style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
        <div className="moving-text-container" style={{ overflow: 'hidden', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 4, backgroundColor: 'white' }}>
          <p className="moving-text" style={{
            whiteSpace: 'nowrap',
            animation: 'scrollText 25s linear infinite',
            fontSize: '24px',
            padding: '10px 0',
            background: 'rgba(0, 0, 0, 0.6)',
            color: '#FFC512',
            minWidth: '100vw',
          }}>

            ✨ Get 20% OFF on all orders during our special sale event! ✨
            Our fluffy donuts are calling your name, so don’t miss out! Head straight to our MENU now to explore our full selection of donuts—from classics to exciting new flavors, there's something for everyone!
          </p>
        </div>

        <div 
          className="cream-top" 
          style={{ 
            overflow: 'hidden', 
            width: '100vw', 
            height: '200px', 
            position: 'absolute', 
            top: '20px', 
            left: 0, 
            backgroundImage: 'url(/banners/cream.png)', 
            backgroundRepeat: 'repeat-x', 
            backgroundSize: 'contain',  
          }}>

        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: '200px' }}>
          <img 
            src="e1.png" 
            alt="Decorative Side Image Left" 
            style={{
              height: '10%',
              width: 'auto',
              marginRight: '-2px',
              objectFit: 'cover'
            }}/>

          <img 
            src="/words/best.png" 
            alt="Best Logo" 
            className="menu-text" 
            style={{ 
              height: "130px", 
              width: "650px", 
              position: 'absolute', 
              top: '-60px',  
              left: '50%', 
              transform: 'translateX(-50%)',  
              marginLeft: '30px',
              marginTop: '200px'
            }}/>

          <div style={{ position: 'relative', textAlign: 'center', zIndex: 2, maxWidth: '600px' }}>
            <p 
              style={{ 
                fontSize: '18px', 
                letterSpacing: '2px', 
                background: 'rgba(255, 255, 255, 0.7)', 
                padding: '30px', 
                borderRadius: '10px', 
                margin: '100px 0 0 0', 
                textAlign: 'center',
                marginTop: '100px'
              }}>

              Craving something sweet? Now’s the perfect time to treat yourself because McDoughnuts is having a sale! Indulge in our signature handcrafted donuts made with love and creativity. 
              Each bite is filled with flavor that’ll keep you coming back for more!
              Indulge in the sweetest, fluffiest, and most delicious donuts in town! 
              At McDoughnut, we believe that every donut is a little moment of joy. 
              Whether you're craving something classic or feeling adventurous, our range of best-sellers has something for everyone. 
              Handmade fresh daily, our donuts are crafted with love, using only the finest ingredients.
            </p>
          </div>
          <img 
            src="e2.png" 
            alt="Decorative Side Image Right" 
            style={{
              height: '10%',
              width: 'auto',
              marginLeft: '-2px',
              objectFit: 'cover'
            }}/>
            
        </div>

        <div className="dishes_container" style={{ zIndex: 5, position: 'relative', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '10px', padding: '0 20px' }}>
          {
            data[0].dishes.map(element => (
              <div className="card" key={element.id} style={{ width: '250px', textAlign: 'center', padding: '10px', backgroundColor: "white", borderRadius:"10px", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <img src={`/products/${element.image}`} alt={element.title} style={{ width: '100%', height: '200px', objectFit: 'cover'}} /> 
                <h3>{element.title}</h3>
                <button style={{
                  padding: '8px 20px',
                  color: '#fff',
                  background: 'linear-gradient(186deg, #6a5acd, #d8b6e4)',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                  marginTop: '10px'
                }}>{element.category}</button>
              </div>
            ))
          }   
        </div>

        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </section>
    </>
  );
}

export default Menu;
