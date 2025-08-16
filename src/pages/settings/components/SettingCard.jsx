import React from 'react';

const SettingCard = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="p-4 space-y-4">
        {children}
      </div>
    </div>
  );
};

export default SettingCard;