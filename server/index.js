require('dotenv').config()
const http = require('http')
const app = require('./app')
const ip = require('ip')
const { port, domain } = require('./config/env')
const server = http.createServer(app.callback())
server.listen(port);

server.on('listening', () => {
  console.log("服务已启动：", `http://${ip.address()}:${port}`)
  if(domain) {
    console.log("          ", `${domain}`)
  }
});