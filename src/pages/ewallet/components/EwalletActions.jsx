import React from 'react';

const colorMap = {
  blue: { button: 'bg-blue-600' },
  purple: { button: 'bg-purple-600' },
  sky: { button: 'bg-sky-500' },
  orange: { button: 'bg-orange-500' },
  red: { button: 'bg-red-600' },
};

const EwalletActions = ({ onBack, onContinue, isDisabled, selectedEwallet }) => {
  const selectedColorClasses = colorMap[selectedEwallet.color];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t flex items-center space-x-4">
      <button 
        onClick={onBack}
        className="w-1/3 bg-gray-200 font-bold py-3 rounded-lg"
      >
        Kembali
      </button>
      <button 
        onClick={onContinue}
        className={`w-2/3 ${selectedColorClasses.button} ${selectedEwallet.textColor} font-bold py-3 rounded-lg disabled:bg-gray-400`}
        disabled={isDisabled}
      >
        Lanjutkan
      </button>
    </div>
  );
};

export default EwalletActions;