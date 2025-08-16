import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import SegmentedControl from '../../components/SegmentedControl';
import DebugLoader from '../../components/DebugLoader';

const PlnPage = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState('prabayar'); 
  const [customerId, setCustomerId] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [selectedNominal, setSelectedNominal] = useState(null);

  const plnNominals = [
    { price: '20.000' }, { price: '50.000' }, { price: '100.000' },
    { price: '200.000' }, { price: '500.000' }, { price: '1.000.000' },
  ];

  const paymentOptions = [
    { label: 'Prabayar (Token)', value: 'prabayar' },
    { label: 'Pascabayar (Tagihan)', value: 'pascabayar' },
  ];

  const validateCustomerId = (id) => {
    if (!id) return '';
    if (id.length < 11 || id.length > 12) return 'Nomor Meter / ID Pelanggan harus 11-12 digit.';
    if (!/^\d+$/.test(id)) return 'Input hanya boleh berisi angka.';
    return '';
  };

  const handleInputChange = (event) => {
    const newId = event.target.value;
    setCustomerId(newId);
    setError(validateCustomerId(newId));
    setCustomerDetails(null);
    setSelectedNominal(null);
  };

  const handleCheckCustomer = () => {
    setIsLoading(true);
    setCustomerDetails(null);
    // Simulasi API dengan data yang lebih kaya
    setTimeout(() => {
      let details = { 
        name: 'Budi Santoso', 
        customerId,
        tariffDaya: 'R1/900VA',
      };

      if (paymentType === 'pascabayar') {
        const standAwal = Math.floor(Math.random() * 10000);
        const pemakaian = Math.floor(Math.random() * 200) + 50;
        details.period = 'AGU 2025';
        details.standMeter = `${standAwal} - ${standAwal + pemakaian}`;
        details.totalUsageKwh = `${pemakaian} kWh`;
        details.amount = Math.floor(pemakaian * 1444.7);
        details.adminFee = 2500;
        details.totalPayment = details.amount + details.adminFee;
      }
      setCustomerDetails(details);
      setIsLoading(false);
    }, 1500);
  };

  const handleContinue = () => {
    if (paymentType === 'prabayar') {
      navigate('/konfirmasi', { 
        state: { 
          productType: 'pln_prabayar', 
          customerId, 
          nominal: selectedNominal.price,
          customerDetails: customerDetails,
        } 
      });
    } else { // Pascabayar
      navigate('/konfirmasi', { 
        state: { 
          productType: 'pln_pascabayar', 
          customerId, 
          bill: customerDetails 
        } 
      });
    }
  };

  return (
    <div className="animate-fade-in pb-28">
      <div className="sticky top-[60px] z-10 bg-slate-100 pt-1 pb-4 -mx-4 px-4">
        <Card>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Listrik PLN</h2>
            <SegmentedControl 
              options={paymentOptions}
              selected={paymentType}
              onSelect={(type) => {
                setPaymentType(type);
                setCustomerDetails(null);
              }}
            />
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-xl">💡</span>
                </div>
                <input
                  type="tel"
                  value={customerId}
                  onChange={handleInputChange}
                  className={`block w-full text-lg font-semibold pl-12 pr-4 py-3 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Nomor Meter / ID Pelanggan"
                />
              </div>
              <button 
                onClick={handleCheckCustomer}
                disabled={!!error || !customerId || isLoading}
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-gray-400"
                style={{ height: '52px' }}
              >
                {isLoading ? <DebugLoader /> : 'Cek'}
              </button>
            </div>
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </div>
        </Card>
      </div>

      {customerDetails && (
        <div className="space-y-6 mt-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Detail Pelanggan</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Nama</span><span className="font-semibold">{customerDetails.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">ID Pelanggan</span><span className="font-semibold font-mono">{customerDetails.customerId}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Tarif/Daya</span><span className="font-semibold">{customerDetails.tariffDaya}</span></div>
            </div>
            
            {paymentType === 'pascabayar' && (
              <div className="mt-4 pt-4 border-t space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Periode Tagihan</span><span className="font-semibold">{customerDetails.period}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Stand Meter</span><span className="font-semibold font-mono">{customerDetails.standMeter}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Total Pemakaian</span><span className="font-semibold">{customerDetails.totalUsageKwh}</span></div>
                <div className="flex justify-between text-base font-bold pt-3 border-t mt-3"><span>Total Pembayaran</span><span>Rp{customerDetails.totalPayment.toLocaleString('id-ID')}</span></div>
              </div>
            )}
          </Card>

          {paymentType === 'prabayar' && (
            <Card>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Nominal Token</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {plnNominals.map(nominal => (
                  <button 
                    key={nominal.price}
                    onClick={() => setSelectedNominal(nominal)}
                    className={`p-4 border rounded-lg text-center font-semibold ${selectedNominal?.price === nominal.price ? 'bg-blue-600 text-white' : 'bg-gray-50 hover:bg-blue-100'}`}
                  >
                    Rp{nominal.price}
                  </button>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-t-lg flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="w-1/3 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300">
          Kembali
        </button>
        <button 
          onClick={handleContinue}
          className="w-2/3 bg-green-500 text-white font-bold py-3 rounded-lg disabled:bg-gray-400"
          disabled={!customerDetails || (paymentType === 'prabayar' && !selectedNominal)}
        >
          {paymentType === 'prabayar' ? 'Lanjutkan' : 'Bayar Sekarang'}
        </button>
      </div>
    </div>
  );
};

export default PlnPage;