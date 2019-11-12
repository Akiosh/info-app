const express = require('express');
var cors = require('cors');

const PORT = process.env.PORT || 5000;
const toDos = ['asd', 'asd', 'asdasds'];

express()
  .use(express.json())
  .use(cors())
  .get('/', (req, res) => res.send('<h1> some info <h1/>'))
  .get('/todos', (req, res) => {
    res.json(toDos);
  })
  .post('/todos', (req, res) => { 
    toDos.push(req.body.todoElem);
    res.json(toDos);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))