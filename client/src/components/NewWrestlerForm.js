import React, { useState } from 'react';
import axios from 'axios';
import TealButton from './TealButton';
import BlackButton from './BlackButton'

function NewWrestlerForm({onSubmit}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/names/add', { firstName, lastName });
      setFirstName('');
      setLastName('');
      setMessage('Wrestler added successfully!');
      setError('');
    } catch (error) {
      setMessage('');
      setError('Failed to add wrestler. Please try again.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    // Clear form fields
    setFirstName('');
    setLastName('');
    // Optionally, redirect or close the form if it's part of a modal or a different view
    setMessage('');
    setError('');
  };


  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
            required
          />
        </label>
      </div>
      <TealButton text={"Submit"} type="submit" />
      <BlackButton text={"Cancel"} onClick={handleCancel} />
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default NewWrestlerForm;