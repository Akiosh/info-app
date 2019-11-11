const express = require('express')

const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.send('<h1> some info <h1/>'))
  .get('/data', (req, res) => res.json({some: 'info'}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))