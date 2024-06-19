import React from 'react'
import './Chicago.css'
import restaurant from '../../assets/restaurant.jpg'
import chefs from '../../assets/Mario and Adrian A.jpg'

const Chicago = () => {
  return (
    <div className='chicago'>
      <div className='chicago-left'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>
      <div className='chicago-right'>
          <div className='img-container'>
              <img src={restaurant} className='img1'/>
              <img src={chefs} className='img2'/>
          </div>
      </div>
    </div>

  )
}

export default Chicago
