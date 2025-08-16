import React from 'react';

const filterCategories = ['Semua', 'Harian', 'Mingguan', 'Bulanan'];

const PackageFilter = ({ activeFilter, onSelect }) => {
  return (
    <div className="px-1 mt-6">
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {filterCategories.map(category => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap
              ${activeFilter === category 
                ? 'bg-blue-600 text-white shadow' 
                : 'bg-white text-gray-700 hover:bg-blue-50'}
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PackageFilter;