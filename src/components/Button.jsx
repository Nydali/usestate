import React from 'react';

function Button({ onClick, text }) {
  return (
    <button onClick={onClick} style={{ margin: '10px', padding: '10px' }}>
      {text}
    </button>
  );
}

export default Button;
