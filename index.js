const express = require('express');
var cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;
let todos = [{ "value": "aSDA", "checked": false }];

express()
  .use(express.json())
  .use(cors())
  // .get('/info', (req, res) => res.send('<h1> hello world <h1/>'))
  .get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
  .get('/cat', (req, res) => res.sendFile(path.join(__dirname + '/view/cat.png')))
  .get('/todos', (req, res) => {
    console.log('get todos ->>', todos);
    res.json(todos);
  })
  .post('/todos', (req, res) => { 
    console.log('post req.body ->>', req.body);
    todos = req.body;
    console.log('hi')
    res.json(todos);
  })
  .use('/view', express.static('view'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`)); // listening http://localhost:5000/
