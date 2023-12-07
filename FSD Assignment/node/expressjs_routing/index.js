const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/users', (req, res) => {
  // Handle creating a new user
  res.send('User created');
});

app.get('/api/users/:id', (req, res) => {
  // Handle retrieving a user by ID
  const userId = req.params.id;
  res.send(`User ${userId}`);
});

app.put('/api/users/:id', (req, res) => {
  // Handle updating a user by ID
  const userId = req.params.id;
  res.send(`User ${userId} updated`);
});

app.delete('/api/users/:id', (req, res) => {
  // Handle deleting a user by ID
  const userId = req.params.id;
  res.send(`User ${userId} deleted`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});