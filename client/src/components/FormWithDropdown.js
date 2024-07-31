import React, { useState } from 'react';

import TealButton from './TealButton';
import './FormWithDropdown.css';

function FormWithDropdown ({ options, onSubmit }) {

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    onSubmit(selectedOption)
  }

  const handleSubmit = (e) => {
    setSelectedOption(e.target.value)
  };

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Choose an option:
          <select value={selectedOption} onChange={handleChange} required>
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                option.label
              </option>
            ))}
          </select>
        </label>
      </div>
      <TealButton type="submit">Submit</TealButton>
    </form>
  )
}

export default FormWithDropdown;