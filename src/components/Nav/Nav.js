import React, { useState } from 'react';
import "./Nav.css"
import logo from '../../assets/Logo .svg'
import Basket from '../../assets/Basket.svg'
import hamburger from '../../assets/🦆 icon _hamburger menu.svg'



const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };
    return (
      <div className='navbar'>
         <div className='hamburger-menu'>
              <button onClick={handleClick}><img src={hamburger} /></button>
          </div>
        <img src={logo} className='logo'/>
          <div className={`navbar-right ${isActive ? 'my-class' : ''}`}>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Menu</li>
                  <li>Reservation</li>
                  <li>Order Online</li>
                  <li>Login</li>
                  <li><img src={Basket} /></li>
              </ul>
          </div>
      </div>
    )
}

export default Nav
