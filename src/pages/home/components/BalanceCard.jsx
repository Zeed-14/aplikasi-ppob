import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Selamat Pagi';
  if (hour < 15) return 'Selamat Siang';
  if (hour < 18) return 'Selamat Sore';
  return 'Selamat Malam';
};

const BalanceCard = ({ userName, balance }) => {
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    // Update sapaan setiap menit jika diperlukan (opsional)
    const timer = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">{greeting},</p>
          <p className="text-xl font-bold">{userName}</p>
        </div>
        <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
          Top Up
        </button>
      </div>
      <div className="mt-6">
        <p className="text-sm font-light opacity-80">Saldo Anda</p>
        <p className="text-3xl font-bold tracking-wider">Rp{balance}</p>
      </div>
    </Card>
  );
};

export default BalanceCard;