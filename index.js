const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require("./Data/data")())
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(router)

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

server.listen(4000, () => {
  console.log('JSON Server is running')
  console.log(dateTime);
})