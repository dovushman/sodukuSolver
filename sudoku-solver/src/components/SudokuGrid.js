import React from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ grid, setGrid }) => {
  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, i) => 
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    setGrid(newGrid);
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="text"
              value={cell}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              maxLength="1"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;