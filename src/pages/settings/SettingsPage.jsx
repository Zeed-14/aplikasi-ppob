import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SettingCard from './components/SettingCard';
import AppearanceSettings from './components/AppearanceSettings';
import AppSettings from './components/AppSettings';

const SettingsPage = () => {
  // Ambil appConfig dan setAppConfig dari context Outlet
  const { appConfig, setAppConfig } = useOutletContext();

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800">Pengaturan</h1>
      
      <SettingCard title="Tampilan" description="Ubahsuai tampilan aplikasi Anda.">
        <AppearanceSettings 
          currentConfig={appConfig}
          onConfigChange={setAppConfig}
        />
      </SettingCard>

      <SettingCard title="Aplikasi" description="Atur informasi dasar aplikasi.">
        <AppSettings
          currentConfig={appConfig}
          onConfigChange={setAppConfig}
        />
      </SettingCard>
    </div>
  );
};

export default SettingsPage;