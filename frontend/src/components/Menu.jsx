import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
            <hr></hr>
                <h1 className="heading"><b>OUR BEST SELLERS</b></h1><br></br>
                <p>Indulge in the sweetest, fluffiest, and most delicious donuts in town! At McDoughnut, we believe that every donut is a little moment of joy.</p>
                <p>Whether you're craving something classic or feeling adventurous, our range of best-sellers has something for everyone. Handmade fresh daily, our donuts are crafted with love, using only the finest ingredients.</p>
            </div><br></br>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
