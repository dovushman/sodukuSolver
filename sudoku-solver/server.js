const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { solveSudoku } = require('./src/components/Solver');

const app = express();
app.use(cors()); // Add this line to handle CORS
app.use(bodyParser.json());

app.post('/solve', (req, res) => {
  const { grid } = req.body;
  const solvedGrid = solveSudoku(grid);
  res.json({ solvedGrid });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});