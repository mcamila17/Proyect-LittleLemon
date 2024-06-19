import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import '../SelectComponent/SelectComponent.css';

function Occasion({onOccasionChange}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onOccasionChange(value);
  };

  return (
    <FormControl fullWidth variant="outlined" className="form-control">
      <InputLabel id="occasion-select-label">Select Occasion</InputLabel>
      <Select
        labelId="occasion-select-label"
        id="occasion-select-outlined"
        value={selectedOption}
        onChange={handleChange}
        label="Select Occasion"
        className="custom-select"
      >
        
        <MenuItem value="Birthday">Birthday</MenuItem>
        <MenuItem value="Engagement">Engagement</MenuItem>
        <MenuItem value="Anniversary">Anniversary</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Occasion;
