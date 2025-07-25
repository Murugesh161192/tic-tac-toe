import React from 'react';

const ScoreBoard = ({ xWins, oWins, draws }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Score Board
      </h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{xWins}</div>
          <div className="text-sm text-gray-600">Player X</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-gray-600">{draws}</div>
          <div className="text-sm text-gray-600">Draws</div>
        </div>
        <div className="p-3 bg-red-50 rounded-lg">
          <div className="text-2xl font-bold text-red-500">{oWins}</div>
          <div className="text-sm text-gray-600">Player O</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard; 