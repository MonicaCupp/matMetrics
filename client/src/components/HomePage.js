import React, { useState } from 'react';
import NewWrestlerModal from './AddNewWrestlerModal';
import NewMatchModal from './NewMatchModal';
import TealButton from './TealButton';
import './HomePage.css';

function HomePage() {
  /* New Wrestler Modal Constants and Functions */
  const [isNewWrestlerModalOpen, setIsNewWrestlerModalOpen] = useState(false);

  const openNewWrestlerModal = () => setIsNewWrestlerModalOpen(true);
  const closeNewWrestlerModal = () => setIsNewWrestlerModalOpen(false);

  const handleNewWrestlerFormSubmit = (wrestler) => {
    console.log('Wrestler submitted:', wrestler);
    // Add logic here to send the wrestler data to backend server
    closeNewWrestlerModal();
  };
  /* New Match Modal Constants and Functions */
  const [isStartNewMatchModalOpen, setIsNewMatchModalOpen] = useState(false);

  const openNewMatchModal = () => setIsNewMatchModalOpen(true);
  const closeNewMatchModal = () => setIsNewMatchModalOpen(false);

  const handleNewMatchFormSubmit = (newMatchInfo) => {
    console.log('New match info submitted:', newMatchInfo);
    // Add logic here to send the new match info to backend server
    closeNewMatchModal();
  }

  return (
    <div className="home-page">
      <h1>Mat Metrics</h1>
      <TealButton text={"Add New Wrestler"} onClick={openNewWrestlerModal} />
      <NewWrestlerModal isOpen={isNewWrestlerModalOpen} onClose={closeNewWrestlerModal} onFormSubmit={handleNewWrestlerFormSubmit} />
      <TealButton text={"New Match"} onClick={openNewMatchModal} />
      <NewMatchModal isOpen={isStartNewMatchModalOpen} onClose={closeNewMatchModal} onFormSubmit={handleNewMatchFormSubmit} />
    </div>
  )
};

export default HomePage;