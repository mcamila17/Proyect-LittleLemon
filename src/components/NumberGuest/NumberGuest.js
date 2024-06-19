import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './NumberGuest.css';

function NumberGuest({ onGuestChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onGuestChange(value);
  };

  return (
    <FormControl fullWidth variant="outlined" className="form-control">
      <InputLabel id="demo-simple-select-outlined-label">Number of Guests</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selectedOption}
        onChange={handleChange}
        label="Number of Guests"
        className="custom-select"
      >
        {[...Array(12).keys()].map((i) => (
          <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default NumberGuest;
