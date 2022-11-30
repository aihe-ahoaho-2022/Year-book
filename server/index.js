import server from './server.js'

const port = process.env.PORT || 3000

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

server.listen(port, () => {
  console.log(
    isDev
      ? `API Server is online\nHealth check: http://localhost:${port}/api/hello-world`
      : `App is running at http://localhost:${port}`
  )
})
