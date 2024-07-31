import React from 'react';
import NewWrestlerForm from './NewWrestlerForm';
import './addNewWrestlerModal.css';


function NewWrestlerModal({ isOpen, onClose, onFormSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="new-wrestler-modal-overlay">
      <div className="new-wrestler-modal-content">
        <button className="new-wrestler-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Add New Wrestler</h2>
        <NewWrestlerForm onSubmit={onFormSubmit} />
      </div>
    </div>
  );
}


export default NewWrestlerModal