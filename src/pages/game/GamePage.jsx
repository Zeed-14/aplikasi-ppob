import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GameSelectionInput from './components/GameSelectionInput';
import VoucherGrid from './components/VoucherGrid';
import GameActions from './components/GameActions';

const games = [
  { name: 'Mobile Legends', logo: 'https://i.imgur.com/4Q1q4bJ.png', color: 'blue' },
  { name: 'Free Fire', logo: 'https://i.imgur.com/J352a2O.png', color: 'orange' },
  { name: 'PUBG Mobile', logo: 'https://i.imgur.com/A28p4E2.png', color: 'yellow' },
  { name: 'Genshin Impact', logo: 'https://i.imgur.com/uF1l22D.png', color: 'sky' },
];

const GamePage = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [ign, setIgn] = useState(null); // In-Game Name

  const validateUserId = (id) => {
    if (!id) return '';
    if (id.length < 5) return 'User ID minimal 5 karakter.';
    return '';
  };

  const handleInputChange = (event) => {
    const newId = event.target.value;
    setUserId(newId);
    setError(validateUserId(newId));
    setIgn(null); // Reset IGN jika ID diubah
  };

  const handleCheckUser = () => {
    setIsChecking(true);
    setIgn(null);
    setTimeout(() => {
      setIgn('ProPlayer123'); // Nama dummy
      setIsChecking(false);
    }, 1500);
  };

  const handleContinue = () => {
    navigate('/konfirmasi', { 
      state: { 
        productType: 'game', 
        userId, 
        voucher: selectedVoucher,
        game: selectedGame,
        ign,
      } 
    });
  };

  return (
    <div className="animate-fade-in pb-28">
      <GameSelectionInput
        selectedGame={selectedGame}
        onSelectGame={(game) => {
          setSelectedGame(game);
          setIgn(null);
        }}
        userId={userId}
        error={error}
        onInputChange={handleInputChange}
        onCheck={handleCheckUser}
        isChecking={isChecking}
        ign={ign}
      />
      
      {ign && (
        <VoucherGrid
          selectedVoucher={selectedVoucher}
          onSelectVoucher={setSelectedVoucher}
          selectedGame={selectedGame}
        />
      )}
      
      <GameActions
        onBack={() => navigate(-1)}
        onContinue={handleContinue}
        isDisabled={!ign || !selectedVoucher}
        selectedGame={selectedGame}
      />
    </div>
  );
};

export default GamePage;