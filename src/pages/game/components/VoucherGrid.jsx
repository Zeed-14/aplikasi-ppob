import React from 'react';
import Card from '../../../components/Card';

const voucherNominals = [
  { amount: '50 Diamonds', price: '15.000' }, { amount: '100 Diamonds', price: '30.000' },
  { amount: '250 Diamonds', price: '75.000' }, { amount: '500 Diamonds', price: '150.000' },
  { amount: '1000 Diamonds', price: '300.000' }, { amount: '2000 Diamonds', price: '600.000' },
];

const colorMap = {
  blue: { button: 'bg-blue-600', text: 'text-white' },
  orange: { button: 'bg-orange-500', text: 'text-white' },
  yellow: { button: 'bg-yellow-400', text: 'text-black' },
  sky: { button: 'bg-sky-500', text: 'text-white' },
};

const VoucherGrid = ({ selectedVoucher, onSelectVoucher, selectedGame }) => {
  const selectedColorClasses = colorMap[selectedGame.color];
  return (
    <div className="space-y-6 mt-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Voucher</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {voucherNominals.map(voucher => (
            <button 
              key={voucher.amount}
              onClick={() => onSelectVoucher(voucher)}
              className={`p-4 border rounded-lg text-center transition-colors ${selectedVoucher?.amount === voucher.amount ? `${selectedColorClasses.button} ${selectedColorClasses.text}` : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <p className="font-bold">{voucher.amount}</p>
              <p className="text-sm mt-1">Rp{voucher.price}</p>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VoucherGrid;