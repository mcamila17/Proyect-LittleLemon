import React from 'react'
import './Customers.css'
import costumers_cards from '../../assets/CostumersCards/Costumers_cards'

const Customers = () => {
  return (
    <div className='customers'>
      <h1>Testimonials</h1>
      <div className='customers-container'>
        {costumers_cards.map((card,index)=>{
          return <div className='custumers_card' key={index}>
            <h3>{card.star}</h3>
            <div className='img-name'>
            <img src={card.image} alt=''/>
            <h2>{card.name}</h2>
            </div>
            <p>{card.review}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Customers
