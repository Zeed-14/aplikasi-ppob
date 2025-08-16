import React from 'react';

const StatusIcon = ({ status }) => {
  if (status === 'success') {
    return (
      <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
        <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  return (
    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100">
      <svg className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
};

const StatusHeader = ({ status, message }) => {
  return (
    <>
      <StatusIcon status={status} />
      <h1 className="mt-5 text-2xl font-bold text-gray-900">{message}</h1>
    </>
  );
};

export default StatusHeader;
