import React, { useState } from 'react';
import axios from 'axios';
import TealButton from './TealButton';

function NewWrestlerForm({onSubmit}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http//localhost:5000/names/add', { firstName, lastName });
      //TODO - Clear form and add success message here
    } catch (error) {
      //TODO - Handle error by showing message or whatever
      console.error(error);
    }
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
    </form>
  );
}

export default NewWrestlerForm;