import React from 'react';

const RecentTransactions = ({ transactions, colorMap, IconRenderer }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3 px-1">Transaksi Terakhir</h2>
      <div className="flex items-center space-x-3 overflow-x-auto pb-4 -mx-4 px-4">
        {transactions.map((trx, index) => (
          <button key={index} className="flex-shrink-0 w-44 bg-white p-4 rounded-xl shadow-sm text-left hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[trx.menu.color].bg}`}>
              <IconRenderer menu={trx.menu} sizeClass="w-7 h-7" />
            </div>
            <p className="mt-3 font-semibold text-sm text-gray-800 capitalize">{trx.type}</p>
            <p className="text-xs text-gray-500 font-mono">{trx.target}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;