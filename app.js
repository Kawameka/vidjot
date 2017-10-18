const express = require('express');

//initializes application
const app = express();

// Index Route
app.get('/', (req, res) => {
  res.send('INDEX');
});

//About Route
app.get('/about', (req, res) => {
  res.send('ABOUT');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});