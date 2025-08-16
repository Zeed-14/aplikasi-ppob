import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import SettingsModal from '../pages/settings/SettingsModal';

const DefaultLogo = () => (
  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);

const AppLayout = () => {
  const [appConfig, setAppConfig] = useState({
    name: 'PPOB Keren',
    logo: <DefaultLogo />,
    color: 'ocean_blue',
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="font-sans bg-slate-100 min-h-screen">
      <Header 
        appConfig={appConfig} 
        onSettingsClick={() => setIsSettingsOpen(true)} 
      />
      <main className="container mx-auto p-4">
        <Outlet context={{ appConfig, setAppConfig }} />
      </main>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        appConfig={appConfig}
        setAppConfig={setAppConfig}
      />
    </div>
  );
};

export default AppLayout;
