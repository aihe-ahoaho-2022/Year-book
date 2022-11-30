import 'dotenv/config'

import express from 'express'
import path from 'path'

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

// api-routes go here
server.get('/api/hello-world', (req, res) => {
  res.json({ message: 'Hello World' })
})

// example:
// server.use('/api/dracula', draculaRoutes)
server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

if (!isDev) {
  server.use(express.static(path.resolve('dist')))
  server.use('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
  })
} else {
  server.use('*', (req, res) => {
    res.status(404).send('Not Found: Running in dev mode')
  })
}

export default server
