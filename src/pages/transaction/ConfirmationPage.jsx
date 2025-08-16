import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Impor hook dan komponen baru
import { useConfirmationLogic } from './useConfirmationLogic';
import ConfirmationDetails from './components/ConfirmationDetails';
import PriceSummary from './components/PriceSummary';
import ConfirmationActions from './components/ConfirmationActions';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Panggil hook untuk mendapatkan semua detail yang sudah diproses
  const details = useConfirmationLogic(location.state);
  const { provider } = location.state || {};

  // Pengaman jika detail belum siap
  if (!details.identifierValue) {
    return null; // Hook akan menangani redirect
  }

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      const transactionDetails = { ...details, transactionId: `TRX${Date.now()}` };
      navigate('/status', {
        replace: true,
        state: { status: isSuccess ? 'success' : 'failed', message: isSuccess ? 'Pembayaran Berhasil!' : 'Pembayaran Gagal', details: transactionDetails },
      });
    }, 3500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-center text-gray-800">Konfirmasi Pesanan</h1>
      
      <ConfirmationDetails details={details} provider={provider} />
      <PriceSummary details={details} />
      <ConfirmationActions 
        onBack={() => navigate(-1)}
        onPay={handlePayment}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ConfirmationPage;