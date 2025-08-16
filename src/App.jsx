import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import PurchasePage from './pages/PurchasePage';
import Header from './components/Header'; // 1. Impor komponen Header

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    if (currentPage === 'purchase') {
      return <PurchasePage onBack={() => setCurrentPage('home')} />;
    }
    return <HomePage onMenuClick={() => setCurrentPage('purchase')} />;
  };

  return (
    // Ganti bg-gray-100 dengan warna yang lebih modern seperti bg-slate-100
    <div className="font-sans bg-slate-100 min-h-screen">
      {/* 2. Ganti header lama dengan komponen Header baru */}
      <Header />

      {/* Konten utama sekarang tidak perlu padding atas karena header sudah sticky */}
      <main className="container mx-auto p-4">
        {renderContent()}
      </main>
      
      {/* Footer bisa kita hapus untuk tampilan yang lebih bersih di mobile */}
    </div>
  );
}

export default App;