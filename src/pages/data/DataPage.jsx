import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { detectProvider } from '../../utils/providers';
import AlertModal from '../../components/AlertModal';
import PackageDetailModal from '../../components/PackageDetailModal';

// Impor komponen-komponen yang sudah dipecah
import PhoneNumberInput from './components/PhoneNumberInput';
import PackageFilter from './components/PackageFilter';
import PackageGrid from './components/PackageGrid';
import DataActions from './components/DataActions';

// Data produk
const dataPackages = [
  { name: '1 GB', validity: '3 Hari', price: '12.000', category: 'Harian', details: ['Kuota Utama: 1 GB', 'Berlaku 24 Jam'] },
  { name: '5 GB', validity: '7 Hari', price: '35.000', category: 'Mingguan', details: ['Kuota Utama: 4 GB', 'Bonus TikTok: 1 GB'] },
  { name: '10 GB', validity: '30 Hari', price: '50.000', category: 'Bulanan', details: ['Kuota Utama: 8 GB', 'Bonus Kuota Malam: 2 GB', 'Akses YouTube'] },
  { name: '25 GB', validity: '30 Hari', price: '100.000', category: 'Bulanan', details: ['Kuota Utama: 20 GB', 'Bonus Streaming: 5 GB', 'Akses VIU'] },
];

const DataPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [viewingPackage, setViewingPackage] = useState(null);

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
      navigate('/konfirmasi', { state: { productType: 'data', phoneNumber, product: selectedPackage, provider } });
    }
  };

  const handleContactClick = () => {
    alert('Fitur kontak akan segera hadir!');
  };

  const filteredPackages = dataPackages.filter(pkg => activeFilter === 'Semua' || pkg.category === activeFilter);

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
        
        <PackageFilter
          activeFilter={activeFilter}
          onSelect={setActiveFilter}
        />
        
        <PackageGrid
          packages={filteredPackages}
          selectedPackage={selectedPackage}
          onSelectPackage={setSelectedPackage}
          onViewDetails={setViewingPackage}
          provider={provider}
        />
        
        <DataActions
          onBack={() => navigate(-1)}
          onContinue={handleContinue}
          isDisabled={!!error || !phoneNumber || !selectedPackage}
        />
      </div>

      <AlertModal 
        isOpen={isAlertOpen} 
        onClose={() => setIsAlertOpen(false)} 
        title="Provider Tidak Dikenali" 
        message="Nomor yang Anda masukkan sepertinya tidak terdaftar." 
      />
      <PackageDetailModal 
        isOpen={!!viewingPackage} 
        onClose={() => setViewingPackage(null)} 
        packageData={viewingPackage} 
      />
    </>
  );
};

export default DataPage;