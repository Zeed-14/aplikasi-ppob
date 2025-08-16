import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';

// Impor komponen-komponen baru
import StatusHeader from './components/StatusHeader';
import TransactionReceipt from './components/TransactionReceipt';
import StatusActions from './components/StatusActions';

const StatusPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil data dari state navigasi, sediakan nilai default
  const { status = 'failed', message = 'Transaksi Gagal', details = {} } = location.state || {};

  // Pengaman jika halaman diakses tanpa state
  if (!location.state) {
    React.useEffect(() => { navigate('/'); }, [navigate]);
    return null;
  }

  return (
    <div className="max-w-md mx-auto text-center animate-fade-in">
      <Card>
        <div className="p-4 sm:p-6">
          <StatusHeader status={status} message={message} />
          <TransactionReceipt details={details} />
          <StatusActions />
        </div>
      </Card>
    </div>
  );
};

export default StatusPage;