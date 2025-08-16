import React from 'react';

const AlertModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in-fast">
      {/* Konten Modal */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
        <div className="p-6 text-center">
          {/* Ikon Unik */}
          <div className="mx-auto mb-4 h-20 w-20 flex items-center justify-center">
            <svg className="h-full w-full text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20H5.5L12 6.5z" fill="currentColor" className="opacity-20"/>
              <path d="M11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-600">{message}</p>
        </div>
        {/* Tombol Aksi */}
        <div className="bg-gray-50 px-6 py-4">
          <button
            onClick={onClose}
            className="w-full bg-amber-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-amber-600 transition-colors"
          >
            Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS untuk animasi fade-in sederhana
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in-fast {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in-fast {
    animation: fade-in-fast 0.2s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default AlertModal;