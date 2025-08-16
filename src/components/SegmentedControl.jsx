import React from 'react';

const SegmentedControl = ({ options, selected, onSelect }) => {
  return (
    <div className="flex w-full bg-gray-200 rounded-lg p-1">
      {options.map(option => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`
            w-full py-2.5 rounded-md text-sm font-semibold transition-all duration-300 focus:outline-none
            ${selected === option.value
              ? 'bg-white text-blue-600 shadow'
              : 'text-gray-600 hover:bg-white/50'}
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;