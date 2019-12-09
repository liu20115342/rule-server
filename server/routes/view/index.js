const route = require('koa-router')()

route.get('/', async (ctx, next) => {
  await ctx.render('index', {})
})

module.exports = route