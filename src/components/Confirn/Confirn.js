import React from 'react'
import './Confirn.css'
import chefB from '../../assets/restaurant chef B.jpg'

const Confirn = () => {
  return (
    <div className='confirm'>
      <h1>Thank you for your reservation!</h1>
      <img src={chefB} />
    </div>
  )
}

export default Confirn
