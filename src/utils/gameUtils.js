// Game constants
export const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

export const PLAYERS = {
  X: 'X',
  O: 'O'
};

export const INITIAL_BOARD = Array(9).fill(null);

export const INITIAL_SCORES = { X: 0, O: 0, draws: 0 };

// Optimized winner checking function
export const checkWinner = (board) => {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

// Check for draw
export const checkDraw = (board, winner = null) => {
  return board.every(cell => cell !== null) && !winner;
};

// Get next player
export const getNextPlayer = (currentPlayer) => 
  currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X;

// Game state utilities
export const getGameStatus = (board) => {
  const winner = checkWinner(board);
  const isDraw = checkDraw(board, winner);
  return { winner, isDraw };
};

// Color utilities for consistent styling
export const getPlayerColor = (player) => 
  player === PLAYERS.X ? 'text-blue-600' : 'text-red-500';

export const getStatusColor = (winner, isDraw, currentPlayer) => {
  if (winner) return getPlayerColor(winner);
  if (isDraw) return 'text-gray-600';
  return getPlayerColor(currentPlayer);
}; 