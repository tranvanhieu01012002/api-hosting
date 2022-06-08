const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require("./Data/data")())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
  console.log('It change ne');
})