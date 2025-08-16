import React from 'react';
import Card from '../../../components/Card';

const PriceSummary = ({ details }) => {
  return (
    <>
      <Card>
        <div className="space-y-2 pt-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Harga</span>
            <span>Rp{details.price.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Biaya Admin</span>
            <span>Rp{details.adminFee.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </Card>
      <Card className="bg-slate-50">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">Total Bayar</span>
          <span className="text-xl font-bold text-blue-600">
            Rp{details.totalPrice.toLocaleString('id-ID')}
          </span>
        </div>
      </Card>
    </>
  );
};

export default PriceSummary;