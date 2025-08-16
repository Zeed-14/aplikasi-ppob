import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EwalletInput from './components/EwalletInput';
import TopUpGrid from './components/TopUpGrid';
import EwalletActions from './components/EwalletActions';

const ewallets = [
  { name: 'GoPay', logo: '/assets/logos/gopay.png', color: 'blue', textColor: 'text-white' },
  { name: 'OVO', logo: '/assets/logos/ovo.png', color: 'purple', textColor: 'text-white' },
  { name: 'DANA', logo: '/assets/logos/dana.png', color: 'sky', textColor: 'text-white' },
  { name: 'ShopeePay', logo: '/assets/logos/shopeepay.png', color: 'orange', textColor: 'text-white' },
  { name: 'LinkAja', logo: '/assets/logos/linkaja.png', color: 'red', textColor: 'text-white' },
];

const EwalletPage = () => {
  const navigate = useNavigate();
  const [selectedEwallet, setSelectedEwallet] = useState(ewallets[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [customerName, setCustomerName] = useState(null);

  const validatePhoneNumber = (number) => {
    if (!number) return '';
    if (!number.startsWith('08')) return 'Nomor harus diawali dengan "08".';
    if (number.length < 10 || number.length > 13) return 'Panjang nomor harus 10-13 digit.';
    if (!/^\d+$/.test(number)) return 'Input hanya boleh berisi angka.';
    return '';
  };

  const handleInputChange = (event) => {
    const newNumber = event.target.value;
    setPhoneNumber(newNumber);
    setError(validatePhoneNumber(newNumber));
    setCustomerName(null); // Reset nama jika nomor diubah
  };

  const handleCheckCustomer = () => {
    setIsChecking(true);
    setCustomerName(null);
    // Simulasi API
    setTimeout(() => {
      setCustomerName('Ahmad Dhani'); // Nama dummy
      setIsChecking(false);
    }, 1500);
  };

  const handleContinue = () => {
    navigate('/konfirmasi', { 
      state: { 
        productType: 'ewallet', 
        phoneNumber, 
        nominal: selectedNominal,
        ewallet: selectedEwallet,
        customerName,
      } 
    });
  };

  return (
    <div className="animate-fade-in pb-28">
      <EwalletInput
        selectedEwallet={selectedEwallet}
        onSelectEwallet={(wallet) => {
          setSelectedEwallet(wallet);
          setCustomerName(null); // Reset saat ganti e-wallet
        }}
        phoneNumber={phoneNumber}
        error={error}
        onInputChange={handleInputChange}
        onCheck={handleCheckCustomer}
        isChecking={isChecking}
        customerName={customerName}
      />
      
      {customerName && (
        <TopUpGrid
          selectedNominal={selectedNominal}
          onSelectNominal={setSelectedNominal}
          selectedEwallet={selectedEwallet}
        />
      )}
      
      <EwalletActions
        onBack={() => navigate(-1)}
        onContinue={handleContinue}
        isDisabled={!customerName || !selectedNominal}
        selectedEwallet={selectedEwallet}
      />
    </div>
  );
};

export default EwalletPage;