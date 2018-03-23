const express = require('express');
const mongoose = require('mongoose');

const server = express();
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.get('/cards', (req, res) => {
  res.json([]);
});

server.get('/card/:id', (req, res) => {
  res.json({});
});

server.post('/card/create', (req, res) => {
  res.json({});
});

server.post('/card/edit', (req, res) => {
  res.json({});
});

server.listen(3000);
