const express = require('express');
var cors = require('cors');

const PORT = process.env.PORT || 5000;
let todos =[{"value":"aSDA","checked":false}];

express()
  .use(express.json())
  .use(cors())
  .get('/', (req, res) => res.send('<h1> some info <h1/>'))
  .get('/todos', (req, res) => {
    res.json(todos);
  })
  .post('/todos', (req, res) => { 
    console.log(req.body);
    todos = req.body;
    console.log('hi')
    res.json(todos);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))