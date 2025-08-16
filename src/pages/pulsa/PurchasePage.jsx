import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { detectProvider } from '../../utils/providers';
import AlertModal from '../../components/AlertModal';

// Impor komponen-komponen baru
import PhoneNumberInput from './components/PhoneNumberInput';
import NominalGrid from './components/NominalGrid';
import PurchaseActions from './components/PurchaseActions';

const PurchasePage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState('');
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const validatePhoneNumber = (number) => {
    if (!number) return '';
    if (!number.startsWith('08')) return 'Nomor harus diawali dengan "08".';
    if (number.length < 10 || number.length > 13) return 'Panjang nomor harus 10-13 digit.';
    if (!/^\d+$/.test(number)) return 'Nomor hanya boleh berisi angka.';
    return '';
  };

  const handleInputChange = (event) => {
    const newNumber = event.target.value;
    setPhoneNumber(newNumber);
    setProvider(detectProvider(newNumber));
    setError(validatePhoneNumber(newNumber));
  };

  const handleContinue = () => {
    if (!provider && phoneNumber.length >= 10) {
      setIsAlertOpen(true);
    } else {
      navigate('/konfirmasi', { state: { productType: 'pulsa', phoneNumber, nominal: selectedNominal, provider } });
    }
  };

  const handleContactClick = () => {
    alert('Fitur kontak akan segera hadir!');
  };

  return (
    <>
      <div className="animate-fade-in pb-28">
        <PhoneNumberInput
          phoneNumber={phoneNumber}
          provider={provider}
          error={error}
          onInputChange={handleInputChange}
          onContactClick={handleContactClick}
        />
        
        <NominalGrid
          selectedNominal={selectedNominal}
          onSelect={setSelectedNominal}
          provider={provider}
        />
        
        <PurchaseActions
          onBack={() => navigate(-1)}
          onContinue={handleContinue}
          isDisabled={!!error || !phoneNumber || !selectedNominal}
        />
      </div>
      
      <AlertModal
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        title="Provider Tidak Dikenali"
        message="Nomor yang Anda masukkan sepertinya tidak terdaftar. Mohon periksa kembali nomor tujuan Anda."
      />
    </>
  );
};

export default PurchasePage;