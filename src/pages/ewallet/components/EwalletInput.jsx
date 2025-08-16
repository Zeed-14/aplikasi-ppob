import React from 'react';
import Card from '../../../components/Card';
import DebugLoader from '../../../components/DebugLoader';

const ewallets = [
  { name: 'GoPay', logo: '/assets/logos/gopay.png', color: 'blue', textColor: 'text-white' },
  { name: 'OVO', logo: '/assets/logos/ovo.png', color: 'purple', textColor: 'text-white' },
  { name: 'DANA', logo: '/assets/logos/dana.png', color: 'sky', textColor: 'text-white' },
  { name: 'ShopeePay', logo: '/assets/logos/shopeepay.png', color: 'orange', textColor: 'text-white' },
  { name: 'LinkAja', logo: '/assets/logos/linkaja.png', color: 'red', textColor: 'text-white' },
];

const colorMap = {
  blue: { gradient: 'bg-gradient-to-br from-blue-500 to-blue-700' },
  purple: { gradient: 'bg-gradient-to-br from-purple-500 to-purple-700' },
  sky: { gradient: 'bg-gradient-to-br from-sky-400 to-sky-600' },
  orange: { gradient: 'bg-gradient-to-br from-orange-500 to-orange-600' },
  red: { gradient: 'bg-gradient-to-br from-red-500 to-red-700' },
};

const EwalletInput = ({ 
  selectedEwallet, onSelectEwallet, phoneNumber, error, onInputChange, 
  onCheck, isChecking, customerName 
}) => {
  const selectedColorClasses = colorMap[selectedEwallet.color];

  return (
    <div className="sticky top-[60px] z-10 bg-slate-100 pt-1 pb-4 -mx-4 px-4">
      <Card className={`transition-all duration-300 ${selectedColorClasses.gradient}`}>
        <div className="space-y-4">
          <h2 className={`text-lg font-semibold ${selectedEwallet.textColor}`}>Top Up E-Wallet</h2>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {ewallets.map(wallet => (
              <button
                key={wallet.name}
                onClick={() => onSelectEwallet(wallet)}
                className={`flex-shrink-0 p-2 bg-white/80 border-2 rounded-lg transition-all ${selectedEwallet.name === wallet.name ? 'border-white shadow-md' : 'border-transparent opacity-70'}`}
              >
                <img src={wallet.logo} alt={wallet.name} className="h-8 object-contain" />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={selectedEwallet.logo} alt={selectedEwallet.name} className="h-6 w-auto" />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={onInputChange}
                className={`block w-full text-lg font-semibold pl-16 pr-4 py-3 border rounded-lg bg-white text-gray-800 ${error ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Nomor Telepon"
              />
            </div>
            <button 
              onClick={onCheck}
              disabled={!!error || !phoneNumber || isChecking}
              className="px-4 py-3 bg-white/30 text-white font-semibold rounded-lg disabled:opacity-50"
              style={{ height: '52px' }}
            >
              {isChecking ? <DebugLoader /> : 'Periksa'}
            </button>
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

          {/* Tampilkan nama pelanggan setelah verifikasi */}
          {customerName && (
            <div className="bg-white/20 p-3 rounded-lg text-center animate-fade-in-fast">
              <p className="text-sm text-white/80">Nama Pelanggan</p>
              <p className="font-bold text-white">{customerName}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EwalletInput;