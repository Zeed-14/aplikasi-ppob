import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import DebugLoader from '../../components/DebugLoader';

const BpjsPage = () => {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // State untuk menyimpan detail tagihan setelah "dicek"
  const [billDetails, setBillDetails] = useState(null);

  const validateCustomerId = (id) => {
    if (!id) return '';
    if (id.length !== 13) return 'Nomor Peserta BPJS harus 13 digit.';
    if (!/^\d+$/.test(id)) return 'Input hanya boleh berisi angka.';
    return '';
  };

  const handleInputChange = (event) => {
    const newId = event.target.value;
    setCustomerId(newId);
    setError(validateCustomerId(newId));
    setBillDetails(null); // Reset detail tagihan jika nomor diubah
  };

  const handleCheckBill = () => {
    setIsLoading(true);
    // Simulasi pemanggilan API untuk cek tagihan
    setTimeout(() => {
      const dummyBill = {
        name: 'Siti Aminah',
        participantCount: 3,
        premiumPerParticipant: 35000,
        months: 1, // Asumsi bayar 1 bulan
        adminFee: 3000,
      };
      dummyBill.totalPremium = dummyBill.premiumPerParticipant * dummyBill.participantCount * dummyBill.months;
      dummyBill.totalPayment = dummyBill.totalPremium + dummyBill.adminFee;
      
      setBillDetails(dummyBill);
      setIsLoading(false);
    }, 1500);
  };

  const handlePay = () => {
    // Langsung navigasi ke halaman status karena konfirmasi sudah terjadi di sini
    navigate('/status', {
      replace: true,
      state: {
        status: 'success',
        message: 'Pembayaran Berhasil!',
        details: {
          transactionId: `TRX${Date.now()}`,
          identifierLabel: 'Nomor Peserta',
          identifierValue: customerId,
          productName: `Tagihan BPJS (${billDetails.months} Bulan)`,
          customerName: billDetails.name,
          price: billDetails.totalPremium,
          adminFee: billDetails.adminFee,
          totalPrice: billDetails.totalPayment,
        }
      }
    });
  };

  return (
    <div className="animate-fade-in pb-28">
      <div className="sticky top-[60px] z-10 bg-slate-100 pt-1 pb-4 -mx-4 px-4">
        <Card>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">BPJS Kesehatan</h2>
            <p className="text-sm text-gray-500">Masukkan Nomor Peserta untuk melihat tagihan.</p>
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-xl">🏥</span>
                </div>
                <input
                  type="tel"
                  value={customerId}
                  onChange={handleInputChange}
                  className={`block w-full text-lg font-semibold pl-12 pr-4 py-3 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="0001234567890"
                />
              </div>
              <button 
                onClick={handleCheckBill}
                disabled={!!error || !customerId || isLoading}
                className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-gray-400 flex items-center justify-center"
                style={{ height: '52px', minWidth: '120px' }}
              >
                {isLoading ? <DebugLoader /> : 'Cek Tagihan'}
              </button>
            </div>
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </div>
        </Card>
      </div>

      {/* Tampilkan detail tagihan setelah berhasil dicek */}
      {billDetails && (
        <div className="space-y-6 mt-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Detail Tagihan</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Nama Pelanggan</span><span className="font-semibold">{billDetails.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Jumlah Peserta</span><span className="font-semibold">{billDetails.participantCount} Orang</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Periode</span><span className="font-semibold">{billDetails.months} Bulan</span></div>
              <div className="flex justify-between pt-3 border-t mt-3"><span className="text-gray-500">Total Iuran</span><span className="font-semibold">Rp{billDetails.totalPremium.toLocaleString('id-ID')}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Biaya Admin</span><span className="font-semibold">Rp{billDetails.adminFee.toLocaleString('id-ID')}</span></div>
              <div className="flex justify-between text-base font-bold pt-3 border-t mt-3"><span>Total Pembayaran</span><span>Rp{billDetails.totalPayment.toLocaleString('id-ID')}</span></div>
            </div>
          </Card>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t flex items-center space-x-4">
        <button onClick={() => navigate(-1)} className="w-1/3 bg-gray-200 font-bold py-3 rounded-lg">
          Kembali
        </button>
        <button 
          onClick={handlePay}
          className="w-2/3 bg-green-500 text-white font-bold py-3 rounded-lg disabled:bg-gray-400"
          // Tombol Bayar hanya aktif jika detail tagihan sudah muncul
          disabled={!billDetails}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default BpjsPage;