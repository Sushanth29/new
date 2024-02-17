import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState('Sridhar Reddy');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className="form-control font-weight-bold border-light"
        style={{ width: `${name.length * 14}px`, backgroundColor: '#f8f9fa', fontSize: '23px', fontWeight: 'Bold' }}
      />
    </div>
  );
};

export default Name;
