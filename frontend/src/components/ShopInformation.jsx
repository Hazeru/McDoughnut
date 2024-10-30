import React from 'react'
import {data} from '../restApi.json'

const ShopInformation = () => {
  return (
    <> 
      <section className='shop_information' id='shop_information'>
        <div className="container">
          <div className="text_banner">
            {
              data[0].shop_information.slice(0,5).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "800"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))}

          </div>
          <div className="text_banner">
            {
              data[0].shop_information.slice(5).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "800"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))}
          </div>
        </div>
        </section> 
    </>
  )
}

export default ShopInformation
