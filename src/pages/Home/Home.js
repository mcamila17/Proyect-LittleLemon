import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import Reserve from '../../components/Reserve/Reserve'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Costumers from '../../components/Customers/Customers'
import Chicago from '../../components/Chicago/Chicago'
import ReactDom from 'react-dom'

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Reserve />
      <Menu />
      <Costumers />
      <Chicago />
      <Footer />
    </div>
  )
}

export default Home
