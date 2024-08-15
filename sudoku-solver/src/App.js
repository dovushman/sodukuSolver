import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import './App.css';

function App() {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill('')));

  const handleSolve = async () => {
    const response = await fetch('http://localhost:3001/solve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ grid }),
    });
    const data = await response.json();
    setGrid(data.solvedGrid);
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