const Koa = require('koa')
const static = require('koa-static')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const views = require('koa-views')
const logger = require('koa-logger')
const indexViewRoute = require('./routes/view/index')
const buildApiRoute = require('./routes/api/build')
const app = new Koa()

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(process.cwd() + '/dist'))
app.use(static(__dirname+ '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))
app.use(indexViewRoute.routes(), indexViewRoute.allowedMethods())
app.use(buildApiRoute.routes(), buildApiRoute.allowedMethods())

module.exports = app