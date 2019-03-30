import * as Koa from 'koa'

const app = new Koa()

async function responseToContext(ctx, next) {
  const result = await next()
  
  ctx.body = result
}

app.use(responseToContext)

export { app }