import React from 'react';

const GameStatus = ({ currentPlayer, winner, isDraw, onReset }) => {
  const getStatusMessage = () => {
    if (winner) {
      return `🎉 Player ${winner} Wins!`;
    }
    if (isDraw) {
      return "🤝 It's a Draw!";
    }
    return `Current Player: ${currentPlayer}`;
  };

  const getStatusColor = () => {
    if (winner) {
      return winner === 'X' ? 'text-blue-600' : 'text-red-500';
    }
    if (isDraw) {
      return 'text-gray-600';
    }
    return currentPlayer === 'X' ? 'text-blue-600' : 'text-red-500';
  };

  return (
    <div className="text-center mb-8">
      <h2 className={`text-2xl font-bold mb-4 ${getStatusColor()}`}>
        {getStatusMessage()}
      </h2>
      <button
        onClick={onReset}
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg
                   hover:bg-indigo-700 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        New Game
      </button>
    </div>
  );
};

export default GameStatus; 