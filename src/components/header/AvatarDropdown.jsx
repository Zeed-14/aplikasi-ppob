import React, { useState, useEffect, useRef } from 'react';

const AvatarDropdown = ({ onSettingsClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSettingsClick = () => {
    onSettingsClick(); // Panggil fungsi dari props
    setIsOpen(false);  // Tutup dropdown
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="block h-10 w-10 rounded-full overflow-hidden border-2 border-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white">
        <img
          className="h-full w-full object-cover"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          alt="Avatar Pengguna"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 animate-fade-in-down">
          <button 
            onClick={handleSettingsClick}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Pengaturan
          </button>
          <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profil
          </button>
          <div className="border-t border-gray-100 my-1"></div>
          <button className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
            Keluar
          </button>
        </div>
      )}
    </div>
  );
};

// CSS untuk animasi
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-10px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .animate-fade-in-down {
    animation: fade-in-down 0.2s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default AvatarDropdown;
