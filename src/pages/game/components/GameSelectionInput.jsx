import React from 'react';
import Card from '../../../components/Card';
import DebugLoader from '../../../components/DebugLoader';

const games = [
  { name: 'Mobile Legends', logo: 'https://i.imgur.com/4Q1q4bJ.png', color: 'blue' },
  { name: 'Free Fire', logo: 'https://i.imgur.com/J352a2O.png', color: 'orange' },
  { name: 'PUBG Mobile', logo: 'https://i.imgur.com/A28p4E2.png', color: 'yellow' },
  { name: 'Genshin Impact', logo: 'https://i.imgur.com/uF1l22D.png', color: 'sky' },
];

const GameSelectionInput = ({ 
  selectedGame, onSelectGame, userId, error, onInputChange, 
  onCheck, isChecking, ign 
}) => {
  return (
    <div className="sticky top-[60px] z-10 bg-slate-100 pt-1 pb-4 -mx-4 px-4">
      <Card>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Voucher Game</h2>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {games.map(game => (
              <button
                key={game.name}
                onClick={() => onSelectGame(game)}
                className={`flex-shrink-0 p-2 border-2 rounded-lg transition-all ${selectedGame.name === game.name ? 'border-blue-500 shadow-md' : 'border-transparent'}`}
              >
                <img src={game.logo} alt={game.name} className="h-10 object-contain" />
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={selectedGame.logo} alt={selectedGame.name} className="h-6 w-6 rounded-full" />
              </div>
              <input
                type="text"
                value={userId}
                onChange={onInputChange}
                className={`block w-full text-lg font-semibold pl-12 pr-4 py-3 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="User ID"
              />
            </div>
            <button 
              onClick={onCheck}
              disabled={!!error || !userId || isChecking}
              className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-gray-400"
              style={{ height: '52px' }}
            >
              {isChecking ? <DebugLoader /> : 'Periksa'}
            </button>
          </div>
          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          {ign && (
            <div className="bg-green-100 p-3 rounded-lg text-center animate-fade-in-fast">
              <p className="text-sm text-green-700">In-Game Name (IGN)</p>
              <p className="font-bold text-green-800">{ign}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default GameSelectionInput;