import React from 'react';

const Square = ({ value, onClick, disabled }) => {
  return (
    <button
      className={`
        w-full h-full bg-white border-2 border-gray-300 rounded-lg
        text-4xl font-bold transition-all duration-200
        hover:bg-gray-50 hover:border-gray-400 hover:scale-105
        disabled:cursor-not-allowed disabled:hover:scale-100
        ${value === 'X' ? 'text-blue-600' : ''}
        ${value === 'O' ? 'text-red-500' : ''}
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={onClick}
      disabled={disabled || value !== null}
    >
      {value}
    </button>
  );
};

export default Square; 