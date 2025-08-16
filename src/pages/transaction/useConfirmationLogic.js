import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useConfirmationLogic = (locationState) => {
  const navigate = useNavigate();

  const details = useMemo(() => {
    const { productType, phoneNumber, customerId, nominal, product, provider, bill, ewallet, game, userId, voucher, ign, customerDetails } = locationState || {};
    
    let processedDetails = {};
    switch (productType) {
      case 'game':
        processedDetails = { identifierLabel: 'User ID', identifierValue: `${userId} (${ign})`, productName: `${voucher.amount} ${game.name}`, price: parseInt(voucher.price.replace(/\./g, ''), 10), adminFee: 2000, providerLogo: game.logo };
        break;
      case 'ewallet':
        processedDetails = { identifierLabel: 'Nomor Tujuan', identifierValue: phoneNumber, customerName: customerDetails?.name || null, productName: `Top Up ${ewallet.name} Rp${nominal}`, price: parseInt(nominal.replace(/\./g, ''), 10), adminFee: 1500, providerLogo: ewallet.logo };
        break;
      case 'bpjs':
        processedDetails = { identifierLabel: 'Nomor Peserta', identifierValue: customerId, productName: `Tagihan BPJS (${bill.months} Bulan)`, price: bill.totalAmount, adminFee: 3000, customerName: bill.name, extraDetails: { 'Jumlah Peserta': bill.participantCount, 'Iuran per Bulan': `Rp${(bill.premium * bill.participantCount).toLocaleString('id-ID')}` } };
        break;
      case 'pln_pascabayar':
        processedDetails = { identifierLabel: 'ID Pelanggan', identifierValue: customerId, productName: `Tagihan PLN (${bill.period})`, price: bill.amount, adminFee: 2500, customerName: bill.name };
        break;
      case 'pln_prabayar':
        processedDetails = { identifierLabel: 'ID Pelanggan', identifierValue: customerId, productName: `Token Listrik Rp${nominal}`, price: parseInt(nominal.replace(/\./g, ''), 10), adminFee: 2500, customerName: customerDetails?.name || null };
        break;
      case 'data':
        processedDetails = { identifierLabel: 'Nomor Tujuan', identifierValue: phoneNumber, productName: `Paket Data ${product.name}`, price: parseInt(product.price.replace(/\./g, ''), 10), adminFee: 1500 };
        break;
      default: // 'pulsa'
        processedDetails = { identifierLabel: 'Nomor Tujuan', identifierValue: phoneNumber, productName: `Pulsa Rp${nominal}`, price: parseInt(nominal.replace(/\./g, ''), 10), adminFee: 1500 };
    }
    
    if (processedDetails.price) {
      processedDetails.totalPrice = processedDetails.price + processedDetails.adminFee;
    }
    
    return processedDetails;

  }, [locationState]);

  // Pengaman jika halaman diakses tanpa data yang valid
  React.useEffect(() => {
    if (!details.identifierValue) {
      navigate('/');
    }
  }, [details, navigate]);

  return details;
};