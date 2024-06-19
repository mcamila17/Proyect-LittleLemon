import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './SelectComponent.css';

function SelectComponent({onTimeChange}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value =event.target.value;
    setSelectedOption(event.target.value);
    onTimeChange(value);
  };

  return (
    <FormControl fullWidth variant="outlined" className="form-control">
      <InputLabel id="demo-simple-select-outlined-label">Select Time</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
        className="custom-select"
      >

        <MenuItem value={5}>05:00</MenuItem>
        <MenuItem value={6}>06:00</MenuItem>
        <MenuItem value={7}>07:00</MenuItem>
        <MenuItem value={8}>08:00</MenuItem>
        <MenuItem value={9}>09:00</MenuItem>
        <MenuItem value={10}>10:00</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
