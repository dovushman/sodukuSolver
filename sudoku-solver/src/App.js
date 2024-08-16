import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import './App.css';

function App() {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill('')));

  const handleSolve = async () => {
    try {
      const response = await fetch('http://localhost:3001/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ grid }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setGrid(data.solvedGrid);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} setGrid={setGrid} />
      <button onClick={handleSolve}>Solve</button>
    </div>
  );
}

export default App;