import React from 'react';
import DebugLoader from '../../../components/DebugLoader';

const ConfirmationActions = ({ onBack, onPay, isLoading }) => {
  return (
    <div className="flex space-x-4">
      <button onClick={onBack} disabled={isLoading} className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 disabled:opacity-50">
        Batal
      </button>
      <button onClick={onPay} disabled={isLoading} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center disabled:bg-blue-400">
        {isLoading ? <DebugLoader /> : 'Bayar Sekarang'}
      </button>
    </div>
  );
};

export default ConfirmationActions;