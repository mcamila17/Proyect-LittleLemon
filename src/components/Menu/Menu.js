import React from 'react'
import './Menu.css'
import cards_data from '../../assets/Cards/Cards'
import delivery from '../../assets/repartidor.png'
import {useNavigate} from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate();
  const handleClick = () =>navigate('/onlineMenu')
  return (
    <div className='menu'>
        <div className='menu-top'> 
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className='menu-bottom'>
          {cards_data.map((card, index)=>{
            return <div className='cards'key={index}>
              <img src={card.image} alt=''/>
              <div className='title-price'>
                <h2>{card.title}</h2>
                <h3>{card.price}</h3>
              </div>
              <p>{card.description}</p>
              <h4>Order a Delivery &nbsp;<img src={delivery} alt='' className='delivery'/> </h4>
            </div>
          })}
        </div>
    </div>
  )
}

export default Menu
