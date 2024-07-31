import React, { useState } from 'react';
import TealButton from './TealButton';

function NewWrestlerForm({onSubmit}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName });
    setFirstName('');
    setLastName('');
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