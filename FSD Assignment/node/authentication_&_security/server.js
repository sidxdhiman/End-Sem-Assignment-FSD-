const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authentication', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });