import React from 'react';
import Card from '../../../components/Card';

const nominals = ['10.000', '20.000', '25.000', '50.000', '75.000', '100.000'];

// Peta warna untuk tombol yang dipilih
const selectionColorMap = {
  red: 'bg-red-600 text-white border-red-700',
  yellow: 'bg-yellow-400 text-black border-yellow-500', // Teks hitam agar kontras
  blue: 'bg-blue-600 text-white border-blue-700',
  purple: 'bg-purple-600 text-white border-purple-700',
  gray: 'bg-gray-700 text-white border-gray-800',
};
const defaultSelectionColor = 'bg-blue-600 text-white';

const NominalGrid = ({ selectedNominal, onSelect, provider }) => {
  // Tentukan warna pilihan: warna provider jika ada, jika tidak, warna biru default
  const selectionColor = provider ? selectionColorMap[provider.color] : defaultSelectionColor;

  return (
    <div className="space-y-6 mt-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Nominal</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {nominals.map(nominal => {
            const isSelected = selectedNominal === nominal;
            return (
              <button 
                key={nominal}
                onClick={() => onSelect(nominal)}
                className={`
                  p-4 border rounded-lg text-center font-semibold transition-colors duration-200
                  ${isSelected ? selectionColor : 'bg-gray-50 hover:bg-blue-100'}
                `}
              >
                Rp{nominal}
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default NominalGrid;