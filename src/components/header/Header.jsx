import React, { useState } from 'react';
import Brand from './Brand';
import NotificationBell from './NotificationBell';
import AvatarDropdown from './AvatarDropdown';

const headerColorMap = {
  ocean_blue: 'bg-gradient-to-r from-blue-600 to-blue-800',
  sunset_orange: 'bg-gradient-to-r from-orange-500 to-red-500',
  emerald_green: 'bg-gradient-to-r from-green-500 to-teal-600',
  royal_purple: 'bg-gradient-to-r from-purple-600 to-indigo-700',
  graphite_dark: 'bg-gradient-to-r from-gray-800 to-gray-900',
};

const Header = ({ appConfig, onSettingsClick }) => {
  const [hasNotification, setHasNotification] = useState(true);
  const headerBgClass = headerColorMap[appConfig.color] || headerColorMap.blue;

  return (
    <header className={`${headerBgClass} text-white shadow-lg sticky top-0 z-20`}>
      <div className="container mx-auto p-3 flex justify-between items-center">
        <Brand appName={appConfig.name} logo={appConfig.logo} />
        <div className="flex items-center space-x-4">
          <NotificationBell hasNotification={hasNotification} />
          <AvatarDropdown onSettingsClick={onSettingsClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
