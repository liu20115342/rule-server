const router = require('koa-router')()
const { build } = require('../../controllers/build')
router.prefix('/api')

router.post('/build', async(ctx, next) => {
    try {
        let res = await build()
        ctx.body = res
    } catch (error) {
        ctx.body = {
            success: false
        }
    }
})

module.exports = router