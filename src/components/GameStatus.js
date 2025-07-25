import React from 'react';
import { getStatusColor } from '../utils/gameUtils';

const GameStatus = React.memo(({ currentPlayer, winner, isDraw, onReset }) => {
  const getStatusMessage = () => {
    if (winner) {
      return `🎉 Player ${winner} Wins!`;
    }
    if (isDraw) {
      return "🤝 It's a Draw!";
    }
    return `Current Player: ${currentPlayer}`;
  };

  return (
    <div className="text-center mb-8">
      <h2 className={`text-2xl font-bold mb-4 ${getStatusColor(winner, isDraw, currentPlayer)}`}>
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
});

GameStatus.displayName = 'GameStatus';

export default GameStatus; 