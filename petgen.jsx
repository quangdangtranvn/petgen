import React, { useState } from 'react';

const MintingPage = () => {
  const [petName, setPetName] = useState('');
  const [traits, setTraits] = useState('');

  const handleMint = async () => {
    // Call the PetGen API to mint the pet
    const response = await fetch('/api/mint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: petName, traits }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="minting-page">
      <h2>Mint Your Pet</h2>
      <input
        type="text"
        placeholder="Pet Name"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Traits"
        value={traits}
        onChange={(e) => setTraits(e.target.value)}
      />
      <button onClick={handleMint}>Mint Pet</button>
    </div>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to PetGen</h1>
      <p>Mint your own unique NFT pets!</p>
      <Link to="/mint" className="btn">Get Started</Link>
    </div>
  );
};

export default LandingPage;
export default MintingPage;
