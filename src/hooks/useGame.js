import { useState, useCallback, useMemo } from 'react';
import {
  INITIAL_BOARD,
  INITIAL_SCORES,
  PLAYERS,
  getGameStatus,
  getNextPlayer
} from '../utils/gameUtils';

export const useGame = () => {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.X);
  const [scores, setScores] = useState(INITIAL_SCORES);

  // Memoized game status to avoid recalculation on every render
  const gameStatus = useMemo(() => getGameStatus(board), [board]);
  const { winner, isDraw } = gameStatus;

  // Memoized derived state
  const isGameOver = useMemo(() => winner || isDraw, [winner, isDraw]);

  // Optimized square click handler with useCallback
  const handleSquareClick = useCallback((index) => {
    // Check current game status first
    const currentGameStatus = getGameStatus(board);
    
    // Early return if square is occupied or game is already over
    if (board[index] || currentGameStatus.winner || currentGameStatus.isDraw) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    // Check game status with new board
    const { winner: newWinner, isDraw: newIsDraw } = getGameStatus(newBoard);
    
    // Update scores if game ended
    if (newWinner) {
      setScores(prev => ({
        ...prev,
        [newWinner]: prev[newWinner] + 1
      }));
    } else if (newIsDraw) {
      setScores(prev => ({
        ...prev,
        draws: prev.draws + 1
      }));
    } else {
      // Switch player only if game continues
      setCurrentPlayer(getNextPlayer(currentPlayer));
    }
  }, [board, currentPlayer]);

  // Reset game function
  const resetGame = useCallback(() => {
    setBoard(INITIAL_BOARD);
    setCurrentPlayer(PLAYERS.X);
  }, []);

  // Reset scores function
  const resetScores = useCallback(() => {
    setScores(INITIAL_SCORES);
  }, []);

  return {
    // Game state
    board,
    currentPlayer,
    winner,
    isDraw,
    isGameOver,
    scores,
    
    // Actions
    handleSquareClick,
    resetGame,
    resetScores
  };
}; 