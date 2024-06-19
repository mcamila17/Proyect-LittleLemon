import React from 'react'
import './Footer.css'
import Chef from '../../assets/restaurant chef B.jpg'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <img  src={Chef}/>
        <ul>
        <h4>Doormat Navigation</h4>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul>
          <h4>Contact</h4>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
        <ul>
          <h4>Social Media</h4>
          <li>Intagram <img  src={instagram_icon}/></li>
          <li>Facebook <img  src={facebook_icon}/></li>
          <li>Twitter <img  src={twitter_icon}/></li>
        </ul>
      </div>
      <span>Developed by Camila troncoso.</span>
      <p>© 2024 Little Lemon. All rights reserved.</p>
    </div>
  )
}

export default Footer
