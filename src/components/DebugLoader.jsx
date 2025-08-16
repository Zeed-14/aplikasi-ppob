import React, { useState, useEffect } from 'react';

// Daftar pesan yang akan ditampilkan secara bergantian
const debugMessages = [
  'Connecting to server...',
  'Validating data...',
  'Encrypting connection...',
  'Sending request...',
  'Awaiting confirmation...',
  'Processing payment...',
  'Finalizing...',
];

const DebugLoader = () => {
  const [message, setMessage] = useState(debugMessages[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % debugMessages.length;
      setMessage(debugMessages[index]);
    }, 450);

    // Fungsi cleanup untuk membersihkan interval
    return () => clearInterval(interval);
  }, []); // Array dependensi kosong agar efek hanya berjalan sekali saat komponen dimuat

  return (
    <div className="flex items-center justify-center space-x-2 text-sm font-mono text-white">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <span>{message}</span>
    </div>
  );
};

export default DebugLoader;