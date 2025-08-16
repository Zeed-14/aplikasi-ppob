import React from 'react';
import SettingsHeader from './components/SettingsHeader';
import AppearanceSettings from './components/AppearanceSettings';
import AppSettings from './components/AppSettings'; // Kita gunakan lagi komponen ini
import LogoUploader from './components/LogoUploader';

const SettingsModal = ({ isOpen, onClose, appConfig, setAppConfig }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in-fast">
      <div className="bg-slate-50 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        <SettingsHeader onClose={onClose} />
        <div className="p-6 space-y-6 overflow-y-auto">
          <AppSettings currentConfig={appConfig} onConfigChange={setAppConfig} />
          <LogoUploader currentConfig={appConfig} onConfigChange={setAppConfig} />
          <AppearanceSettings currentConfig={appConfig} onConfigChange={setAppConfig} />
        </div>
        <div className="p-4 border-t bg-white rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-blue-700"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;