import React from 'react';

const ServicesGrid = ({ menus, onMenuClick, colorMap, IconRenderer }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-3 px-1">Semua Layanan</h2>
      <div className="grid grid-cols-4 gap-3">
        {menus.map((menu) => (
          <div 
            key={menu.id} 
            onClick={() => onMenuClick(menu.id)}
            className="flex flex-col items-center justify-center space-y-2 p-2 bg-white rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-shadow"
          >
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${colorMap[menu.color].bg}`}>
              <IconRenderer menu={menu} sizeClass="w-8 h-8" />
            </div>
            <p className="font-medium text-xs text-center text-gray-700">{menu.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;