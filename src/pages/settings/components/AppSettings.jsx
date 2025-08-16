import React from 'react';

const AppSettings = ({ currentConfig, onConfigChange }) => {
  return (
    <div>
      <label htmlFor="app-name" className="block text-sm font-medium text-gray-700">Nama Aplikasi</label>
      <input
        type="text"
        id="app-name"
        value={currentConfig.name}
        onChange={(e) => onConfigChange({ ...currentConfig, name: e.target.value })}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default AppSettings;