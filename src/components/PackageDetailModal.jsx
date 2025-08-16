import React from 'react';
import Card from './Card';

const PackageDetailModal = ({ isOpen, onClose, packageData }) => {
  if (!isOpen || !packageData) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in-fast">
      <Card className="w-full max-w-md relative">
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-2">
          <h2 className="text-xl font-bold text-blue-600">{packageData.name}</h2>
          <p className="text-sm text-gray-500 mb-4">Masa Aktif: {packageData.validity}</p>
          
          <h3 className="font-semibold text-gray-800 mb-2">Rincian Kuota:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {packageData.details.map((detail, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Harga</span>
              <span className="text-2xl font-bold text-gray-800">Rp{packageData.price}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PackageDetailModal;