import React from 'react';
import Card from '../../../components/Card';

const topUpNominals = ['10.000', '20.000', '50.000', '100.000', '250.000', '500.000'];

const colorMap = {
  blue: { button: 'bg-blue-600' },
  purple: { button: 'bg-purple-600' },
  sky: { button: 'bg-sky-500' },
  orange: { button: 'bg-orange-500' },
  red: { button: 'bg-red-600' },
};

const TopUpGrid = ({ selectedNominal, onSelectNominal, selectedEwallet }) => {
  const selectedColorClasses = colorMap[selectedEwallet.color];

  return (
    <div className="space-y-6 mt-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Nominal Top Up</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {topUpNominals.map(nominal => (
            <button 
              key={nominal}
              onClick={() => onSelectNominal(nominal)}
              className={`p-4 border rounded-lg text-center font-semibold transition-colors ${selectedNominal === nominal ? `${selectedColorClasses.button} ${selectedEwallet.textColor}` : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              Rp{nominal}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TopUpGrid;