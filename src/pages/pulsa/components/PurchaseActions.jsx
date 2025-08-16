import React from 'react';

const PurchaseActions = ({ onBack, onContinue, isDisabled }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-t-lg flex items-center space-x-4">
      <button 
        onClick={onBack}
        className="w-1/3 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300"
      >
        Kembali
      </button>
      <button 
        onClick={onContinue}
        className="w-2/3 bg-blue-600 text-white font-bold py-3 rounded-lg disabled:bg-gray-400"
        disabled={isDisabled}
      >
        Lanjutkan
      </button>
    </div>
  );
};

export default PurchaseActions;