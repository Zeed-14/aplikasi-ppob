import React from 'react';
import Card from '../../../components/Card';

// Peta warna untuk tombol yang dipilih
const selectionColorMap = {
  red: 'bg-red-600 text-white ring-red-400',
  yellow: 'bg-yellow-400 text-black ring-yellow-500',
  blue: 'bg-blue-600 text-white ring-blue-400',
  purple: 'bg-purple-600 text-white ring-purple-400',
  gray: 'bg-gray-700 text-white ring-gray-500',
};
const defaultSelectionColor = 'bg-blue-600 text-white ring-blue-400';

const PackageGrid = ({ packages, selectedPackage, onSelectPackage, onViewDetails, provider }) => {
  // Tentukan warna pilihan
  const selectionColor = provider ? selectionColorMap[provider.color] : defaultSelectionColor;

  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Paket</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {packages.map(pkg => {
          const isSelected = selectedPackage?.name === pkg.name;
          return (
            <div key={pkg.name} className="relative">
              <button 
                onClick={() => onSelectPackage(pkg)}
                className={`w-full h-full p-4 border rounded-lg text-left transition-all ${isSelected ? `${selectionColor} ring-2` : 'bg-gray-50 hover:bg-blue-100'}`}
              >
                <p className="font-bold text-lg">{pkg.name}</p>
                <p className="text-sm">{pkg.validity}</p>
                <p className="font-semibold mt-2">Rp{pkg.price}</p>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onViewDetails(pkg); }}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
            </div>
          );
        })}
      </div>
      {packages.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Tidak ada paket data yang cocok.</p>
        </div>
      )}
    </Card>
  );
};

export default PackageGrid;