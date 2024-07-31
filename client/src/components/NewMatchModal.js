import React from 'react';
import './NewMatchModal.css';
import TealButton from './TealButton';
import FormWithDropdown from './FormWithDropdown';

function StartNewMatchModal ({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;
  //------------- Button Handlers ------------------------//
  const handleGirlSelect = () => {
    console.log('Girl Button Clicked')
  };

  const handleBoySelect = () => {
    console.log('Boy Button Clicked')
  };

  const handleDualSelect = () => {
    console.log('Dual Button Clicked')
  };

  const handleTournamentSelect = () => {
    console.log('Tournament Button Clicked')
  };

  const handleScrimmageSelect = () => {
    console.log('Scrimmage Button Clicked')
  };

  const handleWrestleOffSelect = () => {
    console.log('Wrestle Off Button Clicked')
  };
//--------------Dropdown Handlers ------------------//

  const options = [
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3'}
  ]

  const handleDropdownSelect = () => {
    console.log('Dropdown option selected')
  }

  return (
    <div class="start-new-match-modal-overlay">
      <div class="start-new-match-modal-content">
        <button class="start-new-match-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>
          New Match
        </h2>
        <h3>
          Team:
        </h3>
        <TealButton text={"Girls"} onClick={handleGirlSelect} />
        <TealButton text={"Boys"} onClick={handleBoySelect} />
        <h3>
          Match Type:
        </h3>
        <TealButton text={"Dual"} onClick={handleDualSelect} />
        <TealButton text={"Tournament"} onClick={handleTournamentSelect} />
        <TealButton text={"Scrimmage"} onClick={handleScrimmageSelect} />
        <TealButton text={"Wrestle Off"} onClick={handleWrestleOffSelect} />
        <FormWithDropdown options={options} onSubmit={handleDropdownSelect} />
      </div>
    </div>
  )
};

export default StartNewMatchModal;