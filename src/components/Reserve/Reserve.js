import React from 'react'
import "./Reserve.css"
import restaurant from '../../assets/restauranfood.jpg'
import { useNavigate} from 'react-router-dom'

const Reserve = () => {
  const navigate = useNavigate();
  const handleClick = () =>navigate('/booking');
  return (
    <div className='reserve'>
        <div className='reserve-left'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button onClick={handleClick}>Reserve a Table</button>
        </div>
          <img src={restaurant} className='photo'/>
    </div>
  )
}

export default Reserve
