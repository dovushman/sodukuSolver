// src/components/Solver.js
const solveSudoku = (grid) => {
    const isValid = (grid, row, col, num) => {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num || grid[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
          return false;
        }
      }
      return true;
    };
  
    const solve = (grid) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === '') {
            for (let num = 1; num <= 9; num++) {
              if (isValid(grid, row, col, num.toString())) {
                grid[row][col] = num.toString();
                if (solve(grid)) {
                  return true;
                }
                grid[row][col] = '';
              }
            }
            return false;
          }
        }
      }
      return true;
    };
  
    solve(grid);
    return grid;
  };
  
  module.exports = { solveSudoku };