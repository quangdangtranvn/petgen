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
// petgen_ui.js – Swipe Tween với hình thú cưng PetGen
import { motion, AnimatePresence } from 'framer-motion';
import petImages from './petgenAssets'; // Array chứa ảnh PetGen đã render

const SwipePetGallery = () => {
  const [index, setIndex] = useState(0);

  const swipeNext = () => setIndex((prev) => (prev + 1) % petImages.length);
  const swipePrev = () => setIndex((prev) => (prev - 1 + petImages.length) % petImages.length);

  return (
    <div className="gallery-container">
      <button onClick={swipePrev} className="nav-btn">⬅️</button>

      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={petImages[index]}
          src={petImages[index]}
          alt={`Pet ${index}`}
          className="pet-image"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      <button onClick={swipeNext} className="nav-btn">➡️</button>
    </div>
  );
};

export default SwipePetGallery;
export default LandingPage;
export default MintingPage;
