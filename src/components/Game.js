import React, { useState } from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  // Check for winner
  const checkWinner = (newBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  // Check for draw
  const checkDraw = (newBoard) => {
    return newBoard.every(cell => cell !== null) && !checkWinner(newBoard);
  };

  // Handle square click
  const handleSquareClick = (index) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    const gameDraw = checkDraw(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      setScores(prev => ({
        ...prev,
        [gameWinner]: prev[gameWinner] + 1
      }));
    } else if (gameDraw) {
      setIsDraw(true);
      setScores(prev => ({
        ...prev,
        draws: prev.draws + 1
      }));
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  };

  // Reset scores
  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
  };

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
          disabled={winner || isDraw}
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