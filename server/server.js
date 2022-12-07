const express = require('express')
const path = require('path')

const commentRoutes = require('./routes/comments')
const profilesRoutes = require('./routes/profiles')

const bookRoutes = require('./routes/books')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(
  '/user_uploads',
  express.static(path.join(__dirname, '../storage/images'))
)

server.use('/api/v1/books', bookRoutes)
server.use('/api/v1/profiles', profilesRoutes)
server.use('/api/v1/comments', commentRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
