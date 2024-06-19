import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Booking from './pages/Booking/Booking'
import Confirmation from './pages/Confirmation/Confirmation'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='/confirmation' element={<Confirmation />}/>
      </Routes>
    </div>
  )
}

export default App
