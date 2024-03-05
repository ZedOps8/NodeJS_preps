Question: Create an Express.js application with two routes: one for the home page ("/") that responds with "Welcome to the Home Page" and another for "/about" that responds with "About Us."

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
