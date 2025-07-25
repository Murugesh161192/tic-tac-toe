import React from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import ScoreBoard from './ScoreBoard';
import { useGame } from '../hooks/useGame';

const Game = () => {
  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    isGameOver,
    scores,
    handleSquareClick,
    resetGame,
    resetScores
  } = useGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🎮 Tic Tac Toe
        </h1>
        
        <ScoreBoard 
          xWins={scores.X} 
          oWins={scores.O} 
          draws={scores.draws} 
        />
        
        <GameStatus
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
          onReset={resetGame}
        />
        
        <Board
          squares={board}
          onSquareClick={handleSquareClick}
          disabled={isGameOver}
        />
        
        <div className="text-center mt-8">
          <button
            onClick={resetScores}
            className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg
                       hover:bg-gray-600 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Reset Scores
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">Built with React & Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Game; 