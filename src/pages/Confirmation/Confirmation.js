import React from 'react'
import './Confirmation.css'
import Nav from '../../components/Nav/Nav'
import Reserve from '../../components/Reserve/Reserve'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import Costumers from '../../components/Customers/Customers'
import Chicago from '../../components/Chicago/Chicago'
import Confirn from '../../components/Confirn/Confirn'

const Confirmation = () => {
  return (
    <div className='confirmation'>
      <Nav />
      <Confirn />
      <Menu />
      <Costumers />
      <Chicago />
      <Footer />
    </div>
  )
}

export default Confirmation
