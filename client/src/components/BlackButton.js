import React from 'react';
import './BlackButton.css';

function BlackButton({text, onClick, ...props}) {
  return(
    <button className="black-button" onClick={onClick} {...props}>
      {text}
    </button>
  );
}

export default BlackButton;