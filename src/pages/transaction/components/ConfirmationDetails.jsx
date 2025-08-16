import React from 'react';
import Card from '../../../components/Card';

const ConfirmationDetails = ({ details, provider }) => {
  return (
    <Card>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Detail Pembelian</h2>
        {details.customerName && (
          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-500">Nama Pelanggan</span>
            <span className="font-semibold text-gray-800">{details.customerName}</span>
          </div>
        )}
        <div className="flex justify-between items-center py-3 border-b">
          <span className="text-gray-500">{details.identifierLabel}</span>
          <div className="flex items-center space-x-2">
            {(provider || details.providerLogo) && <img src={details.providerLogo || provider.logo} alt="Provider Logo" className="h-5 w-auto" />}
            <span className="font-semibold text-gray-800">{details.identifierValue}</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-3 border-b">
          <span className="text-gray-500">Produk</span>
          <span className="font-semibold text-gray-800">{details.productName}</span>
        </div>
        {details.extraDetails && Object.entries(details.extraDetails).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-500">{key}</span>
            <span className="font-semibold text-gray-700">{value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ConfirmationDetails;