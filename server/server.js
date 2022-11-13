const express = require('express')
const path = require('path')

const homeRoutes = require('./routes/home')
const playRoutes = require('./routes/play')
const finalRoutes = require('./routes/final')
const resultsRoutes = require('./routes/results')
const createRoutes = require('./routes/create')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/home', homeRoutes)
server.use('/api/v1/play', playRoutes)
server.use('/api/v1/final', finalRoutes)
server.use('/api/v1/results', resultsRoutes)
server.use('/api/v1/create', createRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
