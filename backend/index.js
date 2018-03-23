const express = require('express');
const server = express();

server.get('/cards', (req, res) => {
  res.json([])
});

server.listen(3000);