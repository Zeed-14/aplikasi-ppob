import React from 'react';
import { Link } from 'react-router-dom';

const StatusActions = () => {
  return (
    <div className="mt-8">
      <Link 
        to="/"
        className="w-full inline-block bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default StatusActions;
