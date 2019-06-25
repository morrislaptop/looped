import Router from 'koa-router'

const router = new Router()

router.get('/router', ctx => {
    ctx.body = 'Hello Router'
})

export const routes = router.routes()
