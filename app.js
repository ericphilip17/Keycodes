const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

//Middleware
app.use('/CSS', express.static('CSS'));
app.use('/SCRIPTS', express.static('SCRIPTS'));
app.use('/img', express.static('img'));

//Render Requests
app.get('/keyCodes', (req, res) => {
  const obj = {start: 'KeyCodes Reference Page'}
  res.render('index', {obj: obj});
});

























app.listen(3000);
console.log('Now listening on port 3000');
