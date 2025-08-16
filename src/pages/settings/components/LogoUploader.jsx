import React, { useRef } from 'react';

const LogoUploader = ({ currentConfig, onConfigChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Simpan logo sebagai base64 data URL
        onConfigChange({ ...currentConfig, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const currentLogo = typeof currentConfig.logo === 'string' 
    ? <img src={currentConfig.logo} alt="Logo" className="h-10 w-auto object-contain" />
    : React.cloneElement(currentConfig.logo, { className: 'h-10 w-10 text-gray-600' });

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Logo Aplikasi</label>
      <div className="mt-2 flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
          {currentLogo}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/jpeg, image/svg+xml"
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Ganti Logo
        </button>
      </div>
    </div>
  );
};

export default LogoUploader;