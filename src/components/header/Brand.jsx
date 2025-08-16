import React from 'react';

const Brand = ({ appName, logo }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Render logo SVG atau gambar */}
      {typeof logo === 'string' ? (
        <img src={logo} alt="App Logo" className="h-8 w-auto" />
      ) : (
        logo
      )}
      <h1 className="text-xl font-bold tracking-tight text-white">{appName}</h1>
    </div>
  );
};

export default Brand;
