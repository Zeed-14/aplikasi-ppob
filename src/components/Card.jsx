import React from 'react';

/**
 * Komponen Card yang dapat digunakan kembali.
 * @param {object} props
 * @param {React.ReactNode} props.children - Konten yang akan ditampilkan di dalam card.
 * @param {string} [props.className] - Class CSS tambahan untuk kustomisasi.
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;