import React from 'react';

const TransactionReceipt = ({ details }) => {
  return (
    <div className="mt-8 text-left text-sm space-y-4">
      {/* Bagian Info Umum */}
      <div className="border-b pb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-500">ID Transaksi</span>
          <span className="font-mono text-gray-700">{details.transactionId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tanggal</span>
          <span className="font-semibold text-gray-700">{new Date().toLocaleString('id-ID')}</span>
        </div>
      </div>
      
      {/* Bagian Info Pelanggan & Produk */}
      <div className="border-b pb-4">
         {details.customerName && (
           <div className="flex justify-between mb-2">
             <span className="text-gray-500">Nama Pelanggan</span>
             <span className="font-semibold text-gray-700">{details.customerName}</span>
           </div>
         )}
         <div className="flex justify-between mb-2">
          <span className="text-gray-500">{details.identifierLabel}</span>
          <span className="font-semibold text-gray-700">{details.identifierValue}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Produk</span>
          <span className="font-semibold text-gray-700">{details.productName}</span>
        </div>
        {details.extraDetails && Object.entries(details.extraDetails).map(([key, value]) => (
          <div key={key} className="flex justify-between mt-2">
            <span className="text-gray-500">{key}</span>
            <span className="font-semibold text-gray-700">{value}</span>
          </div>
        ))}
      </div>

      {/* Bagian Rincian Pembayaran */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-500">Harga</span>
          <span>Rp{details.price?.toLocaleString('id-ID') || '0'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Biaya Admin</span>
          <span>Rp{details.adminFee?.toLocaleString('id-ID') || '0'}</span>
        </div>
        <div className="flex justify-between font-bold text-base text-gray-800 pt-2 border-t mt-2">
          <span>Total Pembayaran</span>
          <span>Rp{details.totalPrice?.toLocaleString('id-ID') || '0'}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionReceipt;
