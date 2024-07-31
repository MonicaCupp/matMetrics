import React from 'react';
import './TealButton.css';

function TealButton({text, onClick, ...props}) {
  return(
    <button className="teal-button" onClick={onClick} {...props}>
      {text}
    </button>
  );
}

export default TealButton;