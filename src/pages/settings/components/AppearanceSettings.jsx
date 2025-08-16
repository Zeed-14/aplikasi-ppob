import React from 'react';

const colorOptions = [
  { name: 'ocean_blue', class: 'bg-gradient-to-r from-blue-600 to-blue-800' },
  { name: 'sunset_orange', class: 'bg-gradient-to-r from-orange-500 to-red-500' },
  { name: 'emerald_green', class: 'bg-gradient-to-r from-green-500 to-teal-600' },
  { name: 'royal_purple', class: 'bg-gradient-to-r from-purple-600 to-indigo-700' },
  { name: 'graphite_dark', class: 'bg-gradient-to-r from-gray-800 to-gray-900' },
];

const AppearanceSettings = ({ currentConfig, onConfigChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Templat Warna Header</label>
      <div className="flex space-x-3">
        {colorOptions.map(color => (
          <button
            key={color.name}
            onClick={() => onConfigChange({ ...currentConfig, color: color.name })}
            className={`w-10 h-10 rounded-full ${color.class} transition-transform hover:scale-110 ${currentConfig.color === color.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppearanceSettings;