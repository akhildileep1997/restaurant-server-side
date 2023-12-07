//1 import json server
const jsonServer = require('json-server')

//2 create server
const server = jsonServer.create()

//3 setup path for db.json file
const router = jsonServer.router('db.json') 

//4 return middleware used by json-server
const middleware = jsonServer.defaults()

//5 set up port for the server
const port = process.env.port || 3002

//6 use middleware  and router
server.use(middleware)
server.use(router)

//7 to run the server
server.listen(port,()=>{
    console.log('listening in port'+port);
})