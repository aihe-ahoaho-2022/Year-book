const express = require('express')
const path = require('path')

const homeRoutes = require('./routes/home')
const profileRoutes = require('./routes/profile')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', homeRoutes)
server.use('/api/v1/upload', profileRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
