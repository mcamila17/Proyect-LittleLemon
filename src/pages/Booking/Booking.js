import React, { useState } from 'react'
import './Booking.css'
import Nav from '../../components/Nav/Nav'
import DatePickerComponent from '../../components/DatePickerComponent/DatePickerComponent'
import Footer from '../../components/Footer/Footer'
import SelectComponent from '../../components/SelectComponent/SelectComponent'
import NumberGuest from '../../components/NumberGuest/NumberGuest'
import Occasion from '../../components/Occasion/Occasion'
import { useNavigate } from 'react-router-dom'
import { Alert } from '@mui/material'


const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setError('');
  };
  const handleGuestChange = (guests) =>{
    setSelectedGuests(guests);
    setError('');
  };
  const handleTimeChange = (time) =>{
    setSelectedTime(time);
    setError('');
  };
  const hanldeOccasionChange = (occasion) =>{
    setSelectedOccasion(occasion);
    setError('')
  };

  const handleClick = () => {
    if (!selectedDate) {
      setError('please select a date.');
    } else if(!selectedGuests){
      setError('Please select a number of guests.')
    }else if(!selectedTime){
      setError('please select a time.')
    }else if(!selectedOccasion){
      setError('please select the occasion.')
    }else {
      navigate('/Confirmation');
    }
  };
  return (
    <div className='booking'>
      <Nav />
      <div className='format'>
        <h1>Book Now</h1>
        <form className='booking-form'>
          <div>
            <label>select a date</label>
            <DatePickerComponent onDateChange={handleDateChange} />
          </div>
          <div>
            <label>select a Time</label>
            <SelectComponent onTimeChange={handleTimeChange}/>
          </div>
          <div>
            <label>Number of guests</label>
            <NumberGuest onGuestChange={handleGuestChange}/>
          </div>
          <div>
            <label>Select Occasions</label>
            <Occasion onOccasionChange={hanldeOccasionChange} />
          </div>
        </form>
        {error && <Alert severity="error">{error}</Alert>}
        <button onClick={handleClick}  className='reserve-button'>Reserve a Table</button>
      </div>
      <Footer />
    </div>
  )
}

export default Booking
