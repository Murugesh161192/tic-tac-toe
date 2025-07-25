import React from 'react';
import Square from './Square';

const Board = React.memo(({ squares, onSquareClick, disabled }) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-72 h-72 mx-auto">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
          disabled={disabled}
        />
      ))}
    </div>
  );
});

Board.displayName = 'Board';

export default Board; 