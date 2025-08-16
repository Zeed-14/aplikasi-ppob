import React from 'react';
import Card from '../../../components/Card';

const colorMap = {
  red: 'bg-gradient-to-br from-red-500 to-red-700 text-white',
  yellow: 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-black',
  blue: 'bg-gradient-to-br from-blue-500 to-blue-700 text-white',
  purple: 'bg-gradient-to-br from-purple-500 to-purple-700 text-white',
  gray: 'bg-gradient-to-br from-gray-600 to-gray-800 text-white',
};

const PhoneNumberInput = ({ phoneNumber, provider, error, onInputChange, onContactClick }) => {
  return (
    <div className="sticky top-[60px] z-10 bg-slate-100 pt-1 pb-4 -mx-4 px-4">
      <Card className={`transition-all duration-300 ${provider ? colorMap[provider.color] : ''}`}>
        <div className="space-y-6">
          <div>
            <h2 className={`text-lg font-semibold ${provider ? 'text-white' : 'text-gray-800'}`}>Beli Paket Data</h2>
            <p className={`text-sm ${provider ? 'text-white/80' : 'text-gray-500'}`}>Masukkan nomor dan pilih paket data.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {provider ? <img src={provider.logo} alt={provider.name} className="h-6 w-auto" /> : <span className="text-gray-400 text-xl">🌐</span>}
            </div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={onInputChange}
              className={`block w-full text-lg font-semibold pl-12 pr-12 py-3 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="08123456789"
            />
            <button onClick={onContactClick} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
      </Card>
    </div>
  );
};

export default PhoneNumberInput;